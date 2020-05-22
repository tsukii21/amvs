import React, { useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import PlayArrowOutlinedIcon from "@material-ui/icons/PlayArrowOutlined";

function Video(props) {
  const [playListState, setPlayListState] = useState(false);
  function showPlayList() {
    setPlayListState((prevValue) => !prevValue);
  }
  const playNext = () => {
    props.setSongIndex((prevValue) => {
      if (prevValue === props.videos.length - 1) {
        return 0;
      } else {
        return prevValue + 1;
      }
    });
    props.setAutoPlay(true);
  };
  const playPrevious = () => {
    props.setSongIndex((prevValue) => {
      if (prevValue === 0) {
        return props.videos.length - 1;
      } else {
        return prevValue - 1;
      }
    });
    props.setAutoPlay(true);
  };

  const playSong = (index) => {
    props.setSongIndex(index);
    if (!props.isAutoPlay) props.setAutoPlay(true);
  };
  return (
    <div>
      <div
        className="tray row"
        style={{ top: props.isExpanded ? "0vh" : "80vh" }}
      >
        <div
          className="video-container"
          style={{ marginLeft: playListState ? "-80vh" : "0vh" }}
        >
          <video
            src={
              process.env.PUBLIC_URL +
              "/videos/" +
              props.videos[props.songIndex].id +
              ".mp4"
            }
            id="video-player"
            autoPlay={props.isAutoPlay}
            onEnded={playNext}
            controls
          ></video>
        </div>

        <div class="player-btns">
          <button onClick={props.shuffleList} className="btn control-icons">
            <ShuffleIcon fontSize="large" />
          </button>{" "}
          <br></br>
          <button onClick={showPlayList} className="btn control-icons">
            <QueueMusicIcon fontSize="large" />
          </button>
        </div>
        <div class="playlist" style={{ paddingLeft: "10vh" }}>
          <div className="songs-list">
            {props.videos.map((song, index) => {
              return (
                <div
                  onClick={() => {
                    playSong(index);
                  }}
                  className="song-list-item"
                  style={{
                    marginLeft: props.songIndex === index ? "-4vh" : "0vh",
                  }}
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
      <div
        className="tray-container"
        style={{ marginLeft: playListState ? "-80vh" : "0vh" }}
      >
        <button onClick={playPrevious} className="btn control-icons">
          <ArrowBackIosIcon id="previous-button" />
        </button>
        <h1 className="song-title">{props.videos[props.songIndex].title}</h1>
        <p className="song-artist">{props.videos[props.songIndex].artist}</p>
        <button onClick={playNext} className="btn control-icons">
          <ArrowForwardIosIcon id="next-button" />
        </button>
        {props.isExpanded ? (
          <button
            onClick={() => {
              props.expand();
              if (playListState) showPlayList();
            }}
            className="btn control-icons"
          >
            <ExpandMoreIcon id="expand-button" />
          </button>
        ) : (
          <button onClick={props.expand} className="btn control-icons">
            <ExpandLessIcon id="expand-button" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Video;
