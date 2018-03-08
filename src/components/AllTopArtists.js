// import React, { Component } from "react";
// import "../App.css";
// import queryString from "query-string";

// class AllTopArtists extends Component {

//   componentDidMount() {
//     // extracts the querystring from url returns object
//     let parsedURL = queryString.parse(window.location.search);
//     let accessToken = parsedURL.access_token;

//       fetch("https://api.spotify.com/v1/me/top/artists?time_range=long_term&&limit=50", {
//         headers: { Authorization: "Bearer " + accessToken }
//         // which returns a response as a promise
//       })
//         .then(response => response.json())
//         .then(data =>
//           this.setState({
//             topArtists: data
//           })
//         );

//     fetch(
//       "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&&limit=50",
//       {
//         headers: { Authorization: "Bearer " + accessToken }
//         // which returns a response as a promise
//       }
//     )
//       .then(response => response.json())
//       .then(data => console.log(data)
//         // this.setState({
//         //   topSongs: data
//         // })
//       );
//   }

//   render(
//   )
//   {
//     return (
//       <div>
//           <h1> hej </h1>
//       </div>
//     );
//   }
// }

// export default AllTopArtists;

import React, { Component } from "react";
import "../App.css";
import queryString from "query-string";
import ReactDOM from "react-dom";
import Modal from "react-responsive-modal";

let parsedURL = queryString.parse(window.location.search);
let accessToken = parsedURL.access_token;

class AllTopArtists extends Component {
  state = {
    timeRange: "long_term",
    topSongs: {},
    user: {}
  };

  componentDidMount() {
    // extracts the querystring from url returns object
    let parsedURL = queryString.parse(window.location.search);
    let accessToken = parsedURL.access_token;

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
          <ul key={i}>
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

            <li key={item.id} className="allsongs-li allsongs-album">
              {item.album.name}
            </li>

            <li className="allsongs-li">
              <a target="_blank" href={item.external_urls.spotify}>
                <i className="fa fa-play-circle-o" />
              </a>
            </li>
          </ul>
        );
      });

    return (
      <div>
        <h1> hej </h1>
        <form className="submit-playlist" onSubmit={this.getSongs}>
          <select
            name="timeRange"
            placeholder="Select your period of time"
            className="inline-block"
            value={this.state.timeRange}
            onChange={this.onChange}
            required
          >
            <option value="short_term">Last month</option>
            <option value="medium_term">Half year</option>
            <option value="long_term">All time</option>
          </select>
        </form>
        {songName}
      </div>
    );
  }
}

export default AllTopArtists;
