import React, { Component } from "react";
import "./App.css";
import queryString from "query-string";
import { Router, Route } from "react-router";
import heropic from "./img/fp-hero.jpeg";
import black_logo from "./img/highnote_black.png";

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
        <div class="logo">
          <img src={black_logo} />
        </div>
        <div>
          <div className="hero">
            <img src={heropic} />
          </div>
          <div className="hero-text">
            <h1>high note</h1>
              <h2>ur track keeper</h2>
          </div>
          <div className="button">
          <a href onClick={() => window.location = 'http://localhost:8888/login' }> login with spotify </a>
          </div>
          <div className="fp-text">
          <h3> it keeps track of all of your tracks</h3>
          <p>lorem ipsum lorem ipsum lorem ipsum loooorem ipsum </p>
          </div>
        </div> {/* last div */} 

        {/* <div className="container">
          <p> hejhej </p>
        </div> */}
        {/* <h1>Hi Evelina!</h1>
          <p>Tja tja tja!</p>
          <button onClick={() => window.location = 'http://localhost:8888/login' }>Sign in with spotify</button> */}
      </div>
    );
  }
}

export default App;
