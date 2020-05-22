import React from "react";
import PlayArrowOutlinedIcon from "@material-ui/icons/PlayArrowOutlined";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import songs from "../data/songs";

function All(props) {
  return (
    <div
      style={{ padding: "180px 0px 0px 150px", position: "relative" }}
      className="panel row"
    >
      <div className="songs-list-playlist">
        {songs.map((song, index) => {
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
      <button
        onClick={() => {
          props.expand();
          props.shuffleList();
        }}
        className="btn shuffle-btn"
        style={{ position: "absolute", right: "40vh", top: "33vh" }}
      >
        <ShuffleIcon id="playlist-shuffle-btn" fontSize="large" />
      </button>
    </div>
  );
}

export default All;
