import React from 'react';

const Form = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg md:px-16">
      <h1 className="text-4xl font-bold text-center mb-4">Wordle Buddy</h1>
      
      <form>
        {/* First Row of Inputs */}
        <h1 className='text-xl text-left'>🟩 Correct Letters</h1>
        <p className='text-left'>Letters in the word and in the correct position (green tiles)</p>
        <div className="flex space-x-6 my-4 justify-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className="w-10 h-10 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          ))}
        </div>
        
        {/* Second Row of Inputs */}
        <h1 className='text-xl text-left'>🟨 Misplaced Letters</h1>
        <p className='text-left'>Letters in the word but in the wrong position (yellow tiles)</p>
        <div className="flex space-x-6 my-4 justify-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              className="w-10 h-10 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          ))}
        </div>

        {/* Simple Text Input */}
        <h1 className='text-xl text-left'>⬛ Excluded Letters</h1>
        <p className='text-left'>Letters not in the word in any spot (dark grey tiles)</p>
        <div className="my-4">
          <input
            type="text"
            placeholder=""
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 text-white rounded-md bg-btn hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
