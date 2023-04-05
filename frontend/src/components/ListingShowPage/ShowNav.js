import "./ShowNav.css";
import zillowLogo from "../../assets/zillow_main_logo.png";
import { useState } from "react";

function ShowNav() {
    const [saved, setSaved] = useState(false);

    return(
        <div id='show-nav'>
            <img src={zillowLogo}/>
            <ul>
                {saved && <li><i class="fa-solid fa-heart"></i>Saved</li>}
                {!saved && <li><i class="fa-regular fa-heart"></i>Save</li>}
            </ul>
        </div>
    )
}

export default ShowNav;