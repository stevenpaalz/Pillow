import "./ShowImages.css";
import placeholder_image from "../../assets/placeholder.jpeg";

function ShowImages({listing}) {
    
    return(
        <div id='show-images'>
            {listing.imageUrls && listing.imageUrls.map((imageUrl, index)=>{
                return <img key={index} src={imageUrl} />
            })}
        </div>
    )
}

export default ShowImages;