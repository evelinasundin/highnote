import React from "react";

const TopArtists = props => {

    // console.log(props.topArtists)
    
    return ( 
        <div>
            <h2>These are your most listened to artists: </h2>
        <ul> 
        {
            props.topArtists.items && props.topArtists.items.slice(0, 10).map(function(item){
                return <li key={item.id}>{item.name}</li>
        })
        }
        </ul>
        </div>
    )

    
}

export default TopArtists;