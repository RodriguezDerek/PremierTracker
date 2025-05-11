import React, { useState } from 'react';
import PlayerTable from '../components/PlayerTable';

function Position() {
const [position, setPosition] = useState(null);
  
    function handlePositionChange(event) {
      const selectedPosition = event.target.value;
      setPosition(selectedPosition);
    }
  
    function handlePositionSubmission(event) {
      event.preventDefault();
      if (position) {
        console.log("Position submitted:", position);
      } else {
        console.log("No Position selected");
      }
    }
  
    return (
        <div className="relative w-full h-screen">
          <img src="/website_bg.webp" alt="Home Background" className="w-full h-full object-cover" />
          
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full px-4 fadeInUp">
            <h1 className="text-white text-2xl sm:text-3xl font-bold text-center">Positions</h1>
            
            <div className="flex flex-col sm:flex-row justify-center items-center mt-4 gap-4">
              <input onChange={handlePositionChange} type="text" placeholder="Enter a Position..." className="w-full sm:w-80 h-12 sm:h-14 px-4 py-2 border bg-gray-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"/>
              <button onClick={handlePositionSubmission} className="w-full sm:w-28 h-12 sm:h-14 px-4 sm:px-6 text-white btn-border">Search</button>
            </div>
          </div>
  
          <PlayerTable />
        </div>
    );
} export default Position;