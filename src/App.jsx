import { useState , useEffect} from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './componentes/Home'
import AdminImport from './componentes/AdminImport';
import AdminImportTorneo from './componentes/AdminImportTorneo';
import ViewLibres from './componentes/ViewLibres';
import View30 from './componentes/View30';

function App() {


  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/torneolibre" element={<ViewLibres/>} />
          <Route path="/torneo30" element={<View30/>} />
          <Route path="/admintorneo" element={<AdminImportTorneo />} />
          <Route path="/admingoles" element={<AdminImport />} />

        </Routes>
      </div>
    </>
  )
}

export default App
