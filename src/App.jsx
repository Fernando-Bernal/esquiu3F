import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './componentes/Home'
import Torneo from './componentes/Torneo';
import AdminImport from './componentes/AdminImport';

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/torneos" element={<Torneo />} />
          <Route path="/admin" element={<AdminImport />} />

        </Routes>
      </div>
    </>
  )
}

export default App
