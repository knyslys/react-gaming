import React, { useState, useReducer } from "react";
import classes from "./Navigation.module.css";
import { AiTwotoneAppstore } from "react-icons/ai";
import { IconContext } from "react-icons";
const Navigation = (props) => {
  const reducerClass = (state, action) => {
    if (action.type === "SET_ACTIVE_CLASS") {
      return {
        steamSelected: action.steamSelected,
        gogSelected: action.gogSelected,
        uplaySelected: action.uplaySelected,
        humbleSelected: action.humbleSelected,
      };
    }
  };

  const [classesState, dispatchClasses] = useReducer(reducerClass, {
    //jeigu jau buvo pasirinktas store, tada steamas nera defaultas tik uzkrovus, jeigu nebuvo, tada steamas yra defaultas
    steamSelected:
      parseInt(localStorage.getItem("cachedPageStore")) === 1
        ? true
        : !localStorage.hasOwnProperty("cachedPageStore")
        ? true
        : false,
    gogSelected:
      parseInt(localStorage.getItem("cachedPageStore")) === 7 ? true : false,
    humbleSelected:
      parseInt(localStorage.getItem("cachedPageStore")) === 11 ? true : false,
    uplaySelected:
      parseInt(localStorage.getItem("cachedPageStore")) === 13 ? true : false,
  });

  const selectStore = (event) => {
    const storeClass = event.target.classList;
    let storeID;

    //clickinam ant steamo
    if (storeClass.contains(classes.steam)) {
      storeID = 1;
      dispatchClasses({
        type: "SET_ACTIVE_CLASS",
        steamSelected: true,
        gogSelected: false,
        uplaySelected: false,
        humbleSelected: false,
      });
    }
    //clickinam ant humble
    if (storeClass.contains(classes.humble)) {
      storeID = 11;
      dispatchClasses({
        type: "SET_ACTIVE_CLASS",
        steamSelected: false,
        gogSelected: false,
        uplaySelected: false,
        humbleSelected: true,
      });
    }
    //clickinam ant uplay
    if (storeClass.contains(classes.uplay)) {
      storeID = 13;
      dispatchClasses({
        type: "SET_ACTIVE_CLASS",
        steamSelected: false,
        gogSelected: false,
        uplaySelected: true,
        humbleSelected: false,
      });
    }

    //clickinam ant gog
    if (storeClass.contains(classes.gog)) {
      storeID = 7;
      dispatchClasses({
        type: "SET_ACTIVE_CLASS",
        steamSelected: false,
        gogSelected: true,
        uplaySelected: false,
        humbleSelected: false,
      });
    }

    //setinam store
    props.setStore(storeID);
  };

  return (
    <div className={classes.navigationWrapper}>
      <ul className={classes.navigation}>
        <li
          className={`${classes.steam} ${
            classesState.steamSelected ? classes.selected : ""
          }`}
          onClick={selectStore}
          key="1"
        >
          Steam
        </li>
        <li
          className={`${classes.gog} ${
            classesState.gogSelected ? classes.selected : ""
          }`}
          onClick={selectStore}
          key="2"
        >
          GoG
        </li>
        <li
          className={`${classes.uplay} ${
            classesState.uplaySelected ? classes.selected : ""
          }`}
          onClick={selectStore}
          key="3"
        >
          Uplay
        </li>
        <li
          className={`${classes.humble} ${
            classesState.humbleSelected ? classes.selected : ""
          }`}
          onClick={selectStore}
          key="4"
        >
          Humble Store
        </li>

        <div className={classes.buble}>
          <IconContext.Provider
            value={{ size: "20px", className: classes.bubleIcon }}
          >
            <AiTwotoneAppstore />
          </IconContext.Provider>
        </div>
      </ul>
    </div>
  );
};

export default Navigation;
