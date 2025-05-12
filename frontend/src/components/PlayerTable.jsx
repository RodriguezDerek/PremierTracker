function PlayerTable({ players }) {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-[90%] z-10 fadeInUp">
      {/* Scrollable container */}
      <div className="max-h-[400px] overflow-y-auto border border-purple-500 rounded-md">
        <table className="custom-table w-full text-xs text-white text-center border-collapse bo">
          <thead className="sticky top-0 bg-purple-800 bg-opacity-80 z-1">
            <tr>
              <th className="px-2 py-2">Player ID</th>
              <th className="px-2 py-2">Name</th>
              <th className="px-2 py-2">Jersey Number</th>
              <th className="px-2 py-2">Team</th>
              <th className="px-2 py-2">Position</th>
              <th className="px-2 py-2">Nationality</th>
              <th className="px-2 py-2">Age</th>
              <th className="px-2 py-2">Goals</th>
              <th className="px-2 py-2">Assists</th>
              <th className="px-2 py-2">Shots</th>
              <th className="px-2 py-2">Shots on Target</th>
              <th className="px-2 py-2">Passes</th>
              <th className="px-2 py-2">Wins</th>
              <th className="px-2 py-2">Losses</th>
              <th className="px-2 py-2">Clean Sheets</th>
              <th className="px-2 py-2">Saves</th>
              <th className="px-2 py-2">Yellow Cards</th>
              <th className="px-2 py-2">Red Cards</th>
              <th className="px-2 py-2">Fouls</th>
              <th className="px-2 py-2">Offsides</th>
            </tr>
          </thead>
          <tbody className="custom-bg bg-opacity-60">
            {players?.playerList?.length > 0 ? (
              players.playerList.map((player, index) => (
                <tr key={index}>
                  <td className="px-2 py-1">{player.id}</td>
                  <td className="px-2 py-1">{player.name}</td>
                  <td className="px-2 py-1">{player.jerseyNumber}</td>
                  <td className="px-2 py-1">{player.team}</td>
                  <td className="px-2 py-1">{player.position}</td>
                  <td className="px-2 py-1">{player.nationality}</td>
                  <td className="px-2 py-1">{player.age}</td>
                  <td className="px-2 py-1">{player.goals}</td>
                  <td className="px-2 py-1">{player.assists}</td>
                  <td className="px-2 py-1">{player.shots}</td>
                  <td className="px-2 py-1">{player.shotsOnTarget}</td>
                  <td className="px-2 py-1">{player.passes}</td>
                  <td className="px-2 py-1">{player.wins}</td>
                  <td className="px-2 py-1">{player.losses}</td>
                  <td className="px-2 py-1">{player.cleanSheets}</td>
                  <td className="px-2 py-1">{player.saves}</td>
                  <td className="px-2 py-1">{player.yellowCards}</td>
                  <td className="px-2 py-1">{player.redCards}</td>
                  <td className="px-2 py-1">{player.fouls}</td>
                  <td className="px-2 py-1">{player.offsides}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="20" className="px-2 py-1 text-center">
                  <h1 className="text-white text-lg">No Players Found</h1>
                  <p className="text-gray-400">Please check the team, nationality, position name and try again.</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
} export default PlayerTable;
