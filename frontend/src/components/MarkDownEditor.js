// Example: frontend/src/components/MarkdownEditor.js
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';


function MarkdownEditor({ selectedTemplate }) {
  const [ markdownText, setMarkdownText ] = useState('');

  const handleMarkdownChange = (e) => {
    setMarkdownText(e.target.value);
  };

  useEffect(() => {
    if (selectedTemplate) {
      fetch(selectedTemplate)
      .then((res) => res.text())
      .then((md) => {
        setMarkdownText(md)
      })
    }
  }, [selectedTemplate]);

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
