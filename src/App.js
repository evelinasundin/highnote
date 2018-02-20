import React, { Component } from "react";
import "./App.css";
import queryString from "query-string";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import heropic from "./img/fp-hero.jpeg";
import black_logo from "./img/highnote_black.png";
import stats_pic from "./img/stats_pic.jpeg";
import playlists_pic from "./img/playlists_pic.jpeg";
import kanye from "./img/kanye.jpeg";
import casette from "./img/casette.jpeg";
import Home from "./components/Home";
import Main from "./components/Main"

class App extends Component {
  // state = {
  //   userData: {}
  // }

  // componentDidMount () {

  //   // extracts the querystring from url returns object
  //   let parsedURL = queryString.parse(window.location.search);
  //   console.log(parsedURL);
  //   let accessToken = parsedURL.access_token;
  //   console.log(accessToken);

  //   // returns a promise
  //   fetch ('https://api.spotify.com/v1/me', {
  //     headers: {'Authorization': 'Bearer ' + accessToken}
  //   // which returns a response as a promise
  //   }).then(response => response.json())
  //   .then(data => console.log(data))

  //   fetch ('https://api.spotify.com/v1/me/playlists', {
  //     headers: {'Authorization': 'Bearer ' + accessToken}
  //   // which returns a response as a promise
  //   }).then(response => response.json())
  //   .then(data => console.log(data))

  //   fetch ('https://api.spotify.com/v1/me/top/artists?limit=35', {
  //     headers: {'Authorization': 'Bearer ' + accessToken}
  //   // which returns a response as a promise
  //   }).then(response => response.json())
  //   .then(data => console.log(data))

  //   fetch ('https://api.spotify.com/v1/me/top/tracks?time_range=long_term&&limit=50', {
  //     headers: {'Authorization': 'Bearer ' + accessToken}
  //   // which returns a response as a promise
  //   }).then(response => response.json())
  //   .then(data => console.log(data))

  // }

  render() {
    return (
      
      <div>
            <BrowserRouter>
            <Main />
            </ BrowserRouter>

      </div>
    );
  }
}

export default App;
