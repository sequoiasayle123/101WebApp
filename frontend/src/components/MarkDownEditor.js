// Example: frontend/src/components/MarkdownEditor.js
import React, { useContext, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { MarkdownContext } from './Context';


function MarkdownEditor() {
  const { markdownText, setMarkdownText } = useContext(MarkdownContext);

  const handleMarkdownChange = (e) => {
    setMarkdownText(e.target.value);
  };

  return (
    <div className='container'>
      <textarea className='editor' value={markdownText} onChange={handleMarkdownChange} placeholder='Type here...'/>
      <div className='preview'>
        <ReactMarkdown>{markdownText}</ReactMarkdown>
      </div>

    </div>
  );
};

export default MarkdownEditor;
