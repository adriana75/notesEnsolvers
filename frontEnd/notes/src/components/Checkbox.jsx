import React, { Fragment } from "react";
import ModalUpdate from "./ModalUpdate";


const Checkbox = props => {
    const { onChange, data: {id, title, fecha, description, done}} = props;
    
    return (
        <Fragment>
            <label className="newItem">
                <input className="listState" name = {id} type="checkbox" defaultChecked =  {done} onChange = {onChange}/>
                <div className="listText">{title}</div>
                <div className="listText">{fecha}</div>
                <ModalUpdate id={id} title={title} description={description} /> 
            </label>
        </Fragment>
    );
};

export default Checkbox;