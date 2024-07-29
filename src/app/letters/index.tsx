"use client";
import React, { useRef, useState, useEffect, createRef } from 'react';

const Letters = () => {
  const numInputs = 5;
  const [letterRefs, setLetterRefs] = useState<React.RefObject<HTMLInputElement>[]>([]);

  useEffect(() => {
    setLetterRefs((refs) =>
      Array(numInputs)
        .fill(null)
        .map((_, i) => refs[i] || createRef<HTMLInputElement>())
    );
  }, [numInputs]);

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key !== 'Shift' && e.key !== 'Tab' && 
       e.key !== 'ArrowUp' && e.key !== 'ArrowRight' && e.key !== 'ArrowDown' && e.key !== 'ArrowLeft' &&
       e.currentTarget.value.length === e.currentTarget.maxLength) {
      if (index < letterRefs.length - 1) {
        letterRefs[index + 1].current?.focus();
      }
    }
  };

  return (
    <div className="flex space-x-6 my-4 justify-center">
      {letterRefs.map((ref, index) => (
        <input
          key={index}
          ref={ref}
          type="text"
          maxLength={1}
          className="w-10 h-10 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onKeyUp={(e) => handleKeyUp(e, index)}
        />
      ))}
    </div>
  );
};

export default Letters;
