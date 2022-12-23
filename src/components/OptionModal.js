import React from "react";
import Modal from "react-modal";

const OptionModal = (props) =>  { 
    return (
        <Modal
        isOpen = {!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        >
            <h3>This is my book</h3>
            <h1>{props.selectedOption}</h1>
            <button onClick={props.handleClearSelectedOption}>close</button>
        </Modal>    
    )
}
export default OptionModal;