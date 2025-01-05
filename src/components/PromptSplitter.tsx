import React, { useState, useCallback, useEffect } from 'react';
import { splitText } from '../utils/textSplitter';
import { ChunkSizeSelector } from './ChunkSizeSelector';
import { CopyButtons } from './CopyButtons';

export function PromptSplitter() {
  const [text, setText] = useState('');
  const [chunkSize, setChunkSize] = useState(15000);
  const [copiedIndices, setCopiedIndices] = useState<Set<number>>(new Set());
  const chunks = splitText(text, chunkSize);

  useEffect(() => {
    setCopiedIndices(new Set());
  }, [text, chunkSize]);

  const handleChunkSizeChange = useCallback((value: number) => {
    if (value >= 1000) {
      setChunkSize(value);
    }
  }, []);

  const handleCopy = useCallback((chunk: string, index: number) => {
    navigator.clipboard.writeText(chunk);
    setCopiedIndices(prev => {
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-4 py-6">
      <div className="space-y-6">
        <div className="grid gap-6">
          <div>
            <label htmlFor="prompt" className="block text-sm font-medium text-slate-700 mb-2 text-center">
              Your Text
            </label>
            <textarea
              id="prompt"
              className="w-full h-48 p-4 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 shadow-sm"
              placeholder="Paste your text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <ChunkSizeSelector value={chunkSize} onChange={handleChunkSizeChange} />
          
          <CopyButtons 
            chunks={chunks} 
            copiedIndices={copiedIndices} 
            onCopy={handleCopy} 
          />

          {chunks.length > 0 && (
            <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 shadow-sm">
              <pre className="whitespace-pre-wrap text-sm text-slate-700 font-mono overflow-y-auto max-h-48 leading-relaxed">
                {chunks.join('\n\n')}
              </pre>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}