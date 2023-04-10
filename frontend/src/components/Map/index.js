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
        <GoogleMap zoom={13} center={{lat: 40.75, lng: -73.99}} mapContainerClassName="map-container">
            {Object.values(listings).map((listing) => {
                return <MarkerObject key={listing.id} listing={listing}/>
            })
            }

            {/* {Object.values(listings).map((listing) => {
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
                let hovered = false;
                return <Marker className="marker"
                    onClick={() => { history.replace(`/homes/${listing.id}`)}}
                    value={listing.id}
                    key={listing.id}
                    onMouseOver={() => {
                        debugger
                        hovered = true;
                        }}
                    label = {{text: formattedPrice, color: 'white', fontFamily: "'Open Sans', sans-serif"}}
                    icon = {(!hovered && markerImage1) || markerImage2}
                    position={{lat: parseFloat(listing.latitude), lng: parseFloat(listing.longitude)}} />
            })} */}
        </GoogleMap>
    ) 
}

export default MapWrapper;