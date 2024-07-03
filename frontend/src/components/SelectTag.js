import React, {useState} from "react";


function SelectTag(){
    const [isOpen, setIsOpen] = useState(false)
    const formatOptions = [
        {label:"Developer", content: ""},
        {label: "User", content: ""},
        {label: "Release 1.0", content: ""},
        {label: "Release 2.3", content: ""}]


    const toggleDropdown = () => {
        // setIsOpen(!isOpen);
        alert("The functionality isn't available.");
    };

    const handleSelect = async (fileName) => {
        // const markdownTemplate = await fetchMarkdownFile(fileName)
        // // fetch markdown file is getting localhost/
        // setMarkdownText(markdownTemplate)
        console.log("Need to load page + diff")
    }

    return(
        <div className="dropdown">
            <button onClick={toggleDropdown} className="dropdown-button">
                Select Page Tag
            </button>
            {isOpen && (
                <ul className="dropdown-list">
                    {formatOptions.map((option, index) => (
                        <button key={index} className="dropdown-item" onClick={() => handleSelect(option.content)}>
                            {option.label}
                        </button>
                    ))}
                </ul>
            )}
        </div> 
    )
}

export default SelectTag;