import React, { Fragment } from "react";
import { useState } from "react";
import ModalUpdate from "./ModalUpdate";


const Checkbox = props => {
    const { onChange, data: {id, title, description, done}} = props;
    
    return (
        <Fragment>
            <label className="list newItem">
                <input className="listState" name = {id} type="checkbox" defaultChecked =  {done} onChange = {onChange}/>
                <div className="ListText">{title}</div>

            <ModalUpdate id={id} title={title} description={description} />

            </label>
        </Fragment>
    );
};

export default Checkbox;