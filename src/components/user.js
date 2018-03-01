import React, { Component } from "react";
import "../App.css";
import queryString from "query-string";
import TopArtists from "./TopArtists";
import TopSongs from "./TopSongs";
import PlaylistRenderer from "./PlaylistRenderer";
import RecentSongs from "./RecentSongs"

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

    fetch("https://api.spotify.com/v1/me/playlists?limit=44", {
      headers: { Authorization: "Bearer " + accessToken }
      // which returns a response as a promise
    })
      .then(response => response.json())
      .then(data => console.log(data));



    fetch("https://api.spotify.com/v1/me/player/recently-played?limit=5", {
      headers: { Authorization: "Bearer " + accessToken }
      // which returns a response as a promise
    })
      .then(response => response.json())
      .then(data =>
        this.setState({
          recentlyPlayed: data
        })
      );

      fetch("https://api.spotify.com/v1/me/top/artists?limit=35", {
        headers: { Authorization: "Bearer " + accessToken }
        // which returns a response as a promise
      })
        .then(response => response.json())
        .then(data =>
          this.setState({
            topArtists: data
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

  render() 
  {
    console.log(this.state.topArtists);
    console.log(this.state.recentlyPlayed);
    const name = this.state.user.name;
    const userID = this.state.user.userID;
    return (
      <div>
        {/* <h1>Hi {name ? name : userID}!</h1> */}
        <RecentSongs recentSongs={this.state.recentlyPlayed} user={this.state.user}/>
        <TopArtists topArtists={this.state.topArtists} />
        <TopSongs topSongs={this.state.topSongs} />
        <PlaylistRenderer userID={this.state.userID}/>
      </div>
    );
  }
}

export default App;
