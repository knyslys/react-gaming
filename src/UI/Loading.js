import React from "react";
import classes from "./Loading.module.css";
import loadingGif from "../Images/loading.gif";

import { motion, AnimatePresence } from "framer-motion";
function Loading() {
  return (
    <React.Fragment>
      <div className={classes.loading}>
        <img src={loadingGif} alt="Loading" className={classes.loadingGif} />
      </div>
      <motion.span
        className={classes.loadingText}
        animate={{ x: [0, 20, 0], y: [0, 5, 4, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        key={Math.random()}
      >
        Our Hedgehog is looking for games!
      </motion.span>
    </React.Fragment>
  );
}

export default Loading;
