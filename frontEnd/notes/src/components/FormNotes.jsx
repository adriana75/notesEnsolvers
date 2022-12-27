import React from "react";
import { useState, useEffect } from "react";
import ModalNotes from "./ModalNotes";
import NotesList from "./NotesList";
import { doGetRequest } from "../apiNotes";

const FormNotes =  props => {

    const [list, setList] = useState([]);
    const handleAddItem = addItem => { setList([...list, addItem]); };

    useEffect(() => {
        async function getNotes() {
            let notes = await doGetRequest()
            setList(notes)
        }
        getNotes();
     }, [])

    

    return (
        <div className="notes">
            <div className="notesHead">
                <h2>MY NOTES</h2>
                <div>
                    <ModalNotes handleAddItem = {handleAddItem} />
                    <p><a href="#">Archivied Notes</a></p>
                </div>                              
            </div>
            <NotesList list = {list} setList = {setList}/> 
        </div>
    )
};

export default FormNotes;
