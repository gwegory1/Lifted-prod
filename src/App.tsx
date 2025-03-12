import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './routes/home' 
import About from './routes/aboutme' 
import Training from './routes/training' 
import Nutrition from './routes/nutrition' 
import theme from './theme/theme'
import { ThemeProvider } from '@mui/material'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='*' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/training" element={<Training />} />
          <Route path="/nutrition" element={<Nutrition />} />
        </Routes>
      </Router>
    </ThemeProvider>

  );
}

export default App
