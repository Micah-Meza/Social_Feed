import React, { useState } from 'react';
import './Button.css';




const Button = (props) => {

    const [buttonClass, setButtonClass] = useState("inactive");

    function handleClick(){

        if (buttonClass === 'inactive'){
            setButtonClass('active');
        }
        else {
            setButtonClass('inactive');
        }

    }
    return (
        <div>
            <button className={buttonClass} onClick={handleClick}></button>
      </div>
    )
}

 
export default Button;