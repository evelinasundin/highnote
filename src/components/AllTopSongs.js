// import React, { Component } from "react";
// import "../App.css";
// import queryString from "query-string";
// import ReactDOM from "react-dom";
// import Modal from "react-responsive-modal";

// let parsedURL = queryString.parse(window.location.search);
// let accessToken = parsedURL.access_token;

// class AllTopSongs extends Component {
//   state = {
//     timeRange: "long_term",
//     topSongs: {},
//     user: {},
//   };

//   componentDidMount() {
//     // extracts the querystring from url returns object
//     let parsedURL = queryString.parse(window.location.search);
//     let accessToken = parsedURL.access_token;

//     fetch("https://api.spotify.com/v1/me", {
//         headers: { Authorization: "Bearer " + accessToken }
//         // which returns a response as a promise
//       })
//         .then(response => response.json())
//         .then(data =>
//           this.setState({
//             user: {
//               name: data.display_name,
//               userID: data.id
//             }
//           })
//         );

//   }

//   onChange = e => {
//     this.setState({ [e.target.name]: e.target.value });

//     this.getSongs();
//   };

//   getSongs = () => {
//     fetch(
//       `https://api.spotify.com/v1/me/top/tracks?time_range=${this.state.timeRange}&&limit=50`,
//       {
//         headers: { Authorization: "Bearer " + accessToken }
//         // which returns a response as a promise
//       }
//     )
//       .then(response => response.json())
//       .then(songsData => 
//         this.setState({
//           topSongs: songsData
//         })

        
//       );

//   };

 
//   render() {

//         this.getSongs();


//      let songName =
//      console.log(this.topSongs);
//      this.topSongs.items &&
//      this.topSongs.items.map(function(item, i) {
//        return (
//          <ul>
//            <li key={item.id} className="allsongs-li">
//              {item.name}
//            </li>
//            {item.artists.map(function(artist, i) {
//              return (
//                <li className="inline-block allsongs-li allsongs-artist" key={artist.id}>
//                  {artist.name}
//                  {i !== item.artists.length - 1 ? ",\xa0" : ""}
//                </li>
//              );
//            })}
 
//            <li key={item.id} className="allsongs-li allsongs-album">
//              {item.album.name}
//            </li>
//          </ul>
//        );
//      });

//     return (
//       <div>
//           <form className="submit-playlist" onSubmit={this.getSongs}>
//             <select
//               name="timeRange"
//               placeholder="Select your period of time"
//               className="inline-block"
//               value={this.state.timeRange}
//               onChange={this.onChange}
//               required
//             >
//               <option value="short_term">Last month</option>
//               <option value="medium_term">Half year</option>
//               <option value="long_term">All time</option>
//             </select>
//           </form>

//           {songName}
//       </div>
//     );
//   }
// }

// export default AllTopSongs;



import React from "react";
import "font-awesome/css/font-awesome.min.css";

const AllTopSongs = props => {
  //   console.log(props.topSongs.items && props.topSongs.items);
  const songName =
    props.topSongs.items &&
    props.topSongs.items.map(function(item, i) {
      return (
        <ul>
          <li key={item.id} className="allsongs-li">
            {item.name}
          </li>
          {item.artists.map(function(artist, i) {
            return (
              <li className="inline-block allsongs-li allsongs-artist" key={artist.id}>
                {artist.name}
                {i !== item.artists.length - 1 ? ",\xa0" : ""}
              </li>
            );
          })}

          <li key={item.id} className="allsongs-li allsongs-album">
            {item.album.name}
          </li>
        </ul>
      );
    });

  return <div className="alltopsong-container">
      <h1>here are your top songs</h1>
      {songName}
      </div>;
};

export default AllTopSongs;
