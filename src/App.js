import './App.css';
import Cat from './components/Cat';
import Contact from './components/Contact';
import Navbar from './components/Navbar'
import Home from './components/Home'
import H2 from './components/H2';
import H3 from './components/H3';
import Review from './components/Review';
import Foot from './components/Foot';
import Sign from './components/Sign'


import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";



function App() {
  return (
    <>
      { <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cat" element={<Cat/>}/>
        </Routes>
      </Router> }

      <Router>
        <Home>
          <Routes>
            <Route path="/sign" element={<Sign/>}/>
          
          </Routes>
        </Home>
      </Router>

      <H2/>
      <H3/>
      <Review/>
      
      <Foot/>
      
    
    </>
  );
}

export default App;