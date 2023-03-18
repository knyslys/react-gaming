import React, { useState } from "react";
import classes from "./GamesList.module.css";
import GameItem from "./GameItem";
import { AnimatePresence, motion } from "framer-motion";

function GamesList({ games, gamesPerPage, gamePageIndex, userIsSearching }) {
  const gameItems = [];

  const renderGames = () => {
    if (userIsSearching) {
      gamePageIndex = 1;
    }
    for (
      let i = (gamePageIndex - 1) * gamesPerPage;
      i <= gamePageIndex * gamesPerPage;
      i++
    ) {
      let time = Math.random();
      if (games[i] === undefined) {
        break;
      }
      console.log(i);

      gameItems.push(
        <GameItem game={games[i]} key={games[i].dealID} opacityTime={time} />
      );
    }

    console.log(gameItems);
    return gameItems;
  };

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        animate={{ opacity: [0.5, 1] }}
        exit={{ opacity: [0], transition: { duration: 0.5 } }}
        transition={{ duration: 0.5 }}
        className={classes.gamesList}
      >
        {renderGames()}
      </motion.div>
    </AnimatePresence>
  );
}

export default GamesList;
