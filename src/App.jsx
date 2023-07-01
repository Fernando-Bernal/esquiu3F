import { useState , useEffect} from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './componentes/Home'
import Torneo from './componentes/Torneo';
import AdminImport from './componentes/AdminImport';
import Goleadores from './componentes/Goleadores';
import AdminImportTorneo from './componentes/AdminImportTorneo';

function App() {


  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/torneos" element={<Torneo />} />
          <Route path="/goles" element={<Goleadores />} />
          <Route path="/admin-torneo" element={<AdminImportTorneo />} />
          <Route path="/admin-goles" element={<AdminImport />} />

        </Routes>
      </div>
    </>
  )
}

export default App
