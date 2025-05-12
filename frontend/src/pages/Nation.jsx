import React, { useState, useEffect } from 'react';
import PlayerTable from '../components/PlayerTable';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

function Nation() {
  const [nation, setNation] = useState(null);
  const [inputNation, setInputNation] = useState('');
  const [players, setPlayers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchPlayerData() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:8080/api/v1/premier-league/players/nation/${nation}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setPlayers(data);

    } catch (error) {
      setError(error.message);

    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (nation) {
      fetchPlayerData();
    }
  }, [nation]);

  function handleInputNationChange(event) {
    event.preventDefault();
    setInputNation(event.target.value);
  }

  function handleNationSubmission() {
    if (inputNation.trim() !== '') {
      setNation(inputNation.trim());
      setInputNation('');
    }
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="w-full custom-bg h-full flex flex-col min-h-screen bg-cover bg-center">
      <img src="/website_bg.webp" alt="Home Background" className="w-full h-full" />

      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full px-4 fadeInUp">
        <h1 className="text-white text-2xl sm:text-3xl font-bold text-center">Nations</h1>

        <div className="flex flex-col sm:flex-row justify-center items-center mt-4 gap-4">
          <input value={inputNation} onChange={handleInputNationChange} type="text" placeholder="Enter a Nation..." className="w-full sm:w-80 h-12 sm:h-14 px-4 py-2 border bg-gray-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"/>
          <button onClick={handleNationSubmission} className="w-full sm:w-28 h-12 sm:h-14 px-4 sm:px-6 text-white btn-border">Search</button>
        </div>
      </div>

      <PlayerTable players={players} />
    </div>
  );
}

export default Nation;
