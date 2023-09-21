import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Import routes
import Home from "./routes/Home"
import HeroDetails from "./routes/HeroDetails"
import Team from "./routes/Team"

// Import components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/:id"} element={<HeroDetails />} />
        <Route path={"/team"} element={<Team />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
