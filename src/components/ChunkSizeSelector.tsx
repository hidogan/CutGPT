import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface ChunkSizeSelectorProps {
  value: number;
  onChange: (value: number) => void;
}

export function ChunkSizeSelector({ value, onChange }: ChunkSizeSelectorProps) {
  const handleIncrement = () => onChange(value + 1000);
  const handleDecrement = () => onChange(Math.max(1000, value - 1000));

  return (
    <div className="w-full max-w-[280px] mx-auto flex flex-col items-center">
      <label htmlFor="chunkSize" className="text-sm font-medium text-slate-700 mb-2">
        Characters per Chunk
      </label>
      <div className="flex items-center gap-2">
        <button
          onClick={handleDecrement}
          className="p-2 rounded-lg bg-violet-100 hover:bg-violet-200 text-violet-600 transition-colors"
          aria-label="Decrease chunk size"
        >
          <Minus className="w-4 h-4" />
        </button>
        <input
          type="number"
          id="chunkSize"
          className="w-20 p-2 text-sm bg-violet-50 border border-violet-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 text-center"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          min="1000"
          step="1000"
        />
        <button
          onClick={handleIncrement}
          className="p-2 rounded-lg bg-violet-100 hover:bg-violet-200 text-violet-600 transition-colors"
          aria-label="Increase chunk size"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}