"use client";
import React, { useState, useEffect, createRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface LettersProps {
  type: string;
  letters: string[];
  setLetters: React.Dispatch<React.SetStateAction<string[]>>;
}

const Letters: React.FC<LettersProps> = ({ type, letters, setLetters }) => {
  const numInputs = 5;
  const [letterRefs, setLetterRefs] = useState<React.RefObject<HTMLInputElement>[]>([]);

  useEffect(() => {
    setLetterRefs((refs) =>
      Array(numInputs)
        .fill(null)
        .map((_, i) => refs[i] || createRef<HTMLInputElement>())
    );
  }, [numInputs]);

  const handleInput = (e: React.FormEvent<HTMLInputElement>, index: number) => {
    const allowedKeys = ['Shift', 'Tab', 'ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'];
    if (!allowedKeys.includes(e.currentTarget.value) && /^[a-zA-Z]$/.test(e.currentTarget.value) && e.currentTarget.value.length === e.currentTarget.maxLength) {
      if (index < letterRefs.length - 1) {
        letterRefs[index + 1].current?.focus();
      }
    } else if (e.currentTarget.value.length === e.currentTarget.maxLength - 1 && e.currentTarget.value !== 'Tab') {
      if (index - 1 >= 0) {
        letterRefs[index - 1].current?.focus();
      }
    }
    const input = e.currentTarget;
    let newValue = input.value.toUpperCase();
    if (!/^[A-Z]$/.test(newValue)) {
      input.value = '';
      newValue = '';
    } else if (type === 'incorrect' && letters.includes(newValue)) {
      input.value = '';
      newValue = '';
      toast.error('This letter cannot be repeated.', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    setLetters(letters.map((val, i) => (i === index ? newValue : val)));
  };

  const handleInputBlur = (e: React.FormEvent<HTMLInputElement>, index: number) => {
    if (e.currentTarget.value === '') {
      setLetters(letters.map((val, i) => (i === index ? '' : val)));
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="flex space-x-6 my-4 justify-center">
        {letterRefs.map((ref, index) => (
          <input
            key={index}
            ref={ref}
            type="text"
            maxLength={1}
            value={letters[index]}
            className={`w-10 h-10 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${letters[index] ? (type === 'correct' ? 'bg-background' : 'bg-btn') : 'bg-white'} ${(type === 'correct' ? 'border-background' : 'border-btn')} font-bold uppercase`}
            onInput={(e) => handleInput(e, index)}
            onBlur={(e) => handleInputBlur(e, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Letters;
