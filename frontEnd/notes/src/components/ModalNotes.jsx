import React, { useState } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'

const ModalList = props => {
    const [show, setShow] = useState(false);
    const openModal = () => setShow(!show); 
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const {handleAddItem} = props;  
    const handleSubmit = e => {
        e.preventDefault();
        handleAddItem ({
            done: false,
            id: (+new Date()).toString(),
            title,
            fecha:(+new Date("December 25, 1995")),
            description
        });
        setTitle("");
        setDescription("");
    }  
    return (
        <>
            <button type="button" class="btn btn-primary" onClick={openModal}>Create Note</button>
           <div>
                <Modal isOpen={show}>
                    <ModalHeader>
                        <div className='contCancel'>
                            <button onClick={openModal} className="cancel"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                        <h2>Create Note</h2>
                    </ModalHeader>
                    <ModalBody>
                        <form onSubmit={handleSubmit}>
                            <div className='notesModal'>
                                <div className="input">
                                        <label htmlFor="title">Title: </label>
                                        <input type="text" className="inputText" value = {title} onChange = {e => setTitle(e.target.value)}/> 
                                        <label htmlFor="content">Content: </label>
                                        <textarea type="text" rows="8" cols="20" value = {description} onChange = {e => setDescription(e.target.value)}></textarea>
                                </div>
                                <div className='conBtn'>
                                    <button className="btn color1" disabled = {title ? "" : "disabled"} onClick={openModal}>Add</button>
                                </div>
                            </div>
                        </form>
                    </ModalBody>
                </Modal>
            </div> 
        </>
    )
}
  
  export default ModalList;