import React from 'react';
import Login from './components/vistas/Login';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/vistas/Home'
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {

  return (
    <Router>
      <Navbar/>
        <Routes>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/" element={<Home/>}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
