import React, {useState} from "react";
import UploadFile from "./UploadFile";
import SyntaxCheck from "./SyntaxCheck";
import ImportTemplates from "./ImportTemplates";

function SideBanner(){
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
                    <ImportTemplates/></div>}
                {selectedTab === 1 && <div>
                    <p>Tags and Images</p></div>}
                {selectedTab === 2 && <div>
                    <p>Check List</p>
                    <SyntaxCheck></SyntaxCheck></div>}
            </div>
        </div>
    )
}

export default SideBanner;