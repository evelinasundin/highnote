import React, { Component } from "react";
import "../App.css";
import queryString from "query-string";
// import $ from 'jquery';

let parsedURL = queryString.parse(window.location.search);
let accessToken = parsedURL.access_token;

class PlaylistRenderer extends Component {
  state = {
    user: {},
    timeRange: "",
    playlistName: "",
    topSongs: {}
  };

  componentDidMount() {
    // extracts the querystring from url returns object
    let parsedURL = queryString.parse(window.location.search);
    let accessToken = parsedURL.access_token;

    // returns a promise
    fetch("https://api.spotify.com/v1/me", {
      headers: { Authorization: "Bearer " + accessToken }
      // which returns a response as a promise
    })
      .then(response => response.json())
      .then(data =>
        this.setState({
          user: {
            name: data.display_name,
            userID: data.id
          }
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
      .then(data =>
        this.setState({
          topSongs: data
        })
      );
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createPlaylist = username => {
    fetch(`https://api.spotify.com/v1/users/${username}/playlists`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + accessToken,
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: "My Playlist", public: false })
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  addSongsToPlaylist = () => {
    fetch(
      `https://api.spotify.com/v1/users/evesun/playlists/0aF5Qo2aNMZvnpVz7puNHi/tracks?uris=spotify%3Atrack%3A4iV5W9uYEdYUVa79Axb7Rh,spotify%3Atrack%3A1301WleyT98MSxVHPZCA6M`,
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + accessToken,
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    ).then(response => console.log(response));
  };

  render() {
    console.log(this.state.topSongs);

    return (
      <div>
        <h1>Hi!</h1>
        <button onClick={() => this.createPlaylist(this.state.user.userID)}>
          Click me!
        </button>
        <button onClick={() => this.addSongsToPlaylist()}>
          Click to add songs to playlist!
        </button>
        <p>hello</p>
        <input
          placeholder="enter your playlist name here"
          type="text"
          name="playlistName"
          value={this.state.playlistName}
          onChange={this.onChange}
          required
        />
        <select
          name="timeRange"
          placeholder="Select your period of time"
          value={this.state.timeRange}
          onChange={this.onChange}
          required
        >
          <option value="short_term">Last month</option>
          <option value="medium_term">Half year</option>
          <option value="long_term">All time</option>
        </select>
        <select
          name="limit"
          placeholder="Select your period of time"
          value={this.state.limit}
          onChange={this.onChange}
          required
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
      </div>
    );
  }
}

export default PlaylistRenderer;
