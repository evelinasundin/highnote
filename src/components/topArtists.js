import React from "react";

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
          <div className="artist-img-container">
            <img
              src={item.images[1].url}
              alt="album cover"
              className="artist-img"
            />
            </div>
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
          <div className="artist-img-container">
            <img
              src={item.images[1].url}
              alt="album cover"
              className="artist-img"
            />
            </div>
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
    </div>
  );
};

// console.log(props.topArtists)

// return (
//     <div>
//         <h2>These are your most listened to artists: </h2>
//     <ul>
//     {
//         props.topArtists.items && props.topArtists.items.slice(0, 10).map(function(item){
//             return <li key={item.id}>{item.name}</li>
//     })
//     }
//     </ul>
//     </div>
// )

export default TopArtists;
