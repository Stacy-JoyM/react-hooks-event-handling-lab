// Code Keypad Component Here
import React from "react";

function Keypad (){
    function handleChange(){
        console.log("Entering password...")
    }
    return (
            <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="Enter your password"
                onChange={handleChange}> 
            </input>
        
    )
}

export default Keypad;