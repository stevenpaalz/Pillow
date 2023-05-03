import { useState, useEffect } from "react";
import { updateListing } from "../../store/listings";
import './UpdateFormPage.css';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchListing } from "../../store/listings";

function UpdateFormPage() {
    const dispatch = useDispatch();
    const listingId = useParams().listingId;
    const history = useHistory();
    const listing = useSelector(state => state.listings[listingId]);
    const sessionUser = useSelector(state => state.session.user);

    if (!sessionUser) {history.replace("/")}

    useEffect(() => {
        dispatch(fetchListing(listingId))
    }, [dispatch])

    useEffect(()=>{
        if (listing) {
            if (listing && listing.lister.id !== sessionUser.id) { history.push("/") }
            setPrice(listing.price);
            setHomeType(listing.homeType);
            setNumBeds(listing.numBeds);
            setNumBaths(listing.numBaths);
            setSquareFeet(listing.squareFeet);
            setYearBuilt(listing.yearBuilt);
            setAirCon(listing.airCon);
            setDescription(listing.description);
        }
    }, [listing])


    const [errors, setErrors] = useState([]);
    const [imageFiles, setImageFiles] = useState ([]);
    const [imageUrls, setImageUrls] = useState ([]);

    const [price, setPrice] = useState("");
    const [homeType, setHomeType] = useState("Condo");
    const [numBeds, setNumBeds] = useState(0);
    const [numBaths, setNumBaths] = useState(0);
    const [squareFeet, setSquareFeet] = useState("");
    const [yearBuilt, setYearBuilt] = useState("");
    const [airCon, setAirCon] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

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
        setErrors([]);
        setLoading(true);
        const formData = new FormData();
        const formValues = {'id': listing.id, 'streetNumber': listing.streetNumber, 'streetAddress': listing.streetAddress, 'unitNumber': listing.unitNumber, 'city': listing.city, 'state': listing.state, 'zipcode': listing.zipcode, 'saleType': listing.saleType, 'price': price, 'homeType': homeType, 'numBeds': numBeds, 'numBaths': numBaths, 'squareFeet': squareFeet, 'yearBuilt': yearBuilt, 'airCon': airCon, 'description': description}
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
        const listingId = await dispatch(updateListing(listing.id, formData))
            .catch(async (res) => {
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
            history.push(`/${sessionUser.id}/homes/`);
        }
    }

    if (!listing) {
        return null;
    }
    return(
        <div id='update-form-page' className="open-sans">
            <div id="update-form-header">
                {listing.saleType === "Sale" && <h2>For Sale By Owner Listing</h2>}
                {listing.saleType === "Rent" && <h2>For Rent By Owner Listing</h2>}
                <h3>
                    <span>{listing.streetNumber}</span>
                    <span> {listing.streetAddress}</span>
                    {listing.unitNumber && <span> {listing.unitNumber}</span>}
                    <span>, {listing.city}</span>,
                    <span> {listing.state}</span>,
                    <span> {listing.zipcode}</span>
                </h3>
                <p>Post once and your home will be listed on both Zillow and Trulia, reaching buyers on the largest real estate network on the Web. Plus, home shoppers receive emails about new homes on the market – including yours.</p>
            </div>
            <form id='update-form' onSubmit={handleSubmit}>
                

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
            <button id="submit-post-button" type="submit">Update Listing</button>

            {(loading && !errors) && <p>Loading...</p>}

            </form>
            <ul id="listing-errors">
                {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
        </div>
    )
}

export default UpdateFormPage;