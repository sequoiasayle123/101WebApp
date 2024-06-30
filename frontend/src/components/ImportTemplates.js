import React, {useContext, useState} from "react";
import { MarkdownContext } from "./Context";
import { fetchMarkdownFile } from "./MarkdownReader";

function ImportTemplates(){
    const [isOpen, setIsOpen] = useState(false)
    const { setMarkdownText } = useContext(MarkdownContext)
    const formatOptions = [
        {label:"Internal Knowledge", context: "./templates/InternalKnoledge.md"},
        {label: "User Guides", context: "./templates/UserGuides.md"},
        {label: "Spike Page", context: "./templates/SpikePage.md"},
        {label:"Process/Instructions", context: "./templates/ProcessInstruction.md"},
        {label: "Installation Guide", context: "./templates/InstallationGuide.md"},
        {label: "Tech Overview", context: "./templates/TechOverview.md"},
        {label: "Application Guides", context: "./templates/ApplicationGuides.md"},
        {label: "Test Steps", context: "./templates/TestSteps.md"},
        {label: "Release Notes", context: "./templates/ReleaseNotes.md"},
        {label: "Contract Information", context: "./templates/ContractInformation.md"},
        {label: "Blank Page", context: "./templates/blank.md"}]

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        console.log("Hello")
    };

    const handleSelect = async (content) => {
        const markdownTemplate = await fetchMarkdownFile(content)
        // fetch markdown file is getting localhost/
        setMarkdownText(markdownTemplate)
    }

    return(
        <div className="dropdown">
            <button onClick={toggleDropdown} className="dropdown-button">
                Select Template Option
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

export default ImportTemplates;