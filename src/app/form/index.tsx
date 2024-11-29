"use client";
import React, { useState } from 'react';
import Letters from '../letters';

const Form = () => {
  const [selectedLetters, setSelectedLetters] = useState<string[]>(Array(5).fill(''));
  const [misplacedLetters, setMisplacedLetters] = useState<string[]>(Array(5).fill(''));
  const [excludedLetters, setExcludedLetters] = useState<string>('');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const selectedLettersArr = selectedLetters;
    const misplacedLettersArr = misplacedLetters;
    const excludedLettersStr = excludedLetters;
    debugger;
    console.log('Button clicked!');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg md:px-16">
      <h1 className="text-4xl font-bold text-center mb-4">Wordle Buddy</h1>
      
      <div>
        {/* First Row of Inputs */}
        <h1 className='text-xl text-left'>🟩 Correct Letters</h1>
        <p className='text-left'>Letters in the word and in the correct position (green tiles)</p>
        <Letters
          type='correct'
          letters={selectedLetters}
          setLetters={setSelectedLetters}
        />
        
        {/* Second Row of Inputs */}
        <h1 className='text-xl text-left'>🟨 Misplaced Letters</h1>
        <p className='text-left'>Letters in the word but in the wrong position (yellow tiles)</p>
        <Letters
          type='incorrect'
          letters={misplacedLetters}
          setLetters={setMisplacedLetters}
        />

        {/* Simple Text Input */}
        <h1 className='text-xl text-left'>⬛ Excluded Letters</h1>
        <p className='text-left'>Letters not in the word in any spot (dark grey tiles)</p>
        <div className="my-4">
          <input
            type="text"
            placeholder=""
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={excludedLetters}
            onChange={(e) => setExcludedLetters(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={(e) => handleClick(e)}
          type="submit"
          className="w-full px-4 py-2 text-white rounded-md bg-btn hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
