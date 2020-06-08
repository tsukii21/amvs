import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  const slideToHome = () => {
    props.slide(1);
  };

  const slideToAnimes = () => {
    props.slide(2);
  };
  const slideToAll = () => {
    props.slide(3);
  };
  return (
    <nav className="navbar navbar-dark fixed-top">
      <div
        style={{
          marginLeft:
            props.active > 1 ? (props.active > 2 ? "300px" : "350px") : "400px",
        }}
        className="nav-links"
      >
        <div className="nav-item">
          <button
            style={{ color: props.active === 1 && "white" }}
            onClick={slideToHome}
            className="btn panel-btn"
          >
            home
          </button>
        </div>
        <div className="nav-item">
          <button
            style={{ color: props.active === 2 && "white" }}
            onClick={slideToAnimes}
            className="btn panel-btn"
          >
            animes
          </button>
        </div>
        <div className="nav-item">
          <button
            style={{ color: props.active === 3 && "white" }}
            onClick={slideToAll}
            className="btn panel-btn"
          >
            playlist
          </button>
        </div>
      </div>
      <Link to="/search">
        <span class="material-icons search-icon">search</span>
      </Link>
    </nav>
  );
}

export default Nav;
