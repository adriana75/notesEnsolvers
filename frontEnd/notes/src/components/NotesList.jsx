import React, { useState } from "react";
import Checkbox from "./Checkbox";

const NotesList = props => {
    
    const { list, setList } = props;
    const disponibles = props.list.filter(e => !e.archivada);

    const onChangeStatus = e => {
        const {name, checked} = e.target;
        const update = list.map(element => ({
            ...element,
            done: element.id === name ? checked : element.done})); 
        setList(update);
    };
    const onRemoveNotes = e => {
        const update = list.filter(element => !element.done);
        setList(update);
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