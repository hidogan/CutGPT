import React from 'react';
import { Check, Copy } from 'lucide-react';

interface CopyButtonsProps {
  chunks: string[];
  copiedIndices: Set<number>;
  onCopy: (chunk: string, index: number) => void;
}

export function CopyButtons({ chunks, copiedIndices, onCopy }: CopyButtonsProps) {
  if (chunks.length === 0) return null;

  const totalChunks = chunks.length;

  return (
    <div className="flex flex-wrap justify-center gap-2 my-4">
      {chunks.map((chunk, index) => {
        const isLast = index === chunks.length - 1;
        const buttonLabel = `[${index + 1}/${totalChunks}]`;
        
        return (
          <button
            key={index}
            onClick={() => onCopy(chunk, index)}
            className={`
              px-4 py-2 rounded-lg transition-all duration-200 
              flex items-center gap-2 shadow-sm hover:shadow-md
              ${copiedIndices.has(index)
                ? 'bg-violet-500 text-white' 
                : 'bg-white border border-slate-200 text-slate-700 hover:border-violet-500 hover:text-violet-600'
              }
              ${isLast ? 'ring-2 ring-violet-200' : ''}
            `}
          >
            {copiedIndices.has(index) ? (
              <>
                <Check className="w-4 h-4" />
                <span>Copied {buttonLabel}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy {buttonLabel}</span>
              </>
            )}
          </button>
        );
      })}
    </div>
  );
}