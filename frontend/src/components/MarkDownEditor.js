// Example: frontend/src/components/MarkdownEditor.js
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('');

  const handleMarkdownChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className='container'>
      <textarea className='editor' value={markdown} onChange={handleMarkdownChange} placeholder='Type here...'/>
      <div className='preview'>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>

    </div>
  );
};

export default MarkdownEditor;
