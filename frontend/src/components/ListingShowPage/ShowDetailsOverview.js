import "./ShowDetailsOverview.css";

function ShowDetailsOverview({listing}) {

    return(
        <div id='show-details-overview'>
            <h3>Overview</h3>
            <p>Listing by:</p>
            <p>{listing.lister.email}</p>
            <p>{listing.description}</p>
        </div>
    )
}

export default ShowDetailsOverview;