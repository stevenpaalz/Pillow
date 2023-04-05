import placeholder_map from "../../assets/placeholder_map.jpeg";
import '../Map/Map.css';

function Map() {
    return(
        <div id="map-div">
            <img src={placeholder_map} alt="map"/>
        </div>
    )
}

export default Map;