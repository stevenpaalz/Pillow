import React, {useState, useRef, useEffect, useContext} from "react";
import ReactDOM from 'react-dom';
import "./Modal.css"

const ModalContext = React.createContext(); 

function ModalProvider({children}) {

    const [value, setValue] = useState("")
    const modalRef = useRef();

    useEffect(()=>{
        setValue(modalRef.current);
    }, [])

    return(
        <>
            <ModalContext.Provider value={value}>
                {children}
            </ModalContext.Provider>
            <div ref={modalRef} />
        </>
    )
}

export const Modal = ({onClose, children}) => {

    const modalNode = useContext(ModalContext)
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="modal">
            <div id="modal-background" onClick={onClose}>
            </div>
            <div id="modal-content">
                {children}
            </div>
        </div>,
        modalNode
    )
}

export default ModalProvider;