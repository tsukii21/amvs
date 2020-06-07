import React, { useState, useEffect } from "react";
import songs from "../data/songs";
import animes from "../data/animes";
import PlayArrowOutlinedIcon from "@material-ui/icons/PlayArrowOutlined";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

function Anime({ id, playSongById }) {
  const [videos, setVideos] = useState([songs]);
  const [anime, setAnime] = useState([animes]);

  useEffect(() => {
    setVideos(songs.filter((song) => song.anime_id === parseInt(id)));
    setAnime(animes.filter((a) => a.id === parseInt(id)));
  }, [id]);

  return (
    <div
      className="anime-container"
      style={{
        backgroundImage:
          "url('" +
          process.env.PUBLIC_URL +
          "/images/" +
          anime[0].id +
          ".jpg')",
      }}
    >
      <div className="anime-container-cover">
        <Link to="/">
          <ArrowBackIcon id="back-icon" fontSize="large" />
        </Link>

        <h1>{anime[0].name}</h1>
        <div className="songs-list">
          {videos.map((song) => {
            return (
              <div
                onClick={() => {
                  playSongById(song.id);
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
      </div>
    </div>
  );
}

export default Anime;
