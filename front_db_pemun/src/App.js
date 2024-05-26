import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Arquivos from './pages/arquivos'
import ComiteAgnu from './pages/comiteagnu';
import ComiteCam from './pages/comitecam';
import ComiteCcoi from './pages/comiteccoi';
import ComiteCii from './pages/comitecii';
import ComiteCorte from './pages/comitecorte';
import ComiteEscap from './pages/comiteescap';
import ComitePnud from './pages/comitepnud';
import ComiteTpi from './pages/comitetpi';
import ComiteUnche from './pages/comiteunche';
import ComiteUnsc from './pages/comiteunsc';
import ComiteOnu from './pages/comiteonu';
import Edicao from './pages/edicao';
import Staff from './pages/staff';
import ComiteGab from './pages/comitegab'
import Admin from './pages/admin';
import Produto from './pages/Produto'; 
import Ingresso from './pages/Ingresso';
import Pacote from './pages/Pacote';
import Pedido from './pages/Pedido';

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
            <Route exact path='/comitecii' element={<ComiteCii/>}/>
            <Route exact path='/comitecorte' element={<ComiteCorte/>}/>
            <Route exact path='/comiteescap' element={<ComiteEscap/>}/>
            <Route exact path='/comitepnud' element={<ComitePnud/>}/>
            <Route exact path='/comitetpi' element={<ComiteTpi/>}/>
            <Route exact path='/comiteunche' element={<ComiteUnche/>}/>
            <Route exact path='/comiteunsc' element={<ComiteUnsc/>}/>
            <Route exact path='/comiteonu' element={<ComiteOnu/>}/>
            <Route exact path='/edicao' element={<Edicao/>}/>
            <Route exact path='/staff' element={<Staff/>}/>
            <Route exact path='/comitegab' element={<ComiteGab/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/admin/produto" element={<Produto/>}/>
            <Route path="/admin/ingresso" element={<Ingresso/>}/>
            <Route path="/admin/pacote" element={<Pacote/>}/>
            <Route path="/admin/pedido" element={<Pedido/>}/>
          </Routes>
        </Router>
      </div>
    );
}

export default App;