import '../Map/Map.css';
import {GoogleMap, useLoadScript, Marker, MarkerClusterer} from "@react-google-maps/api";
import { useHistory, withRouter } from 'react-router-dom'; 
import MarkerObject from './MarkerObject';

function MapWrapper({listings}) {
    const { isLoaded } = useLoadScript({
       googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    });
  
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
        <GoogleMap zoom={13} center={{lat: 40.735, lng: -73.99}} mapContainerClassName="map-container">
            {Object.values(listings).map((listing) => {
                return <MarkerObject key={listing.id} listing={listing}/>
            })
            }
        </GoogleMap>
    ) 
}

export default MapWrapper;