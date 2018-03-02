import React from "react";

const TopSongs = props => {
  const list =
    props.topSongs.items &&
    props.topSongs.items.slice(5, 10).map(function(item) {
      return (
        <div key={item.id}>
          <img src={item.album.images[1].url} alt="album cover" />
          <b>
            <p>{item.name}</p>
          </b>
          {item.artists.map(function(artist) {
            return <p key={artist.id}>{artist.name}</p>;
          })}
        </div>
      );
    });

  return (
    <div>
      <h2>These are your most listened to songs</h2>
      {list}
    </div>
  );
};


export default TopSongs;
