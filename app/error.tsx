'use client';

import React, { useEffect } from 'react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled runtime error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100dvh-12rem)] text-center px-4">
      <p className="font-mono text-[#64ffda] text-4xl md:text-5xl font-bold mb-4">Something went wrong</p>
      <p className="text-[#8892b0] max-w-[500px] mb-8 text-base">
        An unexpected error occurred. Please try again.
      </p>
      <button 
        type="button"
        onClick={() => reset()}
        className="btn-outline cursor-pointer"
      >
        Try Again
      </button>
    </div>
  );
}
