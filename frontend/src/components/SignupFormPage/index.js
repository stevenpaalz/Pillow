import { useState } from "react";
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function SignupFormPage() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const session = useSelector(state => state.session)

    if (session.user !== null) {return <Redirect to="/" />;}

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        if (password === confirmPassword) {
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
            })
        }
        return setErrors(['Passwords must match']);   
    }

    return(
        <form className="credential-form" id="signup-form" onSubmit={handleSubmit}>
            <ul>
                {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
            <label>Email
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} required/>
            </label>
            <label>Password
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} required/>
            </label>
            <label>Confirm Password
                <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required/>
            </label>
            <button type="submit">Sign Up</button>
        </form>
    )
}

export default SignupFormPage;