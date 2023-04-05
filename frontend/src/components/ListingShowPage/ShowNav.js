import "./ShowNav.css";
import zillowLogo from "../../assets/zillow_main_logo.png";
import { useState } from "react";

function ShowNav() {
    const [saved, setSaved] = useState(false);

    const toggleSaved = (e) => {
        e.preventDefault();
        setSaved(!saved);
    }

    return(
        <div id='show-nav'>
            <img src={zillowLogo}/>
            <ul>
                {saved && <li onClick={toggleSaved}><i className="fa-solid fa-heart"></i>Saved</li>}
                {!saved && <li onClick={toggleSaved}><i className="fa-regular fa-heart"></i>Save</li>}
                <li><i className="fa-regular fa-share-from-square"></i>Share</li>
                <li><i className="fa-solid fa-ban"></i>Hide</li>
            </ul>
        </div>
    )
}

export default ShowNav;