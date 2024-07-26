"use client";
import React from 'react';

const Letters = () => {
  const tabClick = (e: EventTarget) => {
    // TODO: Handle tabClick;
  }

  return (
    <div className="flex space-x-6 my-4 justify-center">
      {Array.from({ length: 5 }).map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          className="w-10 h-10 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onKeyDown={(e) => tabClick(e.target)}
        />
      ))}
    </div>
  )
};

export default Letters;
