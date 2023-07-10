import { useState , useEffect} from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './componentes/Home'
import AdminImport from './componentes/AdminImport';
import AdminImportTorneo from './componentes/AdminImportTorneo';
import AdminNews from './componentes/AdminNews';
import ViewLibres from './componentes/ViewLibres';
import View30 from './componentes/View30';

function App() {


  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/torneo-libre" element={<ViewLibres/>} />
          <Route path="/torneo-30" element={<View30/>} />
          <Route path="/admin-torneo" element={<AdminImportTorneo />} />
          <Route path="/admin-goles" element={<AdminImport />} />
          <Route path="/admin-noticias" element={<AdminNews />} />
        </Routes>
      </div>
    </>
  )
}

export default App
