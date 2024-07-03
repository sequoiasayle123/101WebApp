import React from "react";

function sayNo() {
    alert("This functionality isn't available.");
}

function ImageGenerate(){

    return(
        <div>
            <button className="dropdown-button" onClick={sayNo}>Generate an Image</button>
            <input type="text"/>
            <br></br>
            <br></br>
        </div> 
    )
}

export default ImageGenerate;