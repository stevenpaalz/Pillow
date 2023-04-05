import "./SearchBar.css";

function SearchBar() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div id="index-page-search-bar">
            <div id="search-bar-form">
                <form onSubmit={handleSubmit} className="open-sans" id='index-search'>
                    <input placeholder='City, Neighborhood, ZIP, Address'></input>
                    <span><button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button></span>
                </form>
                <button id='sale-type-sort' className='search-bar-sort'>
                    <form>
                        <label htmlFor="for-sale-radio">For Sale</label>
                        <input id='for-sale-radio' type='radio' />
                        <label htmlFor="for-rent-radio">Rent</label>
                        <input id='for-rent-radio' type='radio' />
                    </form>
                </button>
            </div>
            <div id="saved-homes">
                <button>Saved Homes</button>
            </div> 
        </div>
    )

}

export default SearchBar;