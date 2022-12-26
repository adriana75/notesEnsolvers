import React from "react";
import { useState } from "react";
import FormNotes from "./FormNotes";
import NotesList from "./NotesList";
import ModalNotes from "./ModalNotes";

const Container = () => {
    const [list, setList] = useState([]);
    const handleAddItem = addItem => { setList([...list, addItem]); };

    return (
       <div>
            <FormNotes handleAddItem = {handleAddItem} />
            <NotesList list = {list} setList = {setList}/>
        </div>
    )
}

export default Container;