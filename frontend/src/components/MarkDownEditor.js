// Example: frontend/src/components/MarkdownEditor.js
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('');

  const handleMarkdownChange = (e) => {
    setMarkdown(e.target.value);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const text = await file.text();
    setMarkdown(text);
  };

  const handleFormatCheck = async () => {
    const response = await axios.post('/api/check-format', { markdown });
    // Handle the response to show formatting issues
  };

  return (
    <div>
      <textarea value={markdown} onChange={handleMarkdownChange} />
      <button onClick={handleFormatCheck}>Check Formatting</button>
      <ReactMarkdown>{markdown}</ReactMarkdown>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
};

export default MarkdownEditor;
