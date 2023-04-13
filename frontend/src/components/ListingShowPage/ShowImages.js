import "./ShowImages.css";

function ShowImages({listing}) {

    let subImages;

    if (listing.imageUrls) {
        subImages = listing.imageUrls.slice(1);
    }
    
    return(
        <div id='show-images'>
            {subImages && <img id='hero-image' src={listing.imageUrls[0]} />}
            
            {subImages && subImages.map((imageUrl, index)=>{
                return <img className='sub-image' key={index} src={imageUrl} />
            })}
        </div>
    )
}

export default ShowImages;