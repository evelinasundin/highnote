import React, { Component } from "react";
import "../App.css";
import queryString from "query-string";
import ReactDOM from "react-dom";
import Modal from "react-responsive-modal";
import 'font-awesome/css/font-awesome.min.css';

let parsedURL = queryString.parse(window.location.search);
let accessToken = parsedURL.access_token;

class PlaylistRenderer extends Component {
  state = {
    user: {},
    timeRange: "short_term",
    playlistName: "my top tracks",
    topSongs: {},
    playlistID: "",
    topTracks: {},
    limit: "10",
    open: false,
    playlistInfo: {}
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
  }
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addSongs = event => {
    event.preventDefault();
    fetch(
      `https://api.spotify.com/v1/me/top/tracks?time_range=${this.state
        .timeRange}&&limit=${this.state.limit}`,
      {
        headers: { Authorization: "Bearer " + accessToken }
        // which returns a response as a promise
      }
    )
      .then(response => response.json())
      .then(topSongsData => {
        let topSongs = topSongsData.items.map(item => {
          return {
            artisturi: item.uri
          };
        });
        this.createPlaylist(this.state.user.userID, topSongs);
      });
  };

  createPlaylist = (username, topSongs) => {
    fetch(`https://api.spotify.com/v1/users/${username}/playlists`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + accessToken,
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: this.state.playlistName, public: false })
    })
      .then(response => response.json())
      .then(playlist => {
        this.addSongsToPlaylist(topSongs, this.state.user.userID, playlist.id);
      });
  };

  addSongsToPlaylist = (topSongs, username, playlistID) => {
    fetch(
      `https://api.spotify.com/v1/users/${username}/playlists/${playlistID}/tracks?uris=${topSongs
        .map(item => {
          return item.artisturi;
        })
        .join(",")}`,
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + accessToken,
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    ).then(response => response);
  };

  render() {
    // console.log(this.state.topSongs);
    // console.log(this.state.playlistInfo);
    const { open } = this.state;

    return (
      <div>
        <div className="playlistrender-container">
          {/* <div className="playlistrender-heading-container">
            <h2>your personal playlist maker</h2>
          </div> */}
          <div className="playlistrenderer-info-container">
            <div className="playlistrenderer-info-box">
            <i className="fa fa-pencil playlist-symbol"></i>
              <h3>name your playlist</h3>
              <p>name your playlist to what you want. preferably something so you remeber what your playlist contains.
                for example - "top tracks of june 2018", or "my all time tracks".
              </p>
            </div>
            <div className="playlistrenderer-info-box">
            <i className="fa fa-clock-o playlist-symbol"></i>
              <h3>choose your time range</h3>
              <p>choose the period of time you want the playlist to collect your top songs from. you have three options,
                all time which gathers your most listened to music. period. or you can choose half year or the last month.
              </p>
            </div>
            <div className="playlistrenderer-info-box">
            <i className="fa fa-list-ol playlist-symbol"></i>
             <h3>choose number of songs</h3>
              <p>choose the size of your playlist by deciding how many songs you want your playlist to contain. 
                you can choose from the minimum quantity of 10 songs to max that will fill your playlist with 50 of your highest notes.
              </p>
            </div>
          </div>
          <form className="submit-playlist" onSubmit={this.addSongs}>


            <div className="inline-block">
              <input
                placeholder="enter your playlist name here"
                type="text"
                name="playlistName"
                className="inline-block playlist-name-input"
                value={this.state.playlistName}
                onChange={this.onChange}
                required
              />
            </div>
            <div className="inline-block">
              <select
                name="timeRange"
                placeholder="Select your period of time"
                className="inline-block time-selector"
                value={this.state.timeRange}
                onChange={this.onChange}
                required
              >
                <option value="short_term">Last month</option>
                <option value="medium_term">Half year</option>
                <option value="long_term">All time</option>
              </select>
            </div>

            <div className="inline-block">
              <select
                name="limit"
                className="inline-block limit-selector"
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
            <div className="playlist-btn-container inline-block">
              <input
                type="submit"
                value="Create Playlist"
                className="playlist-submit-btn"
                onClick={this.onOpenModal}
              />
            </div>
          </form>
        </div>
        <div>
          <Modal open={open} onClose={this.onCloseModal} little>
            <h2 className="modal-heading">Congrats!</h2>
            <p className="modal-text">
              {" "}
              Your playlist was created, you can find it here:{" "}
            </p>
          </Modal>
        </div>
      </div>
    );
  }
}

export default PlaylistRenderer;
