import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import OurPlansPage from './pages/OurPlansPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-plans" element={<OurPlansPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;