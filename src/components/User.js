import React, { Component } from "react";
import "../App.css";
import queryString from "query-string";
import TopArtists from "./TopArtists";
import TopSongs from "./TopSongs";
import PlaylistRenderer from "./PlaylistRenderer";
import RecentSongs from "./RecentSongs";
import AllTopSongs from "./AllTopSongs";
import { Link } from "react-router-dom";

let parsedURL = queryString.parse(window.location.search);
let accessToken = parsedURL.access_token;

class App extends Component {
  state = {
    user: {},
    topSongs: {},
    topArtists: {},
    recentlyPlayed: {}
  };

  componentDidMount() {
    // extracts the querystring from url returns object
    let parsedURL = queryString.parse(window.location.search);
    let accessToken = parsedURL.access_token;

    window.scrollTo(0, 0);

    // returns a promise
    fetch("https://api.spotify.com/v1/me", {
      headers: { Authorization: "Bearer " + accessToken }
      // which returns a response as a promise
    })
      .then(response => response.json())
      .then(user =>
        this.setState({
          user: {
            name: user.display_name,
            userID: user.id,
            userIMG: user.images
          }
        })
      );

    fetch("https://api.spotify.com/v1/me/player/recently-played?limit=4", {
      headers: { Authorization: "Bearer " + accessToken }
      // which returns a response as a promise
    })
      .then(response => response.json())
      .then(recentlyPlayedSongs =>
        this.setState({
          recentlyPlayed: recentlyPlayedSongs
        })
      );

    fetch(
      "https://api.spotify.com/v1/me/top/artists?time_range=long_term&&limit=50",
      {
        headers: { Authorization: "Bearer " + accessToken }
        // which returns a response as a promise
      }
    )
      .then(response => response.json())
      .then(topartists =>
        this.setState({
          topArtists: topartists
        })
      );

    fetch(
      "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&&limit=50",
      {
        headers: { Authorization: "Bearer " + accessToken }
        // which returns a response as a promise
      }
    )
      .then(response => response.json())
      .then(topsongs =>
        this.setState({
          topSongs: topsongs
        })
      );
  }

  render() {

    return (
      <div>
        <RecentSongs
          recentSongs={this.state.recentlyPlayed}
          user={this.state.user}
        />
        <TopArtists topArtists={this.state.topArtists} />
        <TopSongs topSongs={this.state.topSongs} />

        <div className="playlistrender-container">
          <h1 className="create-playlist-heading">
            {" "}
            create your playlist here.{" "}
          </h1>
          <div className="playlistrenderer-info-container">
            <div className="playlistrenderer-info-box">
              <i className="fa fa-pencil playlist-symbol" />
              <h3>name your playlist</h3>
              <p>
                name your playlist to what you want. preferably something that reminds you of what the playlist contains. for example - "top tracks
                of june 2018", or "my all time tracks".
              </p>
            </div>
            <div className="playlistrenderer-info-box">
              <i className="fa fa-clock-o playlist-symbol" />
              <h3>choose your time range</h3>
              <p>
                choose the period of time you want the playlist to collect your
                top songs from. you have three options, all time, the past six months or the songs that you currently love which gathers songs from the last month.
               
              </p>
            </div>
            <div className="playlistrenderer-info-box">
              <i className="fa fa-list-ol playlist-symbol" />
              <h3>choose number of songs</h3>
              <p>
                choose the size of your playlist by deciding how many songs you
                want your playlist to contain. you can choose from the minimum
                quantity of 10 songs to max that will fill your playlist with 50
                of your highest notes.
              </p>
            </div>
            <div className="user-playlistrender-container">
              <PlaylistRenderer userID={this.state.userID} />
            </div>
          </div>
        </div>
        <footer className="footer-user">
          <div className="footer-links-container">
            <p className="footer-link-text">
              <Link to={`/topsongs?access_token=${accessToken}`}>
                Top songs
              </Link>
            </p>
            <p className="footer-link-text">
              <Link to={`/topartists?access_token=${accessToken}`}>
                Top artists
              </Link>
            </p>
            <p className="footer-link-text">
              <Link to="/">Log out</Link>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
