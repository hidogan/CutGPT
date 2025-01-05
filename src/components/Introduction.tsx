import React from 'react';

export function Introduction() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-6">
      <div className="text-center space-y-2">
        <p className="text-slate-600 text-lg leading-relaxed">
          Transform lengthy content into AI-friendly chunks automatically. Simply paste your text,
          and we'll handle the optimal splitting while maintaining context between parts.
        </p>
        <p className="text-slate-500 text-sm">
          Copy and paste each part sequentially into your AI conversation for the best results.
        </p>
      </div>
    </section>
  );
}