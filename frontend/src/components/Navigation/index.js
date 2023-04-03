import React from "react";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginFormModal from "../LoginFormModal";
import zillowLogo from "../../assets/zillow_main_logo.png"
import ProfileDropDown from "./ProfileDropDown";

function Navigation() {
    const sessionUser = useSelector(state => state.session.user);

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
                <li><NavLink exact to="/">Buy</NavLink></li>
                <li><NavLink exact to="/">Rent</NavLink></li>
                <li><NavLink exact to="/">Sell</NavLink></li>
                <li><NavLink exact to="/">Home Loans</NavLink></li>
                <li><NavLink exact to="/">Agent Finder</NavLink></li>
            </ul>
            <div id="nav-logo">
                <NavLink exact to="/">
                    <img src={zillowLogo} alt="Zillow Logo" />
                    </NavLink>
            </div>
            <ul id="right-nav">
                <li><NavLink exact to="/">Manage Rentals</NavLink></li>
                <li><NavLink exact to="/">Advertise</NavLink></li>
                <li><NavLink exact to="/">Help</NavLink></li>
                {sessionLinks}
            </ul>
        </div>
        { dropdown }
        </>
    )
}

export default Navigation;