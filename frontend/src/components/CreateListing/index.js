import SellFormPage from "./SellFormPage";
import SellLandingPage from "./SellLandingPage";
import { useState } from "react";

function CreateListing() {
    const [landingComplete, setLandingComplete] = useState(false);

    return(
        <div>
            {!landingComplete && <SellLandingPage setLandingComplete={setLandingComplete} />}
            {landingComplete && <SellFormPage />}
        </div> 
    )

}

export default CreateListing;

