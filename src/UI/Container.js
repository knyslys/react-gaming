import React, { useState, useRef, useEffect, useReducer } from "react";
import classes from "./Container.module.css";
import { motion } from "framer-motion";
function Container(props) {
  // const [height, setHeight] = useState(0);
  // const ref = useRef(null);

  // useEffect(() => {
  //   setHeight(ref.current.clientHeight);
  // }, [props.index, props.store]);

  return (
    <div className={`${classes.container} ${props.className}`}>
      {props.children}
    </div>
  );
}

export default Container;
