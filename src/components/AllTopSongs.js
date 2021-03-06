import React, { Component } from "react";
import "../App.css";
import queryString from "query-string";
import ReactDOM from "react-dom";
import Modal from "react-responsive-modal";
import white_logo from "../img/highnote_white.png";
import PlaylistRenderer from "./PlaylistRenderer";
import { Link } from "react-router-dom";
import TimeRangeSelector from "./TimeRangeSelector";

let parsedURL = queryString.parse(window.location.search);
let accessToken = parsedURL.access_token;

class AllTopSongs extends Component {
  state = {
    timeRange: "long_term",
    topSongs: {},
    user: {}
  };

  componentDidMount() {
    // to start from beginning of page
    window.scrollTo(0, 0);

    // extracts the querystring from url returns object
    let parsedURL = queryString.parse(window.location.search);
    let accessToken = parsedURL.access_token;

    fetch("https://api.spotify.com/v1/me", {
      headers: { Authorization: "Bearer " + accessToken }
      // which returns a response as a promise
    })
      .then(response => response.json())
      .then(user =>
        this.setState({
          user: {
            name: user.display_name,
            userID: user.id
          }
        })
      );

    this.getSongs(this.state.timeRange);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.getSongs(e.target.value);
  };

  getSongs = timeRange => {
    fetch(
      `https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}&&limit=50`,
      {
        headers: { Authorization: "Bearer " + accessToken }
        // which returns a response as a promise
      }
    )
      .then(response => response.json())
      .then(songsData => {
        this.setState({
          topSongs: songsData
        });
      });
  };

  render() {
    let songName =
      this.state.topSongs.items &&
      this.state.topSongs.items.map(function(item, i) {
        return (
          <ul key={i} className="alltop-ul animate-top">
            <div className="allsongs-li-container">
              <li className="allsongs-li">{i + 1 + "."}</li>
              <li className="allsongs-li">
                <div className="alltop-img-cover-container">
                  <img
                    src={item.album.images[1].url}
                    alt="album cover"
                    className="alltop-img-cover"
                  />
                </div>{" "}
              </li>

              <li className="allsongs-li">{item.name}</li>
              <li className="bind allsongs-li"> - </li>
              {item.artists.map(function(artist, i) {
                return (
                  <li
                    className="inline-block allsongs-li allsongs-artist"
                    key={artist.id}
                  >
                    {artist.name}
                    {i !== item.artists.length - 1 ? ",\xa0" : ""}
                  </li>
                );
              })}
              {/* 
            <li key={item.id} className="allsongs-li allsongs-album">
              {item.album.name}
            </li> */}

              <li className="allsongs-li">
                <a target="_blank" href={item.external_urls.spotify}>
                  <i className="fa fa-play-circle-o play-btn" />
                </a>
              </li>
            </div>
          </ul>
        );
      });

    return (
      <div className="alltopsongs-container">
        <div className="alltopsongs-list-container">
          <div className="logo recentsongs">
            <Link to={`/user?access_token=${accessToken}`}>
              <img src={white_logo} alt="logo-white" className="inline-block" />
            </Link>
            <p className="user inline-block white-text">
              {" "}
              {this.state.user.name
                ? this.state.user.name
                : this.state.user.userID}
            </p>
            <i className="fa fa-user" />
          </div>
          <div className="alltop-playlistrender-container animate-top">
            <PlaylistRenderer />
          </div>
          <h1 className="white-text mostplayed-text animate-top">
            {" "}
            These are your most played tracks:{" "}
          </h1>
          <div className="timerange-select-container animate-top">
            <TimeRangeSelector
              timeRange={this.state.timeRange}
              onChange={this.onChange}
            />
          </div>
          {songName}
        </div>
        <footer>
          <div className="footer-links-container">
            <p className="footer-link-text">
              <Link to={`/user?access_token=${accessToken}`}>Start</Link>
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

export default AllTopSongs;
