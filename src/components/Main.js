import React, { Component } from "react";
import "../App.css";
import queryString from "query-string";
import { Switch, Route } from "react-router";
import Home from './Home'
import RecentSongs from './RecentSongs'
import User from './User';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/RecentSongs' component={RecentSongs}/>
      <Route path='/user' component={User}/>
    </Switch>
  </main>
)

export default Main;
