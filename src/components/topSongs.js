import React from "react";
import 'font-awesome/css/font-awesome.min.css';

const TopSongs = props => {
  // console.log(props.topSongs.items &&
  //   props.topSongs.items);
  const topSongsRenderLeft =
    props.topSongs.items &&
    props.topSongs.items.slice(0, 5).map(function(item, i) {
      return (
        <div key={item.id} className="other-popular-container">
          <div className="songs-small-background">
          <a target="_blank" href={item.external_urls.spotify}>
            <div className="artist-img-container">
              <img
                src={item.album.images[1].url}
                alt="album cover"
                className="artist-img"
              />
            </div>
            </a>
          </div>
          <div className="other-popular-text">
            <p className="white-text">{i + 1 + "."}</p>
            <p className="white-text">{item.name}</p>
            {item.artists.map(function(artist, i) {
              return <p className="white-text inline-block" key={artist.id}>{artist.name}{i !== item.artists.length -1? ',\xa0': ''}</p>;
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
          <a target="_blank" href={item.external_urls.spotify}>
            <div className="artist-img-container">
              <img
                src={item.album.images[1].url}
                alt="album cover"
                className="artist-img"
              />
            </div>
            </a>
          </div>
          <div className="other-popular-text">
            <p className="white-text">{i + 6 + "."}</p>
            <p className="white-text">{item.name}</p>
            {item.artists.map(function(artist) {
              return <p className="white-text" key={artist.id}>{artist.name}</p>;
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
        <div className="other-popular-artists-container">
          {topSongsRenderLeft}
        </div>
        <div className="least-popular-artists-container">
          {topSongsRenderRight}
        </div>
      </div>
    </div>
  );
};

export default TopSongs;
