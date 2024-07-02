import React, {useContext, useState} from "react";


function ReviewCheckList(){

    const checkListOptions = [
        {num: "1", label: "Consise Overview", checked: false},
        {num: "2", label: "Accurate Title", checked: false},
        {num: "3", label: "Contents", checked: false},
        {num: "4", label: "Headings have a numbering", checked: false},
        {num: "5", label: "Subheading have a letter", checked: false},
        {num: "6", label: "Indentations where appropriate", checked: false},
        {num: "7", label: "Expected ability has been scoped", checked: false},
        {num: "8", label: "Links work correctly", checked: false},
        {num: "9", label: "Code boxes used where needed", checked: false},
        {num: "10", label: "Page tags listed", checked: false}]

    const [isOpen, setIsOpen] = useState(false)
    const [checkboxes, setCheckboxes] = useState(checkListOptions)

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCheckboxChange = (checkbox, num) => {
        setCheckboxes((prevCheckboxes) =>
          prevCheckboxes.map((checkbox) =>
            checkbox.num === num ? { ...checkbox, checked: !checkbox.checked } : checkbox
          )
        );
      };

    const refreshCheckboxes = () => {
        setCheckboxes(checkListOptions)
    }

    return(
        <div className="dropdown">
            <button onClick={toggleDropdown} className="dropdown-button">
                Review Check List
            </button>
            {isOpen && (
                <ul className="dropdown-list">
                    <button onClick={refreshCheckboxes}>Refresh</button>
                    <br></br>
                    {checkboxes.map(checkbox => (
                        <div key={checkbox.num}>
                            <label className="checkbox">
                            <input
                                type="checkbox"
                                checked={checkbox.checked}
                                onChange={() => handleCheckboxChange(checkbox, checkbox.num)}
                            />
                            {checkbox.label}
                            </label>
                        </div>
                    ))}
                </ul>
            )}
        </div> 
    )
}

export default ReviewCheckList;