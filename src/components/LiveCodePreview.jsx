'use client';

import { useState, useEffect, useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const tabs = ['HTML', 'CSS', 'JavaScript'];

export default function CodeGallery({ project }) {
  const [activeTab, setActiveTab] = useState('HTML');
  const iframeRef = useRef(null);

  const getCode = () => {
    switch (activeTab) {
      case 'HTML': return project.codes.html;
      case 'CSS': return project.codes.css;
      case 'JavaScript': return project.codes.js;
      default: return '';
    }
  };

  const buildIframeContent = () => {
    return `
      <html dir="rtl">
        <head>
          <style>${project.codes.css}</style>
        </head>
        <body>
          ${project.codes.html}
          <script>${project.codes.js}</script>
        </body>
      </html>
    `;
  };

  useEffect(() => {
    const iframe = iframeRef.current;
    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(buildIframeContent());
    doc.close();
  }, []);

  return (
    <div className="md:grid md:grid-cols-2 gap-6 p-1 bg-white rounded-xl flex flex-col md:flex-row justify-center  shadow-md">
     {/* Live Preview */}
     <div className='flex flex-col'>
        
        <iframe
          ref={iframeRef}
          className="w-auto md:w-full h-[700px] md:h-[calc(100vh-10rem)] border rounded-lg shadow"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
      {/* Code Section */}
      <div>
        {/* <h3 className="text-lg saminB mb-2">{project.title}</h3> */}
        <div className="flex space-x-2 rtl:space-x-reverse mb-2">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-md border ${
                activeTab === tab ? 'bg-gray-800 text-white' : 'bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <SyntaxHighlighter className="md:h-[calc(100vh-12rem)] w-auto md:w-full h-screen" language={activeTab.toLowerCase()} style={oneDark} customStyle={{ borderRadius: '8px', fontSize: '0.85rem' }}>
          {getCode()}
        </SyntaxHighlighter>
      </div>

     
    </div>
  );
}
