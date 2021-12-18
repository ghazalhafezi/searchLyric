import React, { useState } from "react";
import "./Search.css";
import Music from "./music/music";

function Search() {
  const [list, setList] = useState([]);
  const searchHandler = (event) => {
    let musicName = event.target.value;

    fetch(`https://api.lyrics.ovh/suggest/${musicName}`)
      .then((res) => res.json())
      .then((result) => {
        setList(result.data);
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
          {list.length > 0 ? <Music list={list} /> : <span>no result</span>}
        </div>
      </div>
    </div>
  );
}

export default Search;
