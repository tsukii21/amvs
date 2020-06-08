import React from "react";
import Home from "./Home";
import Animes from "./Animes";
import All from "./All";

function Main(props) {
  return (
    <div className="row container-fluid panel-container">
      <Home active={props.active} shuffleList={props.shuffleList} />
      <Animes />
      <All shuffleList={props.shuffleList} playSongById={props.playSongById} />
    </div>
  );
}

export default Main;
