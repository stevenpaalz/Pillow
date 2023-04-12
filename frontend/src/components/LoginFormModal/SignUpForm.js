import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useState } from 'react';
import { useEffect } from 'react';
import './LoginForm.css';
import './SignUpForm.css';
import { setModal } from '../../store/modal';

function SignUpForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const specialRegex = /[^A-Za-z 0-9]/g;

    useEffect(()=>{
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        const createSubmit = document.getElementById('create-submit');
        const clickAway = () => {
            if (!email.toLowerCase().match(emailRegex) && email !== "") {
                emailInput.classList.add('red-error');
                emailError.classList.remove('hidden');
                setEmailValid(false);
            } else if (email === "") {setEmailValid(false);
            } else {
                emailInput.classList.remove('red-error');
                emailError.classList.add('hidden');
                setEmailValid(true);
            }
        }
        if (emailValid && passwordValid) {
            createSubmit.removeAttribute('disabled');
        }

        document.addEventListener('click', clickAway);

        return () => document.removeEventListener("click", clickAway);
    }, [email, emailRegex])

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
        if (passwordValid && emailValid) {
            createSubmit.removeAttribute('disabled');
        }
    }, [password, specialRegex])

    const handleSubmit = async e => {
        e.preventDefault();
        setErrors([]);
        const data = await dispatch(sessionActions.signup({email: email, password: password}))
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
        if (data) {
            dispatch(setModal(false))
        }
    }

    return(
        <>
        <form className="credential-form" id="signup-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} required/>
            <p className="hidden" id="email-error">Enter a valid email address</p>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Create password" value={password} onChange={e => setPassword(e.target.value)} required/>

            <ul id="create-account-password-errors">
                <li><i className="fa-solid fa-circle-xmark red-error hidden"></i><i className="fa-solid fa-check green-valid hidden"></i>At least 8 characters</li>
                <li><i className="fa-solid fa-circle-xmark red-error hidden"></i><i className="fa-solid fa-check green-valid hidden"></i>Mix of letters and numbers</li>
                <li><i className="fa-solid fa-circle-xmark red-error hidden"></i><i className="fa-solid fa-check green-valid hidden"></i>At least 1 special character</li>
                <li><i className="fa-solid fa-circle-xmark red-error hidden"></i><i className="fa-solid fa-check green-valid hidden"></i>At least 1 lowercase and 1 uppercase letter</li>
            </ul>
            <div id='landlord-checkbox-div'>
                <input id='landlord-checkbox' type='checkbox'></input>
                <label htmlFor='landlord-checkbox'>I am a landlord or industry professional</label>
            </div>
            
            <button id="create-submit" type="submit" disabled>Submit</button>
            <p id="terms-of-use">By submitting, I accept Zill-oh's <a href='https://www.zillow.com/z/corp/terms/'>terms of use.</a></p>
        </form>
        <ul id="login-errors">
            {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        </>
    )
}

export default SignUpForm;