import {GoogleMap, useLoadScript, Marker, MarkerClusterer} from "@react-google-maps/api";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function MarkerObject({listing}) {
    const history = useHistory();
    const [hovering, setHovering] = useState(false);

    let markerImage1 = {
        url: 'https://zilloh-seeds.s3.us-east-2.amazonaws.com/marker.001.png',
        scaledSize: {width: 50, height: 30}
    }
    let markerImage2 = {
        url: 'https://zilloh-seeds.s3.us-east-2.amazonaws.com/marker.002.png',
        scaledSize: {width: 50, height: 30}
    }
    let formattedPrice;
    if (listing.price > 100000) {
        formattedPrice = `${(listing.price / 1000000).toFixed(1)}M`
    } else { formattedPrice = `${(listing.price / 1000).toFixed(1)}K`}

    return(
        <Marker className="marker"
        onClick={() => { history.replace(`/homes/${listing.id}`)}}
        value={listing.id}
        onMouseOver={() => { setHovering(true)}}
        onMouseOut={()=> { setHovering(false)}}
        label = {{text: formattedPrice, color: 'white', fontFamily: "'Open Sans', sans-serif"}}
        icon = {(!hovering && markerImage1) || markerImage2}
        position={{lat: parseFloat(listing.latitude), lng: parseFloat(listing.longitude)}} />
    )
}

export default MarkerObject;
