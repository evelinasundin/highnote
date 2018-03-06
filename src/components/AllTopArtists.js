import React, { Component } from "react";
import "../App.css";
import queryString from "query-string";


class AllTopArtists extends Component {

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

      fetch("https://api.spotify.com/v1/me/top/artists?time_range=long_term&&limit=50", {
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
    return (
      <div>
          <h1> hej </h1>
      </div>
    );
  }
}

export default AllTopArtists;
