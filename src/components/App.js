import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Main from "./Main";
import Player from "./Player";
import Video from "./Video";
import { BrowserRouter as Router, Route } from "react-router-dom";
import songs from "../data/songs";
import { shuffle } from "shufflr";

function App() {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState(1);
  const [songIndex, setSongIndex] = useState(0);
  const [videos, setVideos] = useState([songs]);
  const [isAutoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    setVideos(songs);
  }, []);

  const shuffleList = () => {
    setVideos(shuffle(songs));
    setSongIndex(0);
    setAutoPlay(true);
  };
  function expand() {
    setExpanded((prevValue) => !prevValue);
  }

  function slide(index) {
    setActive(index);
  }

  function playSongById(id) {
    videos.forEach((song, index) => {
      if (id === song.id) {
        setSongIndex(index);
        if (!isAutoPlay) setAutoPlay(true);
        return;
      }
    });
  }
  return (
    <Router>
      <Route exact path="/">
        <div className="App">
          <Nav slide={slide} active={active} />
          <Main
            slide={slide}
            active={active}
            shuffleList={shuffleList}
            expand={expand}
            playSongById={playSongById}
          />
        </div>
      </Route>
      <Route
        exact
        path="/animes/:id"
        render={({ match }) => (
          <Player playSongById={playSongById} id={match.params.id} />
        )}
      />
      <Video
        isExpanded={isExpanded}
        expand={expand}
        songIndex={songIndex}
        setSongIndex={setSongIndex}
        videos={videos}
        setVideos={setVideos}
        isAutoPlay={isAutoPlay}
        setAutoPlay={setAutoPlay}
        shuffleList={shuffleList}
      />
    </Router>
  );
}

export default App;
