"use client";
import React, { useRef, useState, useEffect, createRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface LettersProps {
  type: string;
}

const Letters: React.FC<LettersProps> = ({ type }) => {
  const numInputs = 5;
  const [letterRefs, setLetterRefs] = useState<React.RefObject<HTMLInputElement>[]>([]);
  const [values, setValues] = useState<string[]>(Array(numInputs).fill(''));

  useEffect(() => {
    setLetterRefs((refs) =>
      Array(numInputs)
        .fill(null)
        .map((_, i) => refs[i] || createRef<HTMLInputElement>())
    );
  }, [numInputs]);

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const allowedKeys = ['Shift', 'Tab', 'ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'];
    if (!allowedKeys.includes(e.key) && /^[a-zA-Z]$/.test(e.key) && e.currentTarget.value.length === e.currentTarget.maxLength) {
      if (index < letterRefs.length - 1) {
        letterRefs[index + 1].current?.focus();
      }
    } else if (e.currentTarget.value.length === e.currentTarget.maxLength - 1 && e.key !== 'Tab') {
      if (index - 1 >= 0) {
        letterRefs[index - 1].current?.focus();
      }
    }
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement>, index: number) => {
    const input = e.currentTarget;
    let newValue = input.value.toUpperCase();
    if (!/^[A-Z]$/.test(newValue)) {
      input.value = '';
      newValue = '';
    } else if (type === 'incorrect' && values.includes(newValue)) {
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

    setValues(values.map((val, i) => (i === index ? newValue : val)));
  };

  const handleInputBlur = (e: React.FormEvent<HTMLInputElement>, index: number) => {
    if (e.currentTarget.value === '') {
      setValues(values.map((val, i) => (i === index ? '' : val)));
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
            className={`w-10 h-10 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${values[index] ? (type === 'correct' ? 'bg-background' : 'bg-btn') : 'bg-white'} ${(type === 'correct' ? 'border-background' : 'border-btn')} font-bold uppercase`}
            onKeyUp={(e) => handleKeyUp(e, index)}
            onInput={(e) => handleInput(e, index)}
            onBlur={(e) => handleInputBlur(e, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Letters;
