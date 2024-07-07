import React, {useState} from "react";

function UploadFile({ onTemplateSelect }){
    const [markdown, setMarkdown] = useState('');

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const fileType = file.type;
        const fileName = file.name;

        // Check the file type or extension
        if (fileType === "text/markdown" || fileType === "text/plain" || fileName.endsWith(".md") || fileName.endsWith(".txt")) {
            const text = await file.text();
            setMarkdown(text);
            onTemplateSelect = file.text;
            console.log(file.text)
        } else {
            alert("Only .md or .txt files are allowed.");
        }
    };
    
    function sayNo() {
        alert("This functionality isn't available.");
    }

    return(
        <div>
            <button className="dropdown-button" onClick={sayNo}>Upload a Markdown File</button>
            {/* <input type="file" onChange={handleFileUpload} /> */}
        </div>
    )
}

export default UploadFile;