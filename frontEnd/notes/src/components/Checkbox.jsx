import React, { Fragment } from "react";

const Checkbox = props => {
    const { onChange, data: {id, title, description, done}} = props;
    return (
        <Fragment>
            <label className="list newItem">
                <input className="listState" name = {id} type="checkbox" defaultChecked =  {done} onChange = {onChange}/>
                <h3 className="ListText">{title}</h3>
                <div className="listText">{description}</div>
            </label>
        </Fragment>
    );
};

export default Checkbox;