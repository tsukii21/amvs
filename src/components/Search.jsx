import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import songs from "../data/songs";
import animes from "../data/animes";
import PlayArrowOutlinedIcon from "@material-ui/icons/PlayArrowOutlined";

function Search(props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(songs);

  const handleChange = (event) => {
    setQuery(event.target.value);
    let searchedAnimes = animes.filter((anime) =>
      anime.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    let searchedAnimeSongs = [];
    if (searchedAnimes.length) {
      searchedAnimes.forEach((anime) => {
        searchedAnimeSongs = searchedAnimeSongs.concat(
          songs.filter((song) => song.anime_id === anime.id)
        );
      });
    }
    let searchedSongs = songs.filter(
      (song) =>
        song.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
        song.artist.toLowerCase().includes(event.target.value.toLowerCase())
    );

    setResults(searchedSongs.concat(searchedAnimeSongs));
  };

  return (
    <div className="search-container">
      <Link to="/">
        <ArrowBackIcon id="back-icon-2" fontSize="large" />
      </Link>

      <div className="search-box">
        <input
          onChange={handleChange}
          type="text"
          placeholder="search"
          value={query}
        />
      </div>
      {results.length ? (
        <div className="songs-list-playlist">
          {results.map((song, index) => {
            return (
              <div
                onClick={() => {
                  props.playSongById(song.id);
                }}
                className="song-list-item"
              >
                <h3>
                  {song.title}{" "}
                  <span>
                    {" "}
                    <PlayArrowOutlinedIcon fontSize="large" />{" "}
                  </span>
                </h3>
                <h4>{song.artist}</h4>
              </div>
            );
          })}
        </div>
      ) : (
        <div style={{ width: "100%", textAlign: "center", marginTop: "5vh" }}>
          <h1
            style={{
              fontWeight: "normal",
              fontSize: "2rem",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            Nothing found
          </h1>
        </div>
      )}
    </div>
  );
}

export default Search;
