import React, { useState, useEffect } from "react";
import './App.css';
import Cat from './components/Cat';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Home from './components/Home';
import H2 from './components/H2';
import H3 from './components/H3';
import Review from './components/Review';
import Foot from './components/Foot';
import Sign from './components/Sign';
import Cong from './components/Cong';
import CatLoader from './components/CatLoader'; // Import CatLoader

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

// Loading Wrapper Component
function LoadingWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true); // Show loader on route change
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate loading
    return () => clearTimeout(timer); // Clean up timer
  }, [location]); // Re-run on route change

  return (
    <>
      {loading ? <CatLoader /> : children}
    </>
  );
}

function App() {
  return (
    <div>
      <Router>
        <Navbar /> {/* Always visible */}

        <LoadingWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cat" element={<Cat />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="/cong" element={<Cong />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </LoadingWrapper>
      </Router>

      <H2 />
      <H3 />
      <Review />
      <Foot />
    </div>
  );
}

export default App;
