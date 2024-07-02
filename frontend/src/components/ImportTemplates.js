import React, {useState} from "react";

function ImportTemplates({ templates, onTemplateSelect }){
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className="dropdown">
            <button onClick={toggleDropdown} className="dropdown-button">
                Select Template Option
            </button>
            {isOpen && (
                <div className="dropdown-list">
                    {Object.keys(templates).map((templateKey) => (
                        <button key={templateKey} onClick={() => onTemplateSelect(templates[templateKey])}>
                            {templateKey}
                        </button>
                    ))}
                </div>
            )}
        </div> 
    )
}

export default ImportTemplates;