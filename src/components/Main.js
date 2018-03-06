import React from "react";
import "../App.css";
import { Switch, Route } from "react-router";
import Home from './Home'
import User from './User';
import AllTopSongs from './AllTopSongs';
import AllTopArtists from './AllTopArtists';
import queryString from "query-string";

let parsedURL = queryString.parse(window.location.search);
let accessToken = parsedURL.access_token;

// console.log(accessToken);

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/user' component={User}/>
      <Route exact path='/topartists' component={AllTopArtists}/>
    </Switch>
  </main>
)

export default Main;
