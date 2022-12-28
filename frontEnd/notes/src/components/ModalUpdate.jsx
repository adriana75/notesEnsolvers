import React, { useState } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react';
import {updateNotes} from "../apiNotes";


const ModalUpdate = props => {
    const [show, setShow] = useState(false);
    const openModal = () => setShow(!show); 
    const [id, setId] = useState(props.id);
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [archivada, setArchivada] = useState(props.archivada);
    let {handleEditItem} = [];
    const { list, setList } = props;

    const handleSubmit = async e => {
        handleEditItem = ({
            done: false,
            id,
            title: title,
            description: description,
            archivada: archivada
        });
        await updateNotes(id, handleEditItem).then(function(res){
            console.log(res.data)
             setShow(false);
        })    
    };

    
    return (
        <>
            <button type="button" class="btn color1" onClick={openModal}>Edit</button>
            <div>
                {/* <ToastContainer position="top-center" autoClose={3000}/> */}
                <Modal isOpen={show}>
                    <ModalHeader>
                        <div className='contCancel'>
                            <button onClick={openModal} className="cancel"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                        <h2>Edit Note</h2>
                    </ModalHeader>
                    <ModalBody>
                        {/* <ToastContainer /> */}
                        <form onSubmit={handleSubmit}>
                            <div className='notesModal'>
                                <div className="input">
                                    <input type="hidden" className="inputText" value = {id} /> 
                                    <label htmlFor="title">Title: </label>
                                    <input type="text" className="inputText" value = {title} onChange = {e => setTitle(e.target.value)}/> 
                                    <label htmlFor="content">Content: </label>
                                    <textarea type="text" rows="8" cols="20" value = {description} onChange = {e => setDescription(e.target.value)}></textarea>
                                    <label htmlFor='estado'>Estado: </label>
                                    <label>{archivada ? "Archivada" : "No archivada"}</label>
                                </div>
                                <div className='conBtn'>
                                    <input type="submit" className="btn color1" disabled = {title ? "" : "disabled"} text="Save"/>
                                </div>
                            </div>
                        </form>
                    </ModalBody>
                </Modal>
            </div>
        </>
    )
}
  
  export default ModalUpdate;