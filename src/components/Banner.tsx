import React from 'react';
import { SplitSquareHorizontal } from 'lucide-react';

export function Banner() {
  return (
    <header className="bg-gradient-to-r from-violet-600 via-violet-500 to-fuchsia-500 text-white py-8 px-4 shadow-lg">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-3">
          <SplitSquareHorizontal className="w-10 h-10" />
          <h1 className="text-4xl font-bold tracking-tight">CutGPT Prompt Splitter</h1>
        </div>
        <p className="text-violet-100 text-center max-w-2xl">
          Seamlessly handle large prompts with AI models by automatically splitting them 
          into perfectly sized chunks while maintaining context and coherence.
        </p>
      </div>
    </header>
  );
}