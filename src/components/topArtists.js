import React from "react";
import { Link } from 'react-router-dom';

const TopArtists = props => {
  const mostPopularArtists =
    props.topArtists.items &&
    props.topArtists.items.slice(0, 3).map(function(item, i) {
      return (
        <div className="artist-img-container-big" key={item.id}>
          <img
            src={item.images[1].url}
            alt="album cover"
            className="artist-img-big"
          />
          <p className="artist-text-big">
            {i + 1 + ".\xa0"}
            {item.name}
          </p>
        </div>
      );
    });

  const otherPopularArtists =
    props.topArtists.items &&
    props.topArtists.items.slice(0, 5).map(function(item, i) {
      return (
        <div key={item.id} className="other-popular-container">
          <div className="artist-small-background">
          <a target="_blank" href={item.external_urls.spotify}>
          <div className="artist-img-container">
            <img
              src={item.images[1].url}
              alt="album cover"
              className="artist-img"
            />
            <i className="fa fa-play-circle"></i>
            </div>
            </a>
          </div>
          <div className="other-popular-text">
          <p className="white-text">
             {i + 1 + "."}
            </p>
          <p className="white-text">{item.name}</p>
          </div>
        </div>
      );
    });

  const leastPopularArtists =
    props.topArtists.items &&
    props.topArtists.items.slice(5, 10).map(function(item, i) {
      return (
        <div key={item.id} className="other-popular-container">
          <div className="artist-small-background">
          <a target="_blank" href={item.external_urls.spotify}>
          <div className="artist-img-container">
            <img
              src={item.images[1].url}
              alt="album cover"
              className="artist-img"
            />
            </div>
            </a>
          </div>
          <div className="other-popular-text">
          <p className="white-text">
             {i + 6 + "."}
            </p>
          <p className="white-text">{item.name}</p>
          </div>
        </div>
      );
    });

  return (
    <div className="artist-container">
      <div className="artist-heading-container">
      <h2 className="white-text">these are</h2>
        <h2 className="white-text">your most played artists.</h2>
      </div>
      {/* <div className="artist-container-row">{mostPopularArtists}</div> */}
      <div className="artists-list-container">
        <div className="other-popular-artists-container">
          {otherPopularArtists}
        </div>
        <div className="least-popular-artists-container">
          {leastPopularArtists}
        </div>
      </div>
      {/* <p><Link to='/topartists'>Home</Link></p> */}
    </div>
  );
};

export default TopArtists;
