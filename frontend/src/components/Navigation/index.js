import React from "react";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginFormModal from "../LoginFormModal";
import zillowLogo from "../../assets/zillow_main_logo.png"
import ProfileDropDown from "./ProfileDropDown";
import BuyDropDown from "./BuyDropDown";
import { useState } from "react";

function Navigation() {
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [buyDropDownOpen, setBuyDropDownOpen] = useState(false);

    let sessionLinks;
    let dropdown;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
        dropdown = (<ProfileDropDown user={sessionUser}/>);
    } else {
        sessionLinks = (
            <LoginFormModal />
        )
    }

    return(
        <>
        <div id='nav-bar' className="open-sans">
            <ul id="left-nav">
                <li onMouseOver={()=>setBuyDropDownOpen(true)} onMouseLeave={()=>setBuyDropDownOpen(false)}><span><NavLink exact to="/homes">Buy</NavLink></span>
                    {buyDropDownOpen && <BuyDropDown />}
                </li>
                <li><span><NavLink exact to="/">Rent</NavLink></span></li>
                <li><span><NavLink exact to="/sell">Sell</NavLink></span></li>
                <li><span><NavLink exact to="/">Home Loans</NavLink></span></li>
                <li><span><NavLink exact to="/">Agent Finder</NavLink></span></li>
            </ul>
            <div id="nav-logo">
                <NavLink exact to="/">
                    <img src={zillowLogo} alt="Zillow Logo" />
                    </NavLink>
            </div>
            <ul id="right-nav">
                <li><span onClick={() => {history.replace(`/${sessionUser.id}/homes`)}}>Manage Rentals</span></li>
                <li><span><NavLink exact to="/">Advertise</NavLink></span></li>
                <li><span><NavLink exact to="/">Help</NavLink></span></li>
                {sessionLinks}
            </ul>
        </div>
        { dropdown }
        </>
    )
}

export default Navigation;