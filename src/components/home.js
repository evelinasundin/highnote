import React, { Component } from "react";
import "../App.css";
import heropic from "../img/fp-hero.jpeg";
import black_logo from "../img/highnote_black.png";
import stats_pic from "../img/stats_pic.jpeg";
import playlists_pic from "../img/playlists_pic.jpeg";
import kanye from "../img/kanye.jpeg";
import casette from "../img/casette.jpeg";

class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <div className="logo">
          <img src={black_logo} alt="logo" />

          <a
            className="inline-block"
            href
            onClick={() => {
            window.location = window.location.href.includes('localhost') 
              ? 'http://localhost:8888/login' 
              : 'https://highnote-backend.herokuapp.com/login' }
          }
          >
            <p className="home-connect">
              {" "}
              connect <i class="fa fa-spotify spotify-link" />{" "}
            </p>
          </a>
        </div>
        <div>
          <div className="hero">
            <img src={heropic} alt="hero-pic" />
          </div>
          <div className="hero-text">
            <h1 className="animate-top">high note</h1>
            <h2 className="animate-bottom">ur track keeper.</h2>
          </div>
          <div className="button">
            <a
              href
              onClick={() => (window.location = "http://localhost:8888/login")}
            >
              {" "}
              connect with spotify{" "}
            </a>
          </div>
          <div className="fp-text">
            <h3> it keeps track of all of your tracks</h3>
            <p>lorem ipsum lorem ipsum lorem ipsum loooorem ipsum </p>
          </div>
          <div className="img-container">
            <div className="img-holder-left opacity">
              <img src={stats_pic} className="greyscale" alt="stats-img" />
              <h4>stats</h4>
            </div>
            <div className="img-holder-right">
              <img src={playlists_pic} alt="playlist_img" />
              <h4>playlists</h4>
            </div>
          </div>
          <div className="fp-text">
            <h3>check your stats and create your own playlists</h3>
            <p>lorem ipsum lorem ipsum lorem ipsum loooorem ipsum </p>
          </div>
          <div className="img-container">
            <div className="img-holder-left">
              <img src={casette} alt="casette-img" />
              <h4 className="red">songs</h4>
            </div>
            <div className="img-holder-right">
              <img src={kanye} alt="kanye-img" />
              <h4>artists</h4>
            </div>
          </div>
          <div className="fp-text">
            <h3> it keeps track of all of your tracks</h3>
            <p>lorem ipsum lorem ipsum lorem ipsum loooorem ipsum </p>
          </div>
          <div className="button-container">
            <div className="button red-button">
              <a
                href
                onClick={() =>
                  (window.location = "http://localhost:8888/login")}
              >
                {" "}
                connect with spotify{" "}
              </a>
            </div>
          </div>
          <footer>
            <div className="footer-links-container">
              <p className="footer-link-text">
                <a
                  href
                  onClick={() =>
                    (window.location = "http://localhost:8888/login")}
                >
                  connect
                </a>
              </p>
              <p className="footer-link-text">
                <a
                  href="https://github.com/evelinasundin/highnote"
                  target="_blank"
                >
                  github
                </a>
              </p>
              <p className="footer-link-text">
                <a
                  href="https://open.spotify.com/user/evesun/playlist/0n4WzcYlxG8PU8HkKvEYN8?si=u1XSXe2FRta4FlR63FaU2A"
                  target="_blank"
                >
                  a nice playlist
                </a>
              </p>
            </div>
          </footer>
        </div>{" "}
        {/* last div */}
      </div>
    );
  }
}

export default App;
