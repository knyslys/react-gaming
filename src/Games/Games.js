import React, { useMemo } from "react";
import Container from "../UI/Container";
import GamesFilter from "./GamesFilter";
import Navigation from "../Navigation/Navigation";
import GamesList from "./GamesList";
import Loading from "../UI/Loading";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./Games.module.css";
function Games({
  isLoading,
  gamesList,
  setStores,
  testKey,
  gamesPerPage,
  gamePageIndex,
}) {
  console.log(isLoading);

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

{
  /* <GamesFilter></GamesFilter>
    <GamesList></GamesList> */
}
