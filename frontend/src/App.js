import logo from './101doc.png';
import './App.css';
import SideBanner from './components/SideBanner';
import MarkdownEditor from './components/MarkDownEditor';
import React, { useState } from 'react';
import template0 from './templates/blank.md';
import template1 from './templates/InternalKnowledge.md';
import template2 from './templates/UserGuides.md'
import template3 from './templates/SpikePage.md';
import template4 from './templates/ProcessInstructions.md';
import template5 from './templates/InstallationGuide.md';
import template6 from './templates/TechOverview.md';
import template7 from './templates/ApplicationGuides.md';
import template8 from './templates/TestSteps.md';
import template9 from './templates/ReleaseNotes.md';
import template10 from './templates/ContractInformation.md'


function App() {

  const [ selectedTemplate, setSelectedTemplate ] = useState(null);
  const templates = {
    "Refresh":template0,
    "Internal Knowledge":template1,
    "User Guides":template2,
    "Spike Pages":template3,
    "Processes/Instructions":template4,
    "Installation Guide":template5,
    "Tech Overview":template6,
    "Application Guide":template7,
    "Test Steps":template8,
    "Release Notes":template9,
    "Contractual Information":template10
  };

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
