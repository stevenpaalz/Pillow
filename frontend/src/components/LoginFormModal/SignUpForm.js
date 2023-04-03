import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import './LoginForm.css';
import './SignUpForm.css';

function SignUpForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const session = useSelector(state => state.session)
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    useEffect(()=>{
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        const clickAway = () => {
            if (!email.toLowerCase().match(emailRegex) && email !== "") {
                emailInput.classList.add('red-error');
                emailError.classList.remove('hidden');
            } else {
                emailInput.classList.remove('red-error');
                emailError.classList.add('hidden');
            }
        }
        document.addEventListener('click', clickAway);

        return () => document.removeEventListener("click", clickAway);
    }, [email])

    useEffect(()=>{
        const passValidationOne = document.querySelector('#create-account-password-errors li:nth-child(1)');
        const passValidationTwo = document.querySelector('#create-account-password-errors li:nth-child(2)');
        const passValidationThree = document.querySelector('#create-account-password-errors li:nth-child(3)');
        const passValidationFour = document.querySelector('#create-account-password-errors li:nth-child(4)');
        const createSubmit = document.getElementById('create-submit');
        const passValidations = [passValidationOne, passValidationTwo, passValidationThree, passValidationFour];
        createSubmit.removeAttribute('disabled');

        const makeGreen = (validation) => {
            validation.classList.remove('red-error');
            validation.classList.add('green');
        }

        const makeRed = (validation) => {
            validation.classList.add('red-error');
            validation.classList.remove('green');
        }

        if (password.length === 0) {
            passValidations.forEach((validation)=>{
                validation.classList.remove('red-error');
                validation.classList.remove('green');
            })
            createSubmit.setAttribute('disabled', true);
        }
        else {
            if (password.length < 8) {
                makeRed(passValidationOne);
                createSubmit.setAttribute('disabled', true);
            } else {
                makeGreen(passValidationOne);
            }
            if (!(/\d/.test(password)) || !(/[a-z]/gi).test(password)) {
                makeRed(passValidationTwo);
                createSubmit.setAttribute('disabled', true);
            } else {
                makeGreen(passValidationTwo);
            }

        }   
        // $&+,:;=?@#|'<>.^*()%!-]

        // const checkValidation = () => {

        // }

        // document.addEventListener('click', clickAway);

        // return () => document.removeEventListener("click", clickAway)
    }, [password])

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.signup({email: email, password: password}))
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
                <li>At least 8 characters</li>
                <li>Mix of letters and numbers</li>
                <li>At least 1 special character</li>
                <li>At least 1 lowercase and 1 uppercase letter</li>
            </ul>
            <div id='landlord-checkbox-div'>
                <input id='landlord-checkbox' type='checkbox'></input>
                <label htmlFor='landlord-checkbox'>I am a landlord or industry professional</label>
            </div>
            
            <button id="create-submit" type="submit">Submit</button>
            <p id="terms-of-use">By submitting, I accept Zill-oh's <a href='https://www.zillow.com/z/corp/terms/'>terms of use.</a></p>
        </form>
        <ul id="login-errors">
            {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        </>
    )
}

export default SignUpForm;