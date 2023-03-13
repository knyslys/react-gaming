import React from "react";
import classes from "./GameItem.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { IconContext } from "react-icons";
import { HiCurrencyEuro } from "react-icons/hi";
import { HiCash } from "react-icons/hi";
import { AiFillAppstore } from "react-icons/ai";
function GameItem({ game, opacityTime }) {
  const getStore = () => {
    let store;

    switch (game.storeID) {
      case "1":
        store = "Steam";
        break;
      case "11":
        store = "Humble Store";
        break;
      case "13":
        store = "Uplay";
        break;
      case "7":
        store = "GoG";
        break;
      default:
        store = 0;
    }

    return store;
  };

  return (
    <motion.div
      key={game.id + Math.random()}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: opacityTime }}
      className={classes.gameCard}
    >
      <div className={classes.savings}>
        <span>{Math.floor(game.savings)}</span>
        <span>%</span>
      </div>
      <div className={classes.gamePicture}>
        <img src={game.thumb} alt={game.title} />
      </div>
      <div className={classes.gameInfo}>
        <h2 className={classes.gameTitle}>{game.title}</h2>
        {/* normal price */}
        <div className={classes.gameInfoDetails}>
          <IconContext.Provider value={{ size: "30px" }}>
            <HiCurrencyEuro />
          </IconContext.Provider>
          <span className={classes.gameDetails}>
            Normal price: {game.normalPrice}
          </span>
        </div>
        {/* current price */}
        <div className={classes.gameInfoDetails}>
          <IconContext.Provider value={{ size: "30px" }}>
            <HiCash />
          </IconContext.Provider>
          <span className={classes.gameDetails}>
            Current price: {game.salePrice}
          </span>
        </div>
        {/* store */}
        <div className={classes.gameInfoDetails}>
          <IconContext.Provider value={{ size: "30px" }}>
            <AiFillAppstore />
          </IconContext.Provider>
          <span className={classes.gameDetails}>Store: {getStore()}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default GameItem;
