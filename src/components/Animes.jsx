import React from "react";
import animes from "../data/animes";
import { Link } from "react-router-dom";

function Animes() {
  return (
    <div className="panel">
      <div class="anime-list-container">
        <div className="row">
          {animes.map((anime) => {
            return (
              <Link to={"/animes/" + anime.id}>
                <div
                  className="box"
                  style={{
                    backgroundImage:
                      "url('" +
                      process.env.PUBLIC_URL +
                      "/images/" +
                      anime.id +
                      ".jpg')",
                  }}
                >
                  <div className="box-info">
                    <h3>
                      {anime.name.length > 45
                        ? anime.name.slice(0, 45) + "..."
                        : anime.name}
                    </h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Animes;
