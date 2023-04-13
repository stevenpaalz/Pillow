# Zill-oh?

Check out the [live site](https://zilloh.onrender.com)


## Introduction

Zill-oh? is a clone of the Zillow website. Zillow is a home finding/listing service that allows users to shop for homes. This clone mimics the user authentication, listings, favorites, map, and search features of Zillow. Zill-oh? was created within a 14 day timeframe. Please note that on first render, Zill-oh? may take a moment to load due to the Render hosting platform.


## Technologies

* Languages: JavaScript, Ruby, HTML, and CSS
* Backend: Rails
* Frontend: React-Redux
* Databse: PostgreSQL
* Hosting: Render
* Asset Storage: AWS Simple Cloud Storage (S3)
* Other: Google Maps API

## Features

### User Authentication

Zill-oh? users are able to create and log in to an account. Frontend live validation is included on creating an account.\
<img src="assets/signup.gif" width="80%" alt="Signup Validations">

```js
useEffect(()=>{
        const passValidationOne = document.querySelector('#create-account-password-errors li:nth-child(1)');
        const passValidationTwo = document.querySelector('#create-account-password-errors li:nth-child(2)');
        const passValidationThree = document.querySelector('#create-account-password-errors li:nth-child(3)');
        const passValidationFour = document.querySelector('#create-account-password-errors li:nth-child(4)');
        const createSubmit = document.getElementById('create-submit');
        const passValidations = [passValidationOne, passValidationTwo, passValidationThree, passValidationFour];
        setPasswordValid(true);

        const makeGreen = (validation) => {
            validation.classList.remove('red-error');
            validation.classList.add('green');
            validation.children[1].classList.remove('hidden');
            validation.children[0].classList.add('hidden');
        }

        const makeRed = (validation) => {
            validation.classList.add('red-error');
            validation.classList.remove('green');
            validation.children[0].classList.remove('hidden');
            validation.children[1].classList.add('hidden');
            setPasswordValid(false);
        }

    if (password.length === 0) {
        passValidations.forEach((validation)=>{
            validation.classList.remove('red-error');
            validation.classList.remove('green');
            validation.children[0].classList.add('hidden');
            validation.children[1].classList.add('hidden');
        })
        setPasswordValid(false);
    }
    else {
        if (password.length < 8) {
            makeRed(passValidationOne);
        } else {
            makeGreen(passValidationOne);
        }
        if (!(/\d/.test(password)) || !(/[a-z]/gi).test(password)) {
            makeRed(passValidationTwo);
        } else {
            makeGreen(passValidationTwo);
        }
        if (!(specialRegex.test(password))) {
            makeRed(passValidationThree);
        } else {
            makeGreen(passValidationThree)
        }
        if (!(/[A-Z]/.test(password)) || !(/[a-z]/.test(password))) {
            makeRed(passValidationFour);
        } else {
            makeGreen(passValidationFour);
        }
    }   
    if (passwordValid && emailValid && createSubmit) {
        createSubmit.removeAttribute('disabled');
    }
}, [password, specialRegex])
```

### Listings


### Favorites


### Search


### Map