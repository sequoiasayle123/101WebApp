import React, {useContext, useState} from "react";


function SelectTag(){
    const [isOpen, setIsOpen] = useState(false)
    const formatOptions = [
        {label:"Developer", context: ""},
        {label: "User", context: ""},
        {label: "Release 1.0", context: ""},
        {label: "Release 2.3", context: ""}]


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
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
                        <button key={index} className="dropdown-item" onClick={() => handleSelect(option.context)}>
                            {option.label}
                        </button>
                    ))}
                </ul>
            )}
        </div> 
    )
}

export default SelectTag;