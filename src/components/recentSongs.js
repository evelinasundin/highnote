import React from "react";
import white_logo from "../img/highnote_white.png";
import 'font-awesome/css/font-awesome.min.css';
// import $ from 'jquery';
// import { findDOMNode } from 'react-dom';

const recentSongs = props => {
  const recentlyPlayed =
    props.recentSongs.items &&
    props.recentSongs.items.slice(0, 4).map(function(item) {
    //   console.log(item);
      return (
        <div id="lala" className="recent-container animate-top" key={item.played_at}>
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
                {/* takes last index in array and addes a comma and space*/}
                  {artist.name} {i !== item.track.artists.length -1? ',\xa0': ''}
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
      <div className="logo recentsongs">
        <img src={white_logo} alt="logo-white" className="inline-block"/>

    <p className="user inline-block white-text"> {props.user.name ? props.user.name : props.user.userID}</p><i className="fa fa-user"></i>
    {/* <div className="sub-menu">
        <p className="white-text">hej</p>
        <p className="white-text">hej</p>
    </div> */}

      </div>
      <div className="recent-row">
        <div className="recent-left">
          <div>{recentlyPlayed}</div>
        </div>

        <div className="recent-right">
          <p className="white-text animate-top">
            {" "}
            hi {props.user.name ? props.user.name : props.user.userID}, here
            presents
          </p>
          <h1 className="white-text animate-bottom">your recently played tracks.</h1>
        </div>
      </div>
      <p className="btn-scroll arrow-container"><i className="fa fa-angle-down white-text"></i></p>
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
