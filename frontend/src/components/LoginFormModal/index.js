import LoginForm from "./LoginForm";
import SignupForm from "./SignUpForm";
import { useState } from "react";
import { Modal } from "../../context/Modal";
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from "../../store/modal";
import * as sessionActions from '../../store/session';
import './LoginForm.css';

function LoginFormModal() {
    const [existingUser, setExistingUser] = useState(true);
    const dispatch = useDispatch();
    const modalState = useSelector(state => state.modal.modalState )
    const [loadingDemo, setLoadingDemo] = useState(false);

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

    const demoLoginHandler = async e => {
        e.preventDefault();
        setLoadingDemo(true);
        const data = await dispatch(sessionActions.login({email: 'demo@email.com', password: 'Password1!'}));
        if (data) {
            setLoadingDemo(false);
            dispatch(setModal(false));
        }
    }

    const closeModal = (e) => {
        e.preventDefault();
        dispatch(setModal(false))
        setExistingUser(true);
    }

    return(
        <>
            <button id="login-open-button" className="open-sans" onClick={() => dispatch(setModal(true))}>Sign In</button>
            {modalState && (
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
                        {!loadingDemo && <button onClick={demoLoginHandler}>Sign in as Demo User</button>}
                        {loadingDemo && <button id="loading-button" className="loading-button"><i className="fa-solid fa-spinner"></i>Demo loading...</button>}
                    </div>
                </Modal>
            )}
        </>
    )
}

export default LoginFormModal;