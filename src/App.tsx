import React from 'react';
import { Banner } from './components/Banner';
import { Introduction } from './components/Introduction';
import { PromptSplitter } from './components/PromptSplitter';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Banner />
      <main className="flex-1">
        <Introduction />
        <PromptSplitter />
      </main>
      <Footer />
    </div>
  );
}

export default App;