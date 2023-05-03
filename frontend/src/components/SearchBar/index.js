// import "./SearchBar.css";
// import { useHistory } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { useState } from "react";
// import { setModal } from "../../store/modal";
// import { searchListings } from "../../store/listings";

// function SearchBar() {
//     const dispatch = useDispatch();
//     const history = useHistory();
//     const sessionUser = useSelector(state => state.session.user);
//     const [searchField, setSearchField] = useState("")

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(searchListings(searchField))
//     }

//     return(
//         <div id="index-page-search-bar" className="open-sans">
//             <div id="search-bar-form">
//                 <form onSubmit={handleSubmit} className="open-sans" id='index-search'>
//                     <input id='search-input-area' onChange={e=>setSearchField(e.target.value)} value={searchField} placeholder='City, State, ZIP'></input>
//                     <span><button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button></span>
//                 </form>
//                 {/* <button id='sale-type-sort' className='search-bar-sort'>
//                     <form>
//                         <label htmlFor="for-sale-radio">For Sale</label>
//                         <input id='for-sale-radio' type='radio' />
//                         <label htmlFor="for-rent-radio">Rent</label>
//                         <input id='for-rent-radio' type='radio' />
//                     </form>
//                 </button> */}
//             </div>
//             <div id="saved-homes">
//                 <button onClick={()=> {sessionUser ? history.replace(`/${sessionUser.id}/favorites`) : dispatch(setModal(true))}}>Saved Homes</button>
//             </div> 
//         </div>
//     )

// }

// export default SearchBar;