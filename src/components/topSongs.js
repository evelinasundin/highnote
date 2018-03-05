import React from "react";
import 'font-awesome/css/font-awesome.min.css';

const TopSongs = props => {
  const topSongsRenderLeft =
    props.topSongs.items &&
    props.topSongs.items.slice(0, 5).map(function(item, i) {
      // props.topArtists.items &&
      // props.topArtists.items.slice(0, 5).map(function(item, i) {
      return (
        <div key={item.id} className="other-popular-container">
          <div className="artist-small-background">
            <div className="artist-img-container">
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
              return <p className="white-text inline-block" key={artist.id}>{artist.name}</p>;

              {artist.name} {i !== item.artists.length -1? ',\xa0': ''}
            })}
          </div>
        </div>
      );
    });

    // {item.track.artists.map(function(artist, i) {
    //   return (
    //     <p
    //       className="white-text inline-block artistname"
    //       key={artist.id}
    //     >
    //     {/* takes last index in array and addes a comma and space*/}
    //       {artist.name} {i !== item.track.artists.length -1? ',\xa0': ''}
    //     </p>
    //   );
    // })}


  const topSongsRenderRight =
    props.topSongs.items &&
    props.topSongs.items.slice(5, 10).map(function(item, i) {
      return (
        <div key={item.id} className="other-popular-container">
          <div className="artist-small-background">
            <div className="artist-img-container">
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
        <i className="fa fa-heart"></i>
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

// import React from "react";

// const TopSongs = props => {
//   const list =
//     props.topSongs.items &&
//     props.topSongs.items.slice(5, 10).map(function(item) {
//       return (
//         <div key={item.id}>
//           <img src={item.album.images[1].url} alt="album cover" />
//           <b>
//             <p>{item.name}</p>
//           </b>
//           {item.artists.map(function(artist) {
//             return <p key={artist.id}>{artist.name}</p>;
//           })}
//         </div>
//       );
//     });

//   return (
//     <div>
//       <h2>These are your most listened to songs</h2>
//       {list}
//     </div>
//   );
// };

// export default TopSongs;
