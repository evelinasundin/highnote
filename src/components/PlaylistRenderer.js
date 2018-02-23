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
    topSongs: {},
    playlistID: ""
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
      .then(data =>
        this.setState({
          playlistID: data.id
        })
      );
  };

  addSongsToPlaylist = (username, playlistID) => {
    fetch(
      `https://api.spotify.com/v1/users/${username}/playlists/${playlistID}/tracks?uris=spotify%3Atrack%3A4iV5W9uYEdYUVa79Axb7Rh,spotify%3Atrack%3A1301WleyT98MSxVHPZCA6M`,
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
    console.log(this.state.playlistID)

    return (
      <div>
        <h1>Hi!</h1>
        <button onClick={() => this.createPlaylist(this.state.user.userID)}>
          Click me!
        </button>
        <button onClick={() => this.addSongsToPlaylist(this.state.user.userID, this.state.playlistID)}>
          Click to add songs to playlist!
        </button>
        <p>hello</p>


        {/* <form onSubmit={this.createPlaylist(this.state.user.userID)}>
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
        <input
            type="submit"
            value="Add Post"
            className="btn btn-primary m-3"
          />
          </form> */}
      </div>
    );
  }
}

export default PlaylistRenderer;
