import logo from './101doc.png';
import './App.css';
import SideBanner from './components/SideBanner';
import MarkdownEditor from './components/MarkDownEditor';
import { MarkdownProvider } from './components/Context';
import React, { useState } from 'react';

function App() {

  const [content, setContent] = useState('');
  const templates = ['InternalKnowledge.md', 'UserGuides.md']; // Add your template filenames here

  const fetchTemplate = async (template) => {
      try {
          const response = await fetch(`/templates/${template}`);
          console.log(template)
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          const data = await response.text();
          setContent(data);
      } catch (error) {
          console.error('Fetch error:', error);
      }
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}/>
      </header>
      <MarkdownProvider>
        <div className='sidebar'>
          <SideBanner templates={templates} onSelectTemplate={fetchTemplate}/>
        </div>
        <MarkdownEditor content={content}/>
      </MarkdownProvider>
    </div>
  );
}

export default App;
