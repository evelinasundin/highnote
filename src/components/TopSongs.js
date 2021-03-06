import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import queryString from "query-string";

let parsedURL = queryString.parse(window.location.search);
let accessToken = parsedURL.access_token;

const TopSongs = props => {
  const topSongsRenderLeft =
    props.topSongs.items &&
    props.topSongs.items.slice(0, 5).map(function(item, i) {
      return (
        <div key={item.id} className="other-popular-container">
          <div className="songs-small-background">
            <div className="artist-img-container artist-img-container-songs">
              <img
                src={item.album.images[1].url}
                alt="album cover"
                className="artist-img"
              />
            </div>
          </div>
          <div className="other-popular-text">
            <p className="white-text">{i + 1 + "."}</p>
            <p className="white-text">{item.name}</p>
            {item.artists.map(function(artist, i) {
              return (
                <p className="white-text inline-block" key={artist.id}>
                  {artist.name}
                  {i !== item.artists.length - 1 ? ",\xa0" : ""}
                </p>
              );
            })}
          </div>
        </div>
      );
    });

  const topSongsRenderRight =
    props.topSongs.items &&
    props.topSongs.items.slice(5, 10).map(function(item, i) {
      return (
        <div key={item.id} className="other-popular-container">
          <div className="songs-small-background">
            <div className="artist-img-container artist-img-container-songs">
              <img
                src={item.album.images[1].url}
                alt="album cover"
                className="artist-img"
              />
            </div>
          </div>
          <div className="other-popular-text">
            <p className="white-text">{i + 6 + "."}</p>
            <p className="white-text">{item.name}</p>
            {item.artists.map(function(artist) {
              return (
                <p className="white-text" key={artist.id}>
                  {artist.name}
                </p>
              );
            })}
          </div>
        </div>
      );
    });

  return (
    <div className="topsong-container">
      <div className="artist-heading-container">
        <h2 className="white-text">these are</h2>
        <h2 className="white-text">your most played songs.</h2>
      </div>
      <div className="artists-list-container">
        <div className="list-container">{topSongsRenderLeft}</div>
        <div className="list-container">{topSongsRenderRight}</div>
      </div>
      <p className="see-more-text">
        <Link to={`/topsongs?access_token=${accessToken}`}>
          See more stats...
        </Link>
      </p>
    </div>
  );
};

export default TopSongs;
