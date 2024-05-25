import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Arquivos from './pages/arquivos'
import ComiteAgnu from './pages/comiteagnu';
import ComiteCam from './pages/comitecam';
import ComiteCcoi from './pages/comiteccoi';
import ComiteUnsc from './pages/comiteunsc';

import './App.css';

function App() {
    return (
      <div className='App'>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/arquivos' element={<Arquivos/>}/>
            <Route exact path='/comiteagnu' element={<ComiteAgnu/>}/>
            <Route exact path='/comitecam' element={<ComiteCam/>}/>
            <Route exact path='/comiteccoi' element={<ComiteCcoi/>}/>
            <Route exact path='/comiteunsc' element={<ComiteUnsc/>}/>
          </Routes>
        </Router>
      </div>
    );
}

export default App;