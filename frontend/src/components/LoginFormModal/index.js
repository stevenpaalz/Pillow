import LoginForm from "./LoginForm";
import { useState } from "react";
import { Modal } from "../../context/Modal";

function LoginFormModal() {

    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <button id="login-open-button" className="open-sans" onClick={() => setShowModal(true)}>Sign In</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm />
                </Modal>
            )}
            
        </>
    )
}

export default LoginFormModal;