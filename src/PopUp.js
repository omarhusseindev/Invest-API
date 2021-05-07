import React, { useState } from "react";
import InvestData from './data/current-loans.json'
import './PopUp.css';


function PopUp(props) {

    return (props.trigger) ? (
        
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
            </div>

        </div>
 
    ) : "";

}

export default PopUp;