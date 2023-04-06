import "./ShowImages.css";
import placeholder_image from "../../assets/placeholder.jpeg";

function ShowImages({listing}) {

    return(
        <div id='show-images'>
            {listing.photoUrls && listing.photoUrls.map((photoUrl, index)=>{
                return <img key={index} src={photoUrl} />
            })}
        </div>
    )
}

export default ShowImages;