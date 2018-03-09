import React, { Component } from "react";
import "../App.css";
import queryString from "query-string";
import ReactDOM from "react-dom";
import Modal from "react-responsive-modal";
import "font-awesome/css/font-awesome.min.css";

let parsedURL = queryString.parse(window.location.search);
let accessToken = parsedURL.access_token;

class PlaylistRenderer extends Component {
  state = {
    user: {},
    timeRange: "short_term",
    playlistName: "enter your playlist name here",
    topSongs: {},
    playlistID: "",
    topTracks: {},
    limit: "10",
    open: false,
    playlistURL: {}
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
        this.setState({ playlistURL: playlist.external_urls.spotify });
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
    const { open } = this.state;

    return (
      <div className="playlist-creator-container">
        <form className="submit-playlist" onSubmit={this.addSongs}>
          <div className="inline-block">
            <input
              type="text"
              name="playlistName"
              className="inline-block playlist-name-input"
              value={this.state.playlistName}
              ref={input => (this.inputField = input)}
              onFocus={() => (this.inputField.value = "")}
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

          <div>
            <Modal open={open} onClose={this.onCloseModal} little>
              <div className="modal-container">
                <h2 className="modal-heading">Congrats!</h2>
                <p className="modal-text">
                  {" "}
                  Your playlist was created, you can find it in your spotify app
                  or click here to go to it directly:{" "}
                </p>
              </div>
              <div className="modal-btn-container">
                <a
                  href={this.state.playlistURL}
                  target="_blank"
                  className="modal-btn"
                >
                  playlist{" "}
                </a>
              </div>
            </Modal>
          </div>
        </form>
      </div>
    );
  }
}

export default PlaylistRenderer;
