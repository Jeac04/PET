import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import MascotasPerdidas from './components/MascotasPerdidas';
import Asociaciones from './components/Asociaciones';
import Adopcion from './components/Adopcion';
import ComoReporto from './components/ComoReporto';
import Cuidados from './components/CuidadosMascotas';
import Importancia from './components/ImportanciaMascotas';
import Login from './components/Login';
import Signup from './components/SignUp';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Mascotas-Perdidas" element={<MascotasPerdidas />} />
        <Route path="/Asociaciones" element={<Asociaciones />} />
        <Route path="/Adopcion-Responsable" element={<Adopcion />} />
        <Route path="/Cuidados-Mascotas" element={<Cuidados />} />
        <Route path="/Importancia-Mascotas" element={<Importancia />} />
        <Route path="/Como-Reporto" element={<ComoReporto />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;