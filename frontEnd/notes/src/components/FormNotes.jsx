import React from "react";
import { useState } from "react";
import ModalNotes from "./ModalNotes";
import NotesList from "./NotesList";

const FormNotes = props => {

    const [list, setList] = useState([]);
    const handleAddItem = addItem => { setList([...list, addItem]); };
  
    return (
        <div className="notes">
            <div className="input">
                <h2>My Notes</h2>
                <ModalNotes handleAddItem = {handleAddItem} />
                <p><a href="#">Archivied Notes</a></p>
                <NotesList list = {list} setList = {setList}/>                                   
            </div>
        </div>
    )
};

export default FormNotes;
