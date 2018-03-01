import React, { Component } from "react";
import white_logo from "../img/highnote_white.png";
// import $ from 'jquery';
// import { findDOMNode } from 'react-dom';

const recentSongs = props => {
  const recentlyPlayed =
    props.recentSongs.items &&
    props.recentSongs.items.slice(0, 4).map(function(item) {
      console.log(item);
      return (
        <div id="lala" className="recent-container" key={item.id}>
          <div className="inline-block">
            <img src={item.track.album.images[1].url} alt="album cover" />
          </div>

          <div className="inline-block recent-song-info">
            <p className="white-text">{item.track.name}</p>
            {item.track.artists.map(function(artist, i) {
              return (
                <p
                  className="white-text inline-block artistname"
                  key={artist.id}
                >
                  {artist.name} {i !== item.track.artists.length -1 ? ' , ': ''}
                </p>
              );
            })}
            <p className="white-text">{item.track.album.name}</p>
          </div>
        </div>
      );
    });

  return (
    <div className="recentSongsContainer">
      <div class="logo recentsongs">
        <img src={white_logo} />
      </div>
      <div className="recent-row">
        <div className="recent-left">
          <div>{recentlyPlayed}</div>
        </div>

        <div className="recent-right">
          <p className="white-text">
            {" "}
            Hi {props.user.name ? props.user.name : props.user.userID}, here
            presents
          </p>
          <h1 className="white-text">your recently played tracks</h1>
        </div>
      </div>
    </div>
  );
};

// $(window).on('load', function() {
// $(".recent-container").each(function(index) {
//     $(this).delay(400*index).fadeIn(300);
// });
// });

// const TopArtists = props => {
//     const list =
//       props.topSongs.items &&
//       props.topSongs.items.slice(5, 10).map(function(item) {
//         return (
//           <div key={item.id}>
//             <img src={item.album.images[1].url} alt="album cover" />
//             <b>
//               <p>{item.name}</p>
//             </b>
//             {item.artists.map(function(artist) {
//               return <p key={artist.id}>{artist.name}</p>;
//             })}
//           </div>
//         );
//       });

//     return (
//       <div>
//         <h2>These are your most listened to songs</h2>
//         {list}
//       </div>
//     );
//   };

//   export default TopArtists;

export default recentSongs;
