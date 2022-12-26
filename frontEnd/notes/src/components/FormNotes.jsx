import React from "react";
import ModalList from "./ModalNotes";

const FormNotes = props => {
  
    return (
        <div className="notes">
            <div className="input">
                <h2>My Notes</h2> 
                <ModalList/> 
                <p><a href="#">Archivied Notes</a></p>                                      
            </div>
        </div>
    )
};

export default FormNotes;
