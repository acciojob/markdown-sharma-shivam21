// src/components/MarkdownEditor.js
import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = ({ markdown, setMarkdown }) => {
  return (
    <>
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Type markdown here..."
      />
      <div className="preview">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </>
  );
};

export default MarkdownEditor;
