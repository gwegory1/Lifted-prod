import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './routes/home' 
import About from './routes/aboutme' 
import Training from './routes/training' 
import Nutrition from './routes/nutrition' 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/training" element={<Training />} />
        <Route path="/nutrition" element={<Nutrition />} />
      </Routes>
    </Router>
  );
}

export default App
