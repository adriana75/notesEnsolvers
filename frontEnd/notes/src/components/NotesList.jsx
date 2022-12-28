import React, { useState } from "react";
import { deleteNotes } from "../apiNotes";
import Checkbox from "./Checkbox";

const NotesList = props => {
    
    const { list, setList } = props;
    const id = list.id
    let disponibles = props.list.filter(e => e.archivada.toString()==="false");

    const onChangeStatus = e => {
        const {name, checked} = e.target;
        const update = list.map(element => ({
            ...element,
            done: element._id === Number(name) ? checked : element.done})); 
        setList(update);
    };

    const onRemoveNotes = async e => {
        let elementsToDelete = list.filter(element => element.done).map(element => element._id)
        await deleteNotes(elementsToDelete).then(function(res){
            window.location.reload();
         })
    };
    const chbox = disponibles.map(element =>(<Checkbox key = {element.id} data = {element} onChange = {onChangeStatus}/>));
    
    return (
        <div className="list conNotes">
            {list.length ? chbox : "No notes"}
            {list.length ? (<p className="conBtn">
                <button className="btn color2" onClick={onRemoveNotes}>Delete all</button>
            </p>) : null}
        </div>
    )
};

export default NotesList;