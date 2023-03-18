import React, { useReducer, useState, useEffect } from "react";
import Container from "./UI/Container";
import Header from "./Header/Header";
import Games from "./Games/Games";
import Pagination from "./Pagination/Pagination";
import classes from "./App.module.css";

function App() {
  const gamesReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_DATA":
        return {
          url: action.url,
          listOfGames: state.listOfGames,
          isLoading: action.isLoading,
        };
      //
      case "FETCH_DATA_COMPLETE":
        return {
          isLoading: action.isLoading,
          listOfGames: action.listOfGames,
          url: action.url,
        };

      default:
        return state;
    }
  };

  const [storeID, setStoreID] = useState(
    localStorage.hasOwnProperty("cachedPageStore")
      ? parseInt(localStorage.getItem("cachedPageStore"))
      : 1
  ); //default store set to steam

  const [gamesState, dispatchGame] = useReducer(gamesReducer, {
    isLoading: undefined,
    listOfGames: undefined,
    url: "https://www.cheapshark.com/api/1.0/deals?storeID=" + storeID,
  });

  const setStoreHandler = (id) => {
    localStorage.setItem("cachedPageStore", id);
    setStoreID(id);
  };

  useEffect(() => {
    dispatchGame({
      type: "FETCH_DATA",
      isLoading: true,
      listOfGames: undefined,
      url: "https://www.cheapshark.com/api/1.0/deals?storeID=" + storeID,
    });

    const fetchDelay = setTimeout(() => {
      const fetchGame = async () => {
        try {
          const request = await fetch(gamesState.url);
          const gamesData = await request.json();
          console.log(gamesData);
          dispatchGame({
            type: "FETCH_DATA_COMPLETE",
            url: "https://www.cheapshark.com/api/1.0/deals?storeID=" + storeID,
            isLoading: false,
            listOfGames: gamesData,
          });
        } catch (err) {
          console.log("klaida: " + err.message);
          // dispatchGame({ type: "REQUEST_ERROR", message: err });
        }
      };
      fetchGame();
    }, 1500);

    return () => {
      clearTimeout(fetchDelay);
    };
  }, [storeID, gamesState.url]);

  return (
    <React.Fragment>
      <Header></Header>

      <Container className={classes.app}>
        <Games
          isLoading={gamesState.isLoading}
          gamesList={gamesState.listOfGames}
          setStores={setStoreHandler}
        ></Games>
      </Container>
    </React.Fragment>
  );
}

export default App;
