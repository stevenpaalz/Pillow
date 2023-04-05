import "./ShowImages.css";
import placeholder_image from "../../assets/placeholder.jpeg";

function ShowImages({listing}) {

    return(
        <div id='show-images'>
            <img src={placeholder_image} />
        </div>
    )
}

export default ShowImages;