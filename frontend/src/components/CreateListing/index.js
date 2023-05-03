import SellFormPage from "./SellFormPage";
import SellLandingPage from "./SellLandingPage";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setModal } from "../../store/modal";

function CreateListing() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const modalState = useSelector(state => state.modal.modalState)

    useEffect(()=>{
        setModal(false)
        setTimeout(()=>{
            if (!sessionUser) {
                dispatch(setModal(true));
            }
        }, 500)
    }, [modalState])


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
            sessionUser={sessionUser}
            />}
        </div> 
    )

}

export default CreateListing;

