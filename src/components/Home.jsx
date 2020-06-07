import React from "react";
import ShuffleIcon from "@material-ui/icons/Shuffle";

function Home(props) {
  return (
    <div
      style={{
        marginLeft:
          props.active > 1 ? (props.active > 2 ? "-67%" : "-33%") : "0px",
      }}
      className="panel home-panel"
    >
      <div className="landing-msg">
        <h1>amvs</h1>
        <p>start listening</p>
        <button
          onClick={() => {
            props.shuffleList();
          }}
          className="btn shuffle-btn"
        >
          <ShuffleIcon id="shuffle-btn" fontSize="large" />
        </button>
      </div>
    </div>
  );
}

export default Home;
