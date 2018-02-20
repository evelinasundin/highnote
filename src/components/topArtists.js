import React from "react";

const TopArtists = props => {

    // console.log(props.topArtists)

    <h2>Your most listened to artists are</h2>
    
    return ( 
        <ul> 
        {
            props.topArtists.items && props.topArtists.items.slice(0, 5).map(function(item){
                return <li key={item.id}>{item.name}</li>
        })
        }
        </ul>
    )

    
}

export default TopArtists;