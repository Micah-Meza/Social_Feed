import React, { useState } from 'react';




const Button = (props) => {

    const [buttonClick, setButtonClick] = useState("active")
    function handleClick(){

    }
    return (
        <div>
            <button type="button" class="btn btn-default" aria-label="Left Align">
             <span className={"glyphicon glyphicon-thumbs-up"} aria-hidden="true"></span>
            </button>
            <button className={buttonClick} class="glyphicon glyphicon-thumbs-up" onClick={handleClick}>{props.message}</button>
        </div>
    );
}
 
export default Button ;