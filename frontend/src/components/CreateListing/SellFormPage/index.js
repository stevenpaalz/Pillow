import { useState } from "react";
import { createListing } from "../../../store/listings";
import './SellFormPage.css';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function SellFormPage({streetNumber, streetAddress, unitNumber, city, state, zipcode, saleType}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [imageFiles, setImageFiles] = useState ([]);
    const [imageUrls, setImageUrls] = useState ([]);
    const [posting, setPosting] = useState(false);

    const [price, setPrice] = useState("");
    const [homeType, setHomeType] = useState("Condo");
    const [numBeds, setNumBeds] = useState(0);
    const [numBaths, setNumBaths] = useState(0);
    const [squareFeet, setSquareFeet] = useState("");
    const [yearBuilt, setYearBuilt] = useState("");
    const [airCon, setAirCon] = useState("");
    const [description, setDescription] = useState("");

    const [photoFile, setPhotoFile] = useState(null);

    const handleFiles = ({ currentTarget }) => {
        const files = currentTarget.files;
        setImageFiles(files);
        if (files.length !== 0) {
          let filesLoaded = 0;
          const urls = [];
          Array.from(files).forEach((file, index) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
              urls[index] = fileReader.result;
              if (++filesLoaded === files.length)
                setImageUrls(urls);
            }
          });
        }
        else setImageUrls([]);
    }

    const changePrice = e => { setPrice(e.target.value)};
    const changeHomeType = e => { setHomeType(e.target.value)};
    const changeNumBeds = e => { setNumBeds(e.target.value)};
    const changeNumBaths = e => { setNumBaths(e.target.value)};
    const changeSquareFeet = e => { setSquareFeet(e.target.value)};
    const changeYearBuilt = e => { setYearBuilt(e.target.value)};
    const changeAirCon = e => { setAirCon(e.target.value)};
    const changeDescription = e => { setDescription(e.target.value)};

    const handleSubmit = async e => {
        e.preventDefault();
        setPosting(true);
        setErrors([]);
        const formData = new FormData();
        const formValues = {'streetNumber': streetNumber, 'streetAddress': streetAddress, 'unitNumber': unitNumber, 'city': city, 'state': state, 'zipcode': zipcode, 'saleType': saleType, 'price': price, 'homeType': homeType, 'numBeds': numBeds, 'numBaths': numBaths, 'squareFeet': squareFeet, 'yearBuilt': yearBuilt, 'airCon': airCon, 'description': description}
        Object.keys(formValues).forEach((key) => {
            formData.append(`listing[${key}]`, formValues[key])
        })
        if (photoFile) {
            formData.append('listing[photos]', photoFile);
        }
        if (imageFiles.length !== 0) {
            for (let i = 0; i < imageFiles.length; i++) {
                formData.append('listing[images][]', imageFiles[i])
            }
        }
        const listingId = await dispatch(createListing(formData))
            .catch(async (res) => {
                setPosting(false);
                let data;
                try {
                    data = await res.clone().json();
                } catch {
                    data = await res.text();
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            });
        if (listingId) {
            history.push(`/homes/${listingId}`);
        }
    }

    return(
        <div id='sell-form-page' className="open-sans">
            <div id="sell-form-header">
                {saleType === "Sale" && <h2>For Sale By Owner Listing</h2>}
                {saleType === "Rent" && <h2>For Rent By Owner Listing</h2>}
                <h3>
                    <span>{streetNumber}</span>
                    <span> {streetAddress}</span>
                    {unitNumber && <span> {unitNumber}</span>}
                    <span>, {city}</span>,
                    <span> {state}</span>,
                    <span> {zipcode}</span>
                </h3>
                <p>Post once and your home will be listed on both Zillow and Trulia, reaching buyers on the largest real estate network on the Web. Plus, home shoppers receive emails about new homes on the market – including yours.</p>
            </div>
            <form id='sell-form' onSubmit={handleSubmit}>
                

                <div id="price-container">
                    <h4>Set your price</h4>
                    <div id="price-input-area">
                        <span>$</span>
                        <input id ='price'
                            type='text' 
                            value={price}
                            onChange={changePrice} />
                    </div>
                </div>

                <div id="photos-container">
                    <h4>Photos</h4>
                    <div id="photo-upload-area">
                        {/* <h4>My Photos</h4> */}
                        <p>Upload files here</p>
                        {/* <label htmlFor="file-upload">Add New Photo</label> */}
                        <input id='file-upload' type="file" onChange={handleFiles} multiple />
                    </div>
                </div>
                

                <div id='home-facts-div'>
                    <h4>Home facts</h4>

                    <div id="left-home-facts">
                    <label htmlFor="home-type">Home type</label>
                    <select onChange={changeHomeType} id="home-type">
                        <option value="Condo">Condo</option>
                        <option value="Apartment">Apartment</option>
                        <option value="House">House</option>
                        <option value="New Construction">New Construction</option>
                    </select>
                    <label htmlFor="num-beds">Beds</label>
                    <input id ='num-beds'
                        type='number'
                        step="1" 
                        value={numBeds}
                        onChange={changeNumBeds} />

                    <label htmlFor="num-baths">Baths</label>
                    <input id ='num-baths'
                        type='number'
                        step="0.5" 
                        value={numBaths}
                        onChange={changeNumBaths} />

                    <label htmlFor="square-feet">Finished Square Feet</label>
                    <input id ='square-feet'
                        type='number'
                        step="1" 
                        value={squareFeet}
                        onChange={changeSquareFeet} />

                    <label htmlFor="year-built">Year Built</label>
                    <input id ='year-built'
                        type='number'
                        step="1" 
                        value={yearBuilt}
                        onChange={changeYearBuilt} />
                    </div>

                    <div id="right-home-facts">
                        <label htmlFor="air-con">Air Conditioning</label>
                        <input id ='air-con'
                            type='text' 
                            value={airCon}
                            onChange={changeAirCon} />

                        <label htmlFor="description">Describe your home</label>
                        <input id ='description'
                            type='textarea' 
                            value={description}
                            onChange={changeDescription} />
                    </div>
                </div>
            <button id="submit-post-button" type="submit">Post listing by owner</button>

            {posting && <p>Posting...</p>}

            </form>
            <ul id="listing-errors">
                {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
        </div>
    )
}

export default SellFormPage;