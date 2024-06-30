import React, {useState} from "react";


function TextEditor() {
    const [text, setText] = useState('');

    return(
        <div className="main"
            textarea value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text here">

        </div>
    )
}

export default TextEditor;