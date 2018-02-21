import React from "react";

const TopArtists = props => {
  const list =
    props.topSongs.items &&
    props.topSongs.items.slice(0, 5).map(function(item) {
      return (
          <div key={item.id}>
      <p>{item.name}</p>
      <img src={item.album.images[1].url} alt="album cover"/>
      
</div>

      )
    });

  console.log(props.topSongs);

  return (
    <div>
      <h2>These are your most listened to songs</h2>
      {list}
    </div>
  );
};

export default TopArtists;
