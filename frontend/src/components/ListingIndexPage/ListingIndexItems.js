import { useEffect, useState } from "react";
import ListingIndexItem from "./ListingIndexItem";
import './ListingIndexItems.css';

function ListingIndexItems({listings, favorites}) {
    const [sortText, setSortText] = useState("Newest");
    const [sortOptions, setSortOptions] = useState(false)

    const showSortOptions = () => {
        setSortOptions(!sortOptions);
    }

    useEffect(() => {
        if (!sortOptions) return;
    
        const closeMenu = () => {
          setSortOptions(false);
        };
    
        document.addEventListener('click', closeMenu);
      
        return () => document.removeEventListener("click", closeMenu);
      }, [sortOptions]);

    const updateSort = (e) => {
        setSortText(e.target.innerHTML)
    }

    return(
        <div id='index-page-right-side' className="open-sans">
            <div id='listings-page-index-headers'>
                <h3>Real Estate & Homes For Sale</h3>
                <div id='listings-page-index-header-sort'>
                    <h4>{Object.values(listings).length} results</h4>
                    <div >
                        
                        <div onClick={showSortOptions} id='listings-page-sort-by'>
                            <p>Sort:</p>
                            <button id='listings-page-sort-by-button'>{sortText}<i className="fa-solid fa-chevron-down"></i></button>
                            {sortOptions && 
                            <ul id='sort-drop-down'>
                                <li onClick={updateSort}>Newest</li>
                                <li onClick={updateSort}>Price (High to Low)</li>
                                <li onClick={updateSort}>Price (Low to High)</li>
                                <li onClick={updateSort}>Bedrooms</li>
                                <li onClick={updateSort}>Bathrooms</li>
                                <li onClick={updateSort}>Squarefeet</li>
                            </ul>}
                        </div>
                    </div>
                </div>
            </div>

            <div id="listings-page-index">
                <ul id='index-listings-ul'>
                    {Object.values(listings).map((listing)=>{
                        return <ListingIndexItem key={listing.id} listing={listing} favorites={favorites}/>
                    })}
                </ul>               
            </div>
        </div>
    )

}

export default ListingIndexItems;