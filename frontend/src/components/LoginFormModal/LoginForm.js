import { useDispatch} from 'react-redux';
import * as sessionActions from '../../store/session';
import { useState } from 'react';
import './LoginForm.css';
import { useEffect } from 'react';
import { setModal } from '../../store/modal';

function LoginForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
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
    }, [email, emailRegex])

    const handleSubmit = async e => {
        e.preventDefault();
        setErrors([]);
        const data = await dispatch(sessionActions.login({email: email, password: password}))
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
        <form className="credential-form" id="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} required/>
            <p className="hidden" id="email-error">Enter a valid email address</p>
            <label htmlFor="password">Password
            </label>
            <input id="password" type="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} required/>
            <button type="submit">Sign In</button>
            <a href="https://www.wikihow.com/Remember-a-Forgotten-Password">Forgot your password?</a>
        </form>
        <ul id="login-errors">
            {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        </>
    )
}

export default LoginForm;