import React, { useEffect, useReducer, useState } from "react";
import searchGif from "../Images/searchGif.gif";
import classes from "./Filter.module.css";

function Filter(props) {
  const [priceFilter, setPriceFilterState] = useState(
    localStorage.hasOwnProperty("priceFilter")
      ? true
      : !localStorage.hasOwnProperty("ratingFilter")
      ? true
      : false
  );
  const [ratingFilter, setRatingFilterState] = useState(
    localStorage.hasOwnProperty("ratingFilter") ? true : false
  );
  const [userSearch, setUserSearch] = useState("");
  const [searchTime, setSearchTime] = useState(false);
  const setPriceFilter = () => {
    if (priceFilter) return;
    localStorage.removeItem("ratingFilter");
    localStorage.setItem("priceFilter", "1");
    setPriceFilterState(true);
    setRatingFilterState(false);
    props.setFilters("price");
  };

  const setRatingFilter = () => {
    if (ratingFilter) return;
    localStorage.removeItem("priceFilter");
    localStorage.setItem("ratingFilter", "1");
    setPriceFilterState(false);
    setRatingFilterState(true);
    props.setFilters("rating");
  };

  const searchForGame = (e) => {
    setSearchTime(true);
    setUserSearch(e.target.value);
  };

  useEffect(() => {
    const searchTimeout = setTimeout(() => {
      setSearchTime(false);
      props.setUserInput(userSearch);
    }, 2000);
    return () => clearTimeout(searchTimeout);
  }, [userSearch]);

  return (
    <div className={classes.filter}>
      <div className={classes.searchGame}>
        <input
          type="text"
          onKeyUp={searchForGame}
          placeholder="Search for game"
        />
        {searchTime && (
          <img src={searchGif} alt="searchgif" className={classes.searchIcon} />
        )}
      </div>
      <div className={classes.filters}>
        <span>Cheapest first</span>
        <div
          className={`${classes.filterRating} ${
            priceFilter === true ? classes.active : ""
          }`}
          onClick={setPriceFilter}
        ></div>
        <span>Best rated first</span>
        <div
          className={`${classes.filterRating} ${
            ratingFilter && classes.active
          }`}
          onClick={setRatingFilter}
        ></div>
      </div>
    </div>
  );
}

export default Filter;
