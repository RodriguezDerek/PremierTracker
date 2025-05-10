import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="custom-bg flex justify-center items-center text-white p-6">
        <div className="flex items-center text-2xl font-bold">
            <img src="/logo.png" alt="Logo" className="w-15 h-10 mr-2" />
            <h2>PremierTracker</h2>
        </div>
        <ul className="flex justify-center items-center w-full space-x-30">
            <Link to="/"><li className="flex justify-center items-center space-x-2"><img className="w-4 h-4" src="/home_icon.png"></img><p>Home</p></li></Link>
            <Link to="/team"><li className="flex justify-center items-center space-x-2"><img className="w-4 h-4" src="/team_icon.png"></img><p>Team</p></li></Link>
            <Link to="/position"><li className="flex justify-center items-center space-x-2"><img className="w-4 h-4" src="/position_icon.png"></img><p>Position</p></li></Link>
            <Link to="/nation"><li className="flex justify-center items-center space-x-2"><img className="w-4 h-4" src="/flag_icon.png"></img><p>Nation</p></li></Link>
        </ul>
    </nav>
  );
} export default Navbar;