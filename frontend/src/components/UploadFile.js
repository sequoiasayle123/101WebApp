import React, {useState} from "react";

function UploadFile(){
    const [markdown, setMarkdown] = useState('');

    const handleFileUpload = async (e) => {
        // ensure that there is error checking, only md and txt
        const file = e.target.files[0];
        const text = await file.text();
        setMarkdown(text);
      };
    
    return(
        <div>
            <button className="dropdown-button">Upload a Markdown File</button>
            <input type="file" onChange={handleFileUpload} />
        </div>
    )
}

export default UploadFile;