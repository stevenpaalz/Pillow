import { useState } from "react";
import { createListing } from "../../../store/listings";
import './SellFormPage.css';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function SellFormPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [photoUrl, setPhotoUrl] = useState(null); 
    const [imageFiles, setImageFiles] = useState ([]);
    const [imageUrls, setImageUrls] = useState ([]);
    const [streetNumber, setStreetNumber] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [saleType, setSaleType] = useState("");

    const [price, setPrice] = useState("");
    const [homeType, setHomeType] = useState("");
    const [numBeds, setNumBeds] = useState("");
    const [numBaths, setNumBaths] = useState("");
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

    const changeStreetNumber = e => { setStreetNumber(e.target.value)};
    const changeStreetAddress = e => { setStreetAddress(e.target.value)};
    const changeCity = e => { setCity(e.target.value)};
    const changeState = e => { setState(e.target.value)};
    const changeZipcode = e => { setZipcode(e.target.value)};
    const changeSaleType = e => { setSaleType(e.target.value)};

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
        const formData = new FormData();
        const formValues = {'streetNumber': streetNumber, 'streetAddress': streetAddress, 'city': city, 'state': state, 'zipcode': zipcode, 'saleType': saleType, 'price': price, 'homeType': homeType, 'numBeds': numBeds, 'numBaths': numBaths, 'squareFeet': squareFeet, 'yearBuilt': yearBuilt, 'airCon': airCon, 'description': description}
        Object.keys(formValues).forEach((key) => {
            formData.append(`listing[${key}]`, formValues[key])
        })
        if (photoFile) {
            formData.append('listing[photos]', photoFile);
        }
        if (imageFiles.length !== 0) {
            for (let i = 0; i <= imageFiles.length; i++) {
                formData.append('listing[images][]', imageFiles[i])
            }
            // imageFiles.forEach(image => {
            //   formData.append('listing[images][]', image);
            // })
        }
        const listingId = await dispatch(createListing(formData));
        history.push(`/homes/${listingId}`);
    }

    // let preview = null;
    // if (photoUrl) preview = <img src={photoUrl} alt="" />;
    return(
        <div id='sell-for-page'>
            <form id='sell-form' onSubmit={handleSubmit}>
                <label htmlFor="street-number">Street Number</label>
                <input id ='street-number'
                    type='text' 
                    value={streetNumber}
                    onChange={changeStreetNumber} />

                <label htmlFor="street-address">Street Address</label>
                <input id ='street-address'
                    type='text' 
                    value={streetAddress}
                    onChange={changeStreetAddress} />

                <label htmlFor="city">City</label>
                <input id ='city'
                    type='text' 
                    value={city}
                    onChange={changeCity} />

                <label htmlFor="state">State</label>
                <input id ='state'
                    type='text' 
                    value={state}
                    onChange={changeState} />

                <label htmlFor="zipcode">Zipcode</label>
                <input id ='zipcode'
                    type='text' 
                    value={zipcode}
                    onChange={changeZipcode} />

                <label htmlFor="sale-type">Sale Type</label>
                <input id ='sale-type'
                    type='text' 
                    value={saleType}
                    onChange={changeSaleType} />

                {/*  */}
                {/*  */}
                <h4>Set your price</h4>
                <input id ='price'
                    type='text' 
                    value={price}
                    onChange={changePrice} />

                <h4>Photos</h4>
                <input id='file-upload' type="file" onChange={handleFiles} multiple />
                {/* {preview} */}

                <h4>Home facts</h4>
                <label htmlFor="home-type">Home type</label>
                <input id ='home-type'
                    type='text' 
                    value={homeType}
                    onChange={changeHomeType} />

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

                <label htmlFor="air-con">Air Conditioning</label>
                <input id ='air-con'
                    type='text' 
                    value={airCon}
                    onChange={changeAirCon} />

                <label htmlFor="description">Describe your home</label>
                <input id ='dscription'
                    type='textarea' 
                    value={description}
                    onChange={changeDescription} />

            <button type="submit">Post for sale by owner</button>

            </form>
        </div>
    )
}

export default SellFormPage;