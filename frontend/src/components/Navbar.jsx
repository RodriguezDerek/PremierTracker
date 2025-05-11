import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="custom-bg text-white p-4 md:p-6">

      <div className="flex justify-between items-center">
        
        <div className="flex items-center text-xl md:text-2xl font-bold">
          <img src="/logo.png" alt="Logo" className="w-12 h-8 mr-2" />
          <h2>PremierTracker</h2>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />) : (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />)}
          </svg>
        </button>

        <ul className="hidden md:flex space-x-10">
          <Link to="/"><li className="flex items-center space-x-2 mr-8"><img className="w-4 h-4" src="/home_icon.png" /><span>Home</span></li></Link>
          <Link to="/team"><li className="flex items-center space-x-2 mr-8"><img className="w-4 h-4" src="/team_icon.png" /><span>Team</span></li></Link>
          <Link to="/position"><li className="flex items-center space-x-2 mr-8"><img className="w-4 h-4" src="/position_icon.png" /><span>Position</span></li></Link>
          <Link to="/nation"><li className="flex items-center space-x-2 mr-8"><img className="w-4 h-4" src="/flag_icon.png" /><span>Nation</span></li></Link>
        </ul>

      </div>
      
      {isOpen && (
        <ul className="mt-4 space-y-4 md:hidden">
          <Link to="/"><li className="flex items-center space-x-2"><img className="w-4 h-4" src="/home_icon.png" /><span>Home</span></li></Link>
          <Link to="/team"><li className="flex items-center space-x-2"><img className="w-4 h-4" src="/team_icon.png" /><span>Team</span></li></Link>
          <Link to="/position"><li className="flex items-center space-x-2"><img className="w-4 h-4" src="/position_icon.png" /><span>Position</span></li></Link>
          <Link to="/nation"><li className="flex items-center space-x-2"><img className="w-4 h-4" src="/flag_icon.png" /><span>Nation</span></li></Link>
        </ul>
      )}

    </nav>
  )
}

export default Navbar
