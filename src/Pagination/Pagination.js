import React from "react";
import classes from "./Pagination.module.css";

function Pagination({ gamesPerPage, howManyGames, gamePageIndex, changePage }) {
  const allPages = Math.ceil(howManyGames.length / gamesPerPage);
  const pages = [];

  const switchPage = (i) => {
    console.log("pagination.js");
    changePage(i);
  };
  function renderPages() {
    for (let i = 1; i <= allPages; i++) {
      pages.push(
        <div
          className={`${classes.page} ${
            i === gamePageIndex && classes.activepage
          }`}
          key={i}
          onClick={() => switchPage(i)}
        >
          {i}
        </div>
      );
    }
    return pages;
  }

  return <div className={classes.pagination}>{renderPages()}</div>;
}

export default Pagination;
