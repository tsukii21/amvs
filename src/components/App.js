import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { shuffle } from "shufflr";
import songs from "../data/songs";
import Nav from "./Nav";
import Main from "./Main";
import Anime from "./Anime";
import Player from "./Player";
import Search from "./Search";

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

  const expand = () => {
    setExpanded((prevValue) => !prevValue);
  };

  const slide = (index) => {
    setActive(index);
  };

  const playSongById = (id) => {
    videos.forEach((song, index) => {
      if (id === song.id) {
        setSongIndex(index);
        if (!isAutoPlay) setAutoPlay(true);
        return;
      }
    });
  };

  return (
    <Router>
      <Route exact path="/">
        <div className="App">
          <Nav slide={slide} active={active} />
          <Main
            active={active}
            shuffleList={shuffleList}
            playSongById={playSongById}
          />
        </div>
      </Route>
      <Route
        exact
        path="/animes/:id"
        render={({ match }) => (
          <Anime playSongById={playSongById} id={match.params.id} />
        )}
      />
      <Route exact path="/search">
        <Search playSongById={playSongById} />
      </Route>
      <Player
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
