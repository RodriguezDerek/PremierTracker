import React, { useState } from 'react';
import PlayerTable from '../components/PlayerTable';

function Nation() {
  const [nation, setNation] = useState(null);
  
    function handleNationChange(event) {
      const selectedNation = event.target.value;
      setNation(selectedNation);
    }
  
    function handleNationSubmission(event) {
      event.preventDefault();
      if (nation) {
        console.log("Nation submitted:", nation);
      } else {
        console.log("No Nation selected");
      }
    }
  
    return (
        <div className="relative w-full h-screen">
          <img src="/website_bg.webp" alt="Home Background" className="w-full h-full object-cover" />
          
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full px-4 fadeInUp">
            <h1 className="text-white text-2xl sm:text-3xl font-bold text-center">Nations</h1>
            
            <div className="flex flex-col sm:flex-row justify-center items-center mt-4 gap-4">
              <input onChange={handleNationChange} type="text" placeholder="Enter a Nation..." className="w-full sm:w-80 h-12 sm:h-14 px-4 py-2 border bg-gray-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"/>
              <button onClick={handleNationSubmission} className="w-full sm:w-28 h-12 sm:h-14 px-4 sm:px-6 text-white btn-border">Search</button>
            </div>
          </div>
  
          <PlayerTable />
        </div>
    );
} export default Nation;