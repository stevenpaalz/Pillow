import '../Map/Map.css';
import {GoogleMap, useLoadScript, Marker, MarkerClusterer} from "@react-google-maps/api";
import { useRef, useEffect } from 'react';

function MapWrapper({listings}) {
    const { isLoaded } = useLoadScript({
       googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    });

    // const markers = {};

    // const getLatLng = async (listing) => {
    //     let geocoder = new window.google.maps.Geocoder();
    //     const res = await geocoder.geocode({
    //         address: `${listing.streetNumber} ${listing.streetAddress} ${listing.city} ${listing.state} ${listing.zipcode}`
    //     })
    //     return res.results[0].geometry.location;
    // }

    // useEffect(()=>{
    //     Object.values(listings).forEach((listing)=>{
    //         if (!markers[listing.id]) {
    //             markers[listing.id] = getLatLng(listing)
    //             // markers[listing.id] = new window.google.maps.Marker({
    //             //     position: getLatLng(listing)
    //             // })
    //         }
    //     })
    // }, [isLoaded, listings])
    // debugger
    if (!isLoaded) return(
        <div>
            Loading...
        </div>
    ) 

    return(
        <Map id="map-wrapper" listings={listings} />
    )
}

function Map({listings}) {
    return(
        <GoogleMap zoom={12} center={{lat: 40.79, lng: -74}} mapContainerClassName="map-container">
            {/* <Marker position={{lat: 40.79, lng: -74}} /> */}
            {Object.values(listings).map((listing) => {
                return <Marker key={listing.id} position={{lat: parseFloat(listing.latitude), lng: parseFloat(listing.longitude)}} />
            })}
        </GoogleMap>
    ) 
}

export default MapWrapper;