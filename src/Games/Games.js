import React, { useEffect, useState } from "react";

import Filter from "../FIlter/Filter";
import Navigation from "../Navigation/Navigation";
import GamesList from "./GamesList";
import Loading from "../UI/Loading";
import stringSimilarity from "string-similarity";
import Pagination from "../Pagination/Pagination";
import classes from "./Games.module.css";
function Games({
  isLoading,
  gamesList,
  setStores,
  setStoreFilter,
  userIsSearching,
}) {
  const [filter, setFilter] = useState("price");
  const [userInput, setUserInput] = useState("");
  const [pageIndex, setPageIndex] = useState(
    localStorage.hasOwnProperty("cachedPageIndex")
      ? parseInt(localStorage.getItem("cachedPageIndex"))
      : 1
  );
  const [gamesPerPage, setGamesPerPage] = useState(11);
  const filterHandler = (filterBy) => {
    setFilter(filterBy);
  };

  const getUserInput = (input) => {
    setUserInput(input);
  };

  const changePageHandler = (i) => {
    localStorage.setItem("cachedPageIndex", i);
    setPageIndex(i);
  };

  const getFilteredGames = () => {
    switch (filter) {
      case "price":
        if (userInput.trim().length > 0) {
          return gamesList
            .filter((g) => {
              if (
                stringSimilarity.compareTwoStrings(
                  userInput.toLocaleLowerCase(),
                  g.title.toLowerCase()
                ) > 0.3
              ) {
                return g;
              }
            })
            .sort((a, b) => {
              return a.salePrice - b.salePrice;
            });
        } else {
          return gamesList.sort((a, b) => a.salePrice - b.salePrice);
        }
      case "rating":
        if (userInput.trim().length > 0) {
          return gamesList
            .filter((g) => {
              if (
                stringSimilarity.compareTwoStrings(
                  userInput.toLowerCase(),
                  g.title.toLowerCase()
                ) > 0.3
              ) {
                return g;
              }
            })
            .sort((a, b) => {
              return b.metacriticScore - a.metacriticScore;
            });
        } else {
          return gamesList.sort(
            (a, b) => b.metacriticScore - a.metacriticScore
          );
        }

      default:
        return;
    }
  };

  return isLoading === true || isLoading === undefined ? (
    <React.Fragment>
      <Navigation setStore={setStores} />

      <Loading />
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Navigation setStore={setStores} />
      <Filter setFilters={filterHandler} setUserInput={getUserInput}></Filter>
      <GamesList
        games={getFilteredGames()}
        gamesPerPage="11"
        gamePageIndex={pageIndex}
        userIsSearching={userInput.length > 0 ? true : false}
      />
      <Pagination
        gamesPerPage={gamesPerPage}
        howManyGames={getFilteredGames()}
        gamePageIndex={pageIndex}
        changePage={changePageHandler}
      ></Pagination>
    </React.Fragment>
  );
}

export default Games;
