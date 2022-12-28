import React, { useState } from "react";
import Checkbox from "./Checkbox";
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'

const NotesListArchived = props => {
    
    const { list, setList } = props;
    let [show2, setShow2] = useState(false);
    const openModal2 = () => setShow2(!show2); 
    

    const onChangeStatus = e => {
        const {name, checked} = e.target;
        const update = list.map(element => ({
            ...element,
            done: element.id === name ? checked : element.done})); 
        setList(update);
        window.locatel.reload();
    };
    const arch = list.filter(e => e.archivada.toString()==="true")
    const chbox = arch.map(element =>(<Checkbox key = {element.id} data = {element} onChange = {onChangeStatus}/>));
    
    return (
        <div className="list conNotes">
            <div>
            <button type="button" className="btn color1" onClick={openModal2}>Archived Notes</button>
           <div>
                <Modal isOpen={show2}>
                    <ModalHeader>
                        <div className='contCancel'>
                            <button onClick={openModal2} className="cancel"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                        <h2>Archived Notes</h2>
                    </ModalHeader>
                    <ModalBody>
                        <form>
                            {list.length ? chbox : "No notes"}
                        </form>
                    </ModalBody>
                </Modal>
            </div> 
            </div>
        </div>
        
    )
};

export default NotesListArchived;