import React, { useState } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'

const ModalUpdate = props => {
    const [show, setShow] = useState(false);
    const openModal = () => setShow(!show); 
    const [id, setId] = useState(props.id);
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const {handleAddItem} = props;
    console.log(1, props)
    const handleSubmit = e => {
        e.preventDefault();
        handleAddItem ({
            done: false,
            id: (+new Date()).toString(),
            title,
            description
        });
    }  
    return (
        <>
            <button type="button" class="btn btn-primary" onClick={openModal}>Edit</button>
            <div>
                <Modal isOpen={show}>
                    <ModalHeader>
                        <h2>Edit Note</h2>
                    </ModalHeader>
                    <ModalBody>
                        <form onSubmit={handleSubmit}>
                            <div className='notes'>
                                <div className="input">
                                    <input type="hidden" value = {id} /> 
                                    <label htmlFor="title">Title</label>
                                    <input type="text" className="inputText" value = {title} onChange = {e => setTitle(e.target.value)}/> 
                                    <label htmlFor="content">Content</label>
                                    <textarea type="text" rows="8" cols="20" value = {description} onChange = {e => setDescription(e.target.value)}></textarea>
                                </div>
                                <button className="btn color1" disabled = {title ? "" : "disabled"} onClick={openModal}>Add</button>
                            </div>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={openModal}>Cancel</button>
                    </ModalFooter>
                </Modal>
            </div>
        </>
    )
}
  
  export default ModalUpdate;