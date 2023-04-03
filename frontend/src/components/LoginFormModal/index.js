import LoginForm from "./LoginForm";
import SignupForm from "./SignUpForm";
import { useState } from "react";
import { Modal } from "../../context/Modal";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './LoginForm.css';

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);
    const [existingUser, setExistingUser] = useState(true);
    const dispatch = useDispatch();

    const selectSignIn = (e) => {
        e.preventDefault();
        setExistingUser(true);
        const signIn = document.querySelector('#new-account-nav button:first-child');
        const create = document.querySelector('#new-account-nav button:last-child');
        signIn.classList.add('selected-login-nav');
        create.classList.remove('selected-login-nav');

    }

    const selectCreate = (e) => {
        e.preventDefault();
        setExistingUser(false);
        const signIn = document.querySelector('#new-account-nav button:first-child');
        const create = document.querySelector('#new-account-nav button:last-child');
        create.classList.add('selected-login-nav');
        signIn.classList.remove('selected-login-nav');

    }

    const demoLoginHandler = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.login({email: 'demo@email.com', password: 'Password1!'}))
    }

    const closeModal = (e) => {
        e.preventDefault();
        setShowModal(false);
        setExistingUser(true);
    }

    return(
        <>
            <button id="login-open-button" className="open-sans" onClick={() => setShowModal(true)}>Sign In</button>
            {showModal && (
                <Modal onClose={closeModal}>
                    <h2 id='welcome-header'>Welcome to Zill-oh</h2>
                    <nav id='new-account-nav'>
                        <button className='selected-login-nav' onClick={selectSignIn}>Sign in</button>
                        <button onClick={selectCreate}>New account</button>
                    </nav>
                    <hr className='login-divider-line'/>
                    {existingUser && <LoginForm />}
                    {!existingUser && <SignupForm />}
                    <hr className='login-divider-line'/>
                    <div id='demo-login'>
                        <p>Or connect with:</p>
                        <button onClick={demoLoginHandler}>Sign in as Demo User</button>
                    </div>
                </Modal>
            )}
            
        </>
    )
}

export default LoginFormModal;