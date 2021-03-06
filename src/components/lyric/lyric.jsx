import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "../lyric/lyric.css";

export default function Lyric() {
  let { musicName, artist } = useParams();
  const [lyric, setLyric] = useState("");

  useEffect(() => {
    fetch(`https://api.lyrics.ovh/v1/${artist}/${musicName}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setLyric(result.lyrics || result.error);
        },
        (error) => {
          let notFound = error.error;
          setLyric(notFound);
        }
      );
  }, []);
  return (
    <div className="container mt-5">
      <h3 className="title">{musicName}</h3>
      <h2 className="artist">{artist}</h2>
      <div className="lyric-text">{lyric}</div>
    </div>
  );
}
