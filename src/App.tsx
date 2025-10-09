import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Dashboard from './components/Dashboard';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Watchlist from './pages/Watchlist';
import Market from './pages/Market';
import Funds from './pages/Funds';
import Research from './pages/Research';
import Tools from './pages/Tools';
import Profile from './pages/profile';
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Dashboard>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/market" element={<Market />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/research" element={<Research />} />
            <Route path="/tools" element={<Tools />} />
          </Routes>
        </Dashboard>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
