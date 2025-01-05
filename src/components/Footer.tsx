import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center text-gray-600">
          <p className="mb-2">
          CutGPT Prompt Splitter - A user-friendly tool designed to assist you in effectively managing and organizing lengthy prompts for Large Language Models like ChatGPT, Claude, and others.
          </p>
          <p className="text-sm">
            Built with React and Tailwind CSS by <a href="https://github.com/hidogan" className="text-violet-600 hover:text-violet-700">Halil Dogan</a>
          </p>
        </div>
      </div>
    </footer>
  );
}