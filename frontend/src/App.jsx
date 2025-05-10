import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Position from "./pages/Position";
import Nation from "./pages/Nation";
import Team from "./pages/Team";

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/position" element={<Position />} />
          <Route path="/nation" element={<Nation />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
