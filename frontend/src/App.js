import logo from './101doc.png';
import './App.css';
import SideBanner from './components/SideBanner';
import MarkdownEditor from './components/MarkDownEditor';
import React, { useState } from 'react';
import template1 from './templates/InternalKnowledge.md';
import template2 from './templates/UserGuides.md'

function App() {

  const [ selectedTemplate, setSelectedTemplate ] = useState(null);
  const templates = {
    template1:template1,
    template2:template2
  };
    //     {label:"Internal Knowledge", context: "InternalKnowledge.md"},
    //     {label: "User Guides", context: "UserGuides.md"},
    //     {label: "Spike Page", context: "SpikePage.md"},
    //     {label:"Process/Instructions", context: "ProcessInstruction.md"},
    //     {label: "Installation Guide", context: "InstallationGuide.md"},
    //     {label: "Tech Overview", context: "TechOverview.md"},
    //     {label: "Application Guides", context: "ApplicationGuides.md"},
    //     {label: "Test Steps", context: "TestSteps.md"},
    //     {label: "Release Notes", context: "ReleaseNotes.md"},
    //     {label: "Contract Information", context: "ContractInformation.md"},
    //     {label: "Blank Page", context: "blank.md"}]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}/>
      </header>
      <div className='sidebar'>
        <SideBanner templates={templates} onTemplateSelect={setSelectedTemplate}/>
      </div>
      <MarkdownEditor selectedTemplate={selectedTemplate}/>
    </div>
  );
}

export default App;
