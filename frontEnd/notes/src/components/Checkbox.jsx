import React, { Fragment } from "react";
import ModalUpdate from "./ModalUpdate";

const Checkbox = props => {
    const { onChange, data: {_id, title, fecha, description, archivada, done}} = props;
    
    return (
        <Fragment>
            
            <label className="newItem">
                <input className="listState" name = {_id} type="checkbox" defaultChecked =  {done} onChange = {onChange}/>
                <div className="listText">{title}</div>
                <div className="listText">{fecha}</div>
                <ModalUpdate id={_id} title={title} description={description} archivada={archivada} /> 
            </label>
        </Fragment>
    );
};

export default Checkbox;