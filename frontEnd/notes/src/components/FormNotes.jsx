import React from "react";
import { useState } from "react";

const FormNotes = props => {
    const [description, setDescription] = useState("");
    const { handleAddItem } = props;
    
    const handleSubmit = e => {
        e.preventDefault();
        handleAddItem ({
            done: false,
            id: (+new Date()).toString(),
            description
        });
        setDescription("");
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="notes">
                <div className="input">
                    <input type="text" className="inputText" value = {description} onChange = {e => setDescription(e.target.value)}/>
                    <button className="btn color1" disabled = {description ? "" : "disabled"}>Add</button>
                </div>
            </div>
        </form>
    )
};

export default FormNotes;