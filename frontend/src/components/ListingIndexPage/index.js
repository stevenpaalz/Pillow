import MapWrapper from "../Map";
import SearchBar from "../SearchBar";
import ListingIndexItem from "./ListingIndexItem";
import "./ListingIndexPage.css";
import ListingIndexItems from "./ListingIndexItems";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchListings, searchListings } from "../../store/listings";
import { fetchFavorites } from "../../store/favorites";
import { useHistory, useLocation } from "react-router-dom";
import { setModal } from "../../store/modal";

function ListingIndexPage() {
    const dispatch = useDispatch();
    const listings = useSelector(state => state.listings.listings)
    const listingsIds = useSelector(state => state.listings.listingsIds)
    const favorites = useSelector(state => state.favorites)
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const type = useLocation().pathname.slice(7);
    const initialQuery = useLocation().search.slice(3).split('%20').join(" ");
    const [searchField, setSearchField] = useState(initialQuery);
    const [typeDropDown, setTypeDropDown] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        runSearch();
    }

    const runSearch = () => {
        let queryString = ""
        if (searchField.length > 0) {
            queryString = `?q=${searchField}`;
        }
        history.replace(`/homes/${type}${queryString}`)
        dispatch(searchListings(searchField, type))
    }

    useEffect(()=> {
        if (searchField.length === 1) return;
        runSearch();
    }, [searchField])

    const handleTypeDropdownClick = (e) => {
        let queryString = ""
        if (searchField.length > 0) {
            queryString = `?q=${searchField}`;
        }
        history.replace(`/homes/${e.target.value}${queryString}`)
    }

    useEffect(()=>{
        dispatch(fetchFavorites());
    }, [dispatch])

    useEffect(()=>{
        dispatch(searchListings(searchField, type));
    }, [favorites, type])

    const openDropDown= () => {
        if (typeDropDown) {
          setTypeDropDown(false);
          const typeFilterButton = document.getElementById('type-filter-button');
          typeFilterButton.classList.remove('hovering-child');
        } else {
          setTypeDropDown(true);
          const typeFilterButton = document.getElementById('type-filter-button');
          typeFilterButton.classList.add('hovering-child');
        }
    }

    useEffect(() => {
        if (!typeDropDown) return;
      
        const closeFilter = (e) => {
          if (e.target.classList.contains("type-dropdown-class")) {
            return
          } else {
            setTypeDropDown(false);
          }
        };
      
        document.addEventListener('click', closeFilter);
        return () => {
            const typeFilterButton = document.getElementById('type-filter-button');
            typeFilterButton.classList.remove('hovering-child')
            document.removeEventListener("click", closeFilter);
        }
    }, [typeDropDown]);
      
    if (!listings || !favorites) {
        return(
            <h1>Loading...</h1>
        )
    }

    return(
        <>
            <div id="index-page-search-bar" className="open-sans">
                <div id="search-bar-form">
                    <form onSubmit={handleSubmit} className="open-sans" id='index-search'>
                        <input id='search-input-area' onChange={(e) => setSearchField(e.target.value)} value={searchField} placeholder='City, State, ZIP'></input>
                        <span><button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button></span>
                    </form>
                    <button id="type-filter-button" onClick={openDropDown}>For {type}
                        {!typeDropDown && <i className="fa-solid fa-chevron-down"></i>}
                        {typeDropDown && <i className="fa-solid fa-chevron-up"></i>}
                    </button>
                    {typeDropDown && <div className="type-dropdown-class" id="type-filter-dropdown">
                        <form className="type-dropdown-class">
                            <div className="type-dropdown-class">
                                <input className="type-dropdown-class" defaultChecked={type === "Sale"} onClick={handleTypeDropdownClick} value="Sale" name="type-radio" id='for-sale-radio' type='radio' />  
                                <label className="type-dropdown-class" htmlFor="for-sale-radio">For Sale</label>
                            </div>
                            <div className="type-dropdown-class">
                                <input className="type-dropdown-class" defaultChecked={type === "Rent"} onClick={handleTypeDropdownClick} value="Rent" name="type-radio" id='for-rent-radio' type='radio' />
                                <label className="type-dropdown-class" htmlFor="for-rent-radio">For Rent</label>
                            </div>
                            <button>Apply</button>
                        </form>
                    </div>}
                </div>
                <div id="saved-homes">
                    <button onClick={()=> {sessionUser ? history.replace(`/${sessionUser.id}/favorites`) : dispatch(setModal(true))}}>Saved Homes</button>
                </div> 
            </div>

            <div id='index-page-container'>
                
                <MapWrapper listings={listings}/>
                <ListingIndexItems key={listings.id} listings={listings} listingsIds={listingsIds} favorites={favorites}/>
            </div>
        </>
    )
}

export default ListingIndexPage;