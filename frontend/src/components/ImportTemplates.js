import React, {useState} from "react";

function ImportTemplates(){
    const [isOpen, setIsOpen] = useState(false)
    const formatOptions = ["InternalKnowledge", "UserGuides", "SpikePage", "ProcessInstructions", "InstallationGuide", "TechOverview", "ApplicationGuides", "TestSteps", "ReleaseNotes", "ContractInformation"]

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const showTemplate = () => {
        
    }

    return(
        <div className="dropdown">
            <button onClick={toggleDropdown} className="dropdown-button">
                Select Template Option
            </button>
            {isOpen && (
                <ul className="dropdown-list">
                    {formatOptions.map((option, index) => (
                        <button key={index} className="dropdown-item" onClick={showTemplate}>
                            {option}
                        </button>
                    ))}
                </ul>
            )}
        </div> 
    )
}

export default ImportTemplates;