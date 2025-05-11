
function PlayerTable({ players}) {

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-[90%] z-10 overflow-x-auto fadeInUp">
        <table className="custom-table w-full text-xs text-white text-center border-collapse">
            <thead>
                <tr className="bg-purple-800 bg-opacity-80">
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
                {/* Example row - replace with real data */}
                <tr>
                    <td className="px-2 py-1">1</td>
                    <td className="px-2 py-1">Erling Haaland</td>
                    <td className="px-2 py-1">9</td>
                    <td className="px-2 py-1">Manchester City</td>
                    <td className="px-2 py-1">Forward</td>
                    <td className="px-2 py-1">Norway</td>
                    <td className="px-2 py-1">24</td>
    
                    <td className="px-2 py-1">30</td>
                    <td className="px-2 py-1">7</td>
                    <td className="px-2 py-1">90</td>
                    <td className="px-2 py-1">50</td>
                    <td className="px-2 py-1">300</td>
    
                    <td className="px-2 py-1">24</td>
                    <td className="px-2 py-1">4</td>
                    <td className="px-2 py-1">10</td>
                    <td className="px-2 py-1">0</td>
    
                    <td className="px-2 py-1">3</td>
                    <td className="px-2 py-1">0</td>
                    <td className="px-2 py-1">12</td>
                    <td className="px-2 py-1">1</td>
                </tr>
            </tbody>
        </table>
    </div>
  );
} export default PlayerTable;