import { ReactNode } from "react";
import { MouseEvent } from 'react';
import Button from "../button/Button";
import "./Modal.scss";

interface IModal {
    children: ReactNode,
    isOpen: boolean,
    closeModal: () => void;
}


export default function Modal({children, isOpen, closeModal}:IModal) {
    if(!isOpen) return null;

    const closeModalHandler = ( event: MouseEvent<HTMLButtonElement>) => {
        closeModal();
        event.stopPropagation();
    }

    return(
        <div className="modal">
            <div className="modal-block">
                <p className="modal-block__text">{children}</p>
                <Button handler={closeModalHandler} >Close</Button>
            </div>
        </div>
    )
}