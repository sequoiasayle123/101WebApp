import React, {useState} from "react";
import UploadFile from "./UploadFile";
import SyntaxCheck from "./SyntaxCheck";
import ImportTemplates from "./ImportTemplates";
import SelectTag from "./SelectTag";
import ImageGenerate from "./ImageGenerate";
import ReviewCheckList from "./ReviewCheckList";

function SideBanner({ templates, onTemplateSelect }){
    const [selectedTab, setSelectedTab] = useState(0);

    return(
        <div className="sidebar">
            <div className="tabs">
                <button onClick={() => setSelectedTab(0)}>Create</button>
                <button onClick={() => setSelectedTab(1)}>Modify</button>
                <button onClick={() => setSelectedTab(2)}>Review</button>
            </div>
            <div className="tab-content">
                {selectedTab === 0 && <div>
                    <UploadFile/>
                    <br></br>
                    <ImportTemplates templates={templates} onTemplateSelect={onTemplateSelect}/>
                    </div>}
                {selectedTab === 1 && <div>
                    <ImageGenerate/>
                    <SelectTag/></div>}
                {selectedTab === 2 && <div>
                    <SyntaxCheck/>
                    <ReviewCheckList/></div>}
            </div>
        </div>
    )
}

export default SideBanner;