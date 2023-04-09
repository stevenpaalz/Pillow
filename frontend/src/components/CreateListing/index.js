import SellFormPage from "./SellFormPage";
import SellLandingPage from "./SellLandingPage";
import { useState } from "react";

function CreateListing() {
    const [landingComplete, setLandingComplete] = useState(false);
    const [streetNumber, setStreetNumber] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [unitNumber, setUnitNumber] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [saleType, setSaleType] = useState("Sale");

    return(
        <div>
            {!landingComplete && <SellLandingPage setLandingComplete={setLandingComplete} 
            streetNumber={streetNumber}
            streetAddress={streetAddress}
            unitNumber={unitNumber}
            city={city}
            state={state}
            zipcode={zipcode}
            saleType={saleType}
            setStreetNumber={setStreetNumber}
            setStreetAddress={setStreetAddress}
            setUnitNumber={setUnitNumber}
            setCity={setCity}
            setState={setState}
            setZipcode={setZipcode}
            setSaleType={setSaleType}
            />}
            {landingComplete && <SellFormPage 
            streetNumber={streetNumber}
            streetAddress={streetAddress}
            unitNumber={unitNumber}
            city={city}
            state={state}
            zipcode={zipcode}
            saleType={saleType}
            />}
        </div> 
    )

}

export default CreateListing;

