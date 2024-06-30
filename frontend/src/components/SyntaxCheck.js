import React, {useState} from "react";
import axios from 'axios';


function SyntaxCheck(){
    const markdown = "Hiya, i havent figured this out yet"
  
    const handleFormatCheck = async () => {
      const response = await axios.post('/api/check-format', { markdown });
      // Handle the response to show formatting issues
    };

    return(
        <button onClick={handleFormatCheck}>Check Formatting</button>   
    )
}

export default SyntaxCheck;