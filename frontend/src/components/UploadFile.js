import React, {useState} from "react";

function UploadFile(){
    const [markdown, setMarkdown] = useState('');

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const text = await file.text();
        setMarkdown(text);
      };
    
    return(
        <div>
            <input type="file" onChange={handleFileUpload} />
        </div>
    )
}

export default UploadFile;