import React, { Component } from "react";
import "../App.css";
import queryString from "query-string";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import Main from "../components/Main";
import TopArtists from "./TopArtists";
import TopSongs from "./TopSongs";

class App extends Component {
  state = {
    user: {},
    topSongs: {},
    topArtists: {} 
  }

  componentDidMount () {

    // extracts the querystring from url returns object
    let parsedURL = queryString.parse(window.location.search);
    console.log(parsedURL);
    let accessToken = parsedURL.access_token;
    console.log(accessToken);

    // returns a promise
    fetch ('https://api.spotify.com/v1/me', {
      headers: {'Authorization': 'Bearer ' + accessToken}
    // which returns a response as a promise
    }).then(response => response.json())
    .then(data => this.setState({
        user: {
            name: data.display_name,
            username: data.id
        }
    }))

    fetch ('https://api.spotify.com/v1/me/playlists', {
      headers: {'Authorization': 'Bearer ' + accessToken}
    // which returns a response as a promise
    }).then(response => response.json())
    .then(data => console.log(data))

    fetch ('https://api.spotify.com/v1/me/top/artists?limit=35', {
      headers: {'Authorization': 'Bearer ' + accessToken}
    // which returns a response as a promise
    }).then(response => response.json())
    .then(data => this.setState({
        topArtists: data
    }))

    fetch ('https://api.spotify.com/v1/me/top/tracks?time_range=long_term&&limit=50', {
      headers: {'Authorization': 'Bearer ' + accessToken}
    // which returns a response as a promise
    }).then(response => response.json())
    .then(data => this.setState({
        topSongs: data
    }))
  }

  render() {

    console.log(this.state.topArtists);
    const name = this.state.user.name;
    const username = this.state.user.username;
    return (
     <div>
         <h1>Hi {name ? name : username}!</h1>
         <TopArtists topArtists={this.state.topArtists}/>
         <TopSongs topSongs={this.state.topSongs} />
      </div>
    );
  }
}

export default App;
