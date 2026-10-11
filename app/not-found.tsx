import React from 'react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100dvh-12rem)] text-center px-4">
      <p className="font-mono text-[#64ffda] text-6xl md:text-8xl font-bold mb-4">404</p>
      <h1 className="text-[#ccd6f6] font-semibold text-3xl md:text-4xl mb-6">
        Page Not Found
      </h1>
      <p className="text-[#8892b0] max-w-[500px] mb-8 text-base md:text-lg">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <a href="/" className="btn-outline">
        Go Home
      </a>
    </div>
  );
}
