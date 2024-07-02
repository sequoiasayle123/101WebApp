import React, {useContext, useState} from "react";
import { MarkdownContext } from "./Context";
import { fetchMarkdownFile } from "./MarkdownReader";

function ImportTemplates({ templates, onSelectTemplate }){
    const [isOpen, setIsOpen] = useState(false)
    const { setMarkdownText } = useContext(MarkdownContext)
    const formatOptions = [
        {label:"Internal Knowledge", context: "InternalKnowledge.md"},
        {label: "User Guides", context: "UserGuides.md"},
        {label: "Spike Page", context: "SpikePage.md"},
        {label:"Process/Instructions", context: "ProcessInstruction.md"},
        {label: "Installation Guide", context: "InstallationGuide.md"},
        {label: "Tech Overview", context: "TechOverview.md"},
        {label: "Application Guides", context: "ApplicationGuides.md"},
        {label: "Test Steps", context: "TestSteps.md"},
        {label: "Release Notes", context: "ReleaseNotes.md"},
        {label: "Contract Information", context: "ContractInformation.md"},
        {label: "Blank Page", context: "blank.md"}]

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        console.log("Hello")
    };

    const handleSelect = async (fileName) => {
        const markdownTemplate = await fetchMarkdownFile(fileName)
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
                    {templates.map((template, index) => (
                        <button key={index} className="dropdown-item" onClick={() => onSelectTemplate(templates)}>
                            {template}
                        </button>
                    ))}
                </ul>
            )}
        </div> 
    )
}

export default ImportTemplates;