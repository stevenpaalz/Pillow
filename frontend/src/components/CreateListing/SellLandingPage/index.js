import "./SellLandingPage.css";
import SellLandingBottom from "./SellLandingBottom";
import { useState } from "react";

function SellLandingPage({setLandingComplete, streetNumber, streetAddress, unitNumber, city, state, zipcode, saleType, setStreetNumber, setStreetAddress, setUnitNumber, setCity, setState, setZipcode, setSaleType}) {
    const changeUnitNumber = e => { setUnitNumber(e.target.value)};
    const changeCity = e => { setCity(e.target.value)};
    const changeState = e => { setState(e.target.value)};
    const changeZipcode = e => { setZipcode(e.target.value)};
    const changeSaleType = e => { setSaleType(e.target.value) };
    const [fullAddress, setFullAddress] = useState("");
    const changeFullAddress = e => { setFullAddress(e.target.value)};

    const handleContinue = (e) => {
        e.preventDefault();
        let arr = fullAddress.split(" ");
        setStreetNumber(arr.shift());
        setStreetAddress(arr.join(' '));
        setLandingComplete(true);
    }

    const stateOptions = [
        "", "AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UM", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"
      ]

    return(
        <div id='sell-landing-page'>
            <div id="sell-landing-top">
                <div id="sell-landing-cta">
                    <h1>Post a Listing</h1>
                </div>
                <form id='sell-landing-form'>

                <div>
                    <label htmlFor="sale">For Sale</label>
                        <input id='sale'
                            type='radio'
                            name="sale-type" 
                            value="Sale"
                            defaultChecked
                            onChange={changeSaleType} />
                    <label htmlFor="rent">For Rent</label>
                        <input id='rent'
                            type='radio'
                            name="sale-type" 
                            value="Rent"
                            onChange={changeSaleType} />   
                </div>

                     <input id ='full-address'
                        placeholder="Street address"
                        type='text' 
                        value={fullAddress}
                        onChange={changeFullAddress} />

                    <input id ='unit-number'
                        placeholder="Unit# (Optional)"
                        type='text' 
                        value={unitNumber}
                        onChange={changeUnitNumber} />

                    <input id ='city'
                        placeholder="City"
                        type='text' 
                        value={city}
                        onChange={changeCity} />

                    <select onChange={changeState} id="state">
                        {stateOptions.map((option) => {
                            return <option key={option} value={option}>{option}</option>
                        })}
                    </select>

                    <input id ='zipcode'
                        placeholder="Zip"
                        type='text' 
                        value={zipcode}
                        onChange={changeZipcode} />

                    <button onClick={handleContinue}>Continue</button>
                </form>
                <div id='blue-bar'></div>
            </div>
            <SellLandingBottom />
        </div>   
    )
}

export default SellLandingPage;

