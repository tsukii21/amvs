import React from "react";
import Home from "./Home";
import Animes from "./Animes";
import All from "./All";

function Main(props) {
  return (
    <div className="row container-fluid panel-container">
      <Home
        slide={props.slide}
        active={props.active}
        shuffleList={props.shuffleList}
        expand={props.expand}
      />
      <Animes />
      <All
        shuffleList={props.shuffleList}
        expand={props.expand}
        playSongById={props.playSongById}
      />
    </div>
  );
}

export default Main;
