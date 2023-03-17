import React, { useEffect, useReducer, useState } from "react";
import classes from "./Filter.module.css";

function Filter(props) {
  // const filterReducer = (state, action) => {
  //   switch (action.type) {
  //     case "SET_PRICE_FILTED":
  //       console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB");
  //       return {
  //         priceFilter: true,
  //         ratingFilter: false,
  //       };

  //     case "SET_RATING_FILTED":
  //       return {
  //         priceFilter: false,
  //         ratingFilter: true,
  //       };
  //     default:
  //       return state;
  //   }
  // };
  const [priceFilter, setPriceFilterState] = useState(undefined);
  const [ratingFilter, setRatingFilterState] = useState(undefined);

  // const [gameFilter, dispatchGameFilter] = useReducer(filterReducer, {
  //   priceFilter: false,
  //   ratingFilter: false,
  // });

  const setPriceFilter = () => {
    console.log("AHSIJUIJAHNSJSNAIFJNFAIS");
    setPriceFilterState(true);
    setRatingFilterState(false);
    props.setFilters("price");
    // setTimeout(() => {
    //   props.setFilters("price");
    // }, 3000);
  };

  const setRatingFilter = () => {
    setPriceFilterState(false);
    setRatingFilterState(true);
  };

  // useEffect(() => {
  //   setFilter("price");
  // }, [priceFilter]);
  return (
    <div className={classes.filter}>
      <div
        className={`${classes.filterPrice} ${
          priceFilter === true ? classes.active : ""
        }`}
        onClick={setPriceFilter}
      ></div>
      <div
        className={`${classes.filterRating} ${ratingFilter && classes.active}`}
        onClick={setRatingFilter}
      ></div>
    </div>
  );
}

export default Filter;
