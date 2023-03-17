import React, { useMemo } from "react";

import Filter from "../FIlter/Filter";
import Navigation from "../Navigation/Navigation";
import GamesList from "./GamesList";
import Loading from "../UI/Loading";

import classes from "./Games.module.css";
function Games({
  isLoading,
  gamesList,
  setStores,
  testKey,
  gamesPerPage,
  gamePageIndex,
  setStoreFilter,
}) {
  const setFilters = (filterBy) => {
    setStoreFilter(filterBy);
  };
  return isLoading === true || isLoading === undefined ? (
    <React.Fragment>
      <Navigation setStore={setStores} />
      <Loading />
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Navigation setStore={setStores} />

      <GamesList
        games={gamesList}
        gamesPerPage={gamesPerPage}
        gamePageIndex={gamePageIndex}
      />
    </React.Fragment>
  );
}

export default Games;
