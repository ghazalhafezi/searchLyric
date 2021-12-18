import React, { useState } from "react";
import "./Search.css";
import Music from "./music/music";

function Search() {
  const [list, setList] = useState([]);
  const [searchResult, setSearchResult] = useState(false);
  const searchHandler = (event) => {
    let musicName = event.target.value;

    fetch(`https://api.lyrics.ovh/suggest/${musicName}`)
      .then((res) => res.json())
      .then((result) => {
        setList(result.data);
        setSearchResult(true);
      });
  };

  return (
    <div className="wrapper">
      <div className="container">
        <input
          placeholder="Enter music"
          className="custom-input"
          onChange={searchHandler}
          type="text"
        />
        <div className="result">
          {searchResult ? <Music list={list} /> : <span>no result</span>}
        </div>
      </div>
    </div>
  );
}

export default Search;
