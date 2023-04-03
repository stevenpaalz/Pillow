import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';
import './SignUpForm.css';

function SignUpForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const session = useSelector(state => state.session)

    if (session.user !== null) { return <Redirect to="/" />;}

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({email: email, password: password}))
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
            <ul>
                {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
            <label for="email">Email</label>
            <input id="email" type="text" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} required/>

            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Create password" value={password} onChange={e => setPassword(e.target.value)} required/>

            <ul id="create-account-password-errors">
                <li>At least 8 characters</li>
                <li>Mix of letters and numbers</li>
                <li>At least 1 special character</li>
                <li>At least 1 lowercase and 1 uppercase letter</li>
            </ul>
            <label>
                <input type='checkbox'></input>I am a landlord or industry professional
            </label>
            <button type="submit">Submit</button>
            <p>By submitting, I accept Zill-oh's <a href='https://www.zillow.com/z/corp/terms/'>terms of use.</a></p>
        </form>

        </>
    )
}

export default SignUpForm;