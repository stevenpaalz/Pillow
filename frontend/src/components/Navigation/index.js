import React, { useEffect } from "react";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginFormModal from "../LoginFormModal";
import zillowLogo from "../../assets/zillow_main_logo.png"
import ProfileDropDown from "./ProfileDropDown";
import BuyDropDown from "./BuyDropDown";
import RentDropDown from "./RentDropDown";
import SellDropDown from "./SellDropDown";
import { setModal } from "../../store/modal";
import { useState } from "react";

function Navigation() {
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [buyDropDownOpen, setBuyDropDownOpen] = useState(false);
    const [rentDropDownOpen, setRentDropDownOpen] = useState(false);
    const [sellDropDownOpen, setSellDropDownOpen] = useState(false);

    useEffect(()=>{
        dispatch(setModal(false))
    }, [])

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
                <li onMouseOver={()=>setBuyDropDownOpen(true)} onMouseLeave={()=>setBuyDropDownOpen(false)}><span onClick={()=>history.replace("/homes")}><NavLink exact to="/homes">Buy</NavLink></span>
                    {buyDropDownOpen && <BuyDropDown />}
                </li>
                <li onMouseOver={()=>setRentDropDownOpen(true)} onMouseLeave={()=>setRentDropDownOpen(false)}><span onClick={()=>history.replace("/homes")}><NavLink exact to="/">Rent</NavLink></span>
                    {rentDropDownOpen && <RentDropDown />}
                </li>
                <li onMouseOver={()=>setSellDropDownOpen(true)} onMouseLeave={()=>setSellDropDownOpen(false)}><span onClick={() => {sessionUser ? history.replace("/sell") : dispatch(setModal(true))}}><NavLink exact to="/sell">Sell</NavLink></span>
                    {sellDropDownOpen && <SellDropDown />}
                </li>
                <li><span onClick={()=>history.replace("/in-process")}>Home Loans</span></li>
                <li><span onClick={()=>history.replace("/in-process")}>Agent Finder</span></li>
            </ul>
            <div id="nav-logo">
                <NavLink exact to="/">
                    <img src={zillowLogo} alt="Zillow Logo" />
                    </NavLink>
            </div>
            <ul id="right-nav">
                <li><span onClick={() => {sessionUser ? history.replace(`/${sessionUser.id}/homes`) : dispatch(setModal(true))}}>Manage Rentals</span></li>
                <li><span onClick={()=>window.location='https://github.com/stevenpaalz'}><i className="fa-brands fa-github"></i> Github</span></li>
                <li><span onClick={()=>window.location='https://www.linkedin.com/in/steve-paalz/'}><i className="fa-brands fa-linkedin"></i> LinkedIn</span></li>
                {sessionLinks}
            </ul>
        </div>
        { dropdown }
        </>
    )
}

export default Navigation;