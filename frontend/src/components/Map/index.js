import '../Map/Map.css';
import { Wrapper } from "@googlemaps/react-wrapper";
import { useEffect, useRef, useState } from "react";

function MapWrapper({listings}) {
    const mapOptions = {zoom: 8}

    return(
        <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY}>
            <Map mapOptions={mapOptions} listings={listings}/>
        </Wrapper>
    )
}

export default MapWrapper

function Map({mapOptions, listings}) {
    const [map, setMap] = useState(null);
    const mapRef = useRef(null);
    const markers = useRef({})

    useEffect(()=>{
        if (!map) {
            new window.google.maps.Map(mapRef, {...mapOptions})
        }
    }, [mapOptions, map])

    const getLatLng = async (listing) => {
        let geocoder = new window.google.maps.Geocoder();
        const res = await geocoder.geocode({
            address: `${listing.streetNumber} ${listing.streetAddress} ${listing.city} ${listing.state} ${listing.zipcode}`
        })
        return res.geometry.location;
    }

    useEffect(()=>{
        Object.values(listings).forEach((listing)=>{
            if (!markers[listing.id]) {
                markers[listing.id] = new window.google.maps.Marker({
                    position: getLatLng(listing),
                    map
                })
            }
        })
    }, [])

    return(
        <div ref={mapRef} id="map-div">
            <h1>map</h1>
        </div>
    )
}