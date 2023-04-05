import "./SearchBar.css";

function SearchBar() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div id="index-page-search-bar">
            <form onSubmit={handleSubmit} className="open-sans" id='index-search'>
                <input placeholder='City, Neighborhood, ZIP, Address'></input>
                <span><button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button></span>
            </form>
            {/* <select id='listings-page-sort-by'>
                <option>Newest</option>
                <option>Price (High to Low)</option>
                <option>Price (Low to High)</option>
                <option>Bedrooms</option>
                <option>Bathrooms</option>
                <option>Square Feet</option>
            </select> */}

        </div>
    )

}

export default SearchBar;