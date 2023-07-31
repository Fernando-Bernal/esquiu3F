import { useState , useEffect} from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './componentes/Home'
import AdminImport from './componentes/AdminImport';
import AdminImportTorneo from './componentes/AdminImportTorneo';
import AdminResults from './componentes/AdminResults';
import AdminFixture from './componentes/AdminFixture';
import AdminNews from './componentes/AdminNews';
import ViewLibres from './componentes/ViewLibres';
import View30 from './componentes/View30';
import View36 from './componentes/View36';
import View40 from './componentes/View40';
import ViewMaxi from './componentes/ViewMaxi';
import Campus from './componentes/Campus';
import Sinteticas from './componentes/Sinteticas';
import EsquiuDay from './componentes/EsquiuDay';
import AuthContextProvider from './context/authContext'
import Login from './componentes/Login';
import Protected from './componentes/Protected';
import Novedades from './componentes/Novedades';

function App() {

  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/torneo-libre" element={<ViewLibres/>} />
          <Route path="/torneo-30" element={<View30/>} />
          <Route path="/torneo-36" element={<View36/>} />
          <Route path="/torneo-40" element={<View40/>} />
          <Route exact path="/torneo-maxi" element={<ViewMaxi/>} />
          <Route exact path="/admin-fixture" element={<Protected>  <AdminFixture/>  </Protected>} />
          <Route exact path="/admin-torneo" element={<Protected>  <AdminImportTorneo/>  </Protected>} />
          <Route exact path="/admin-goles" element={<Protected>  <AdminImport/>  </Protected>} />
          <Route exact path="/admin-noticias" element={<Protected>  <AdminNews/>  </Protected>} />
          <Route exact path="/admin-resultados" element={<Protected>  <AdminResults/>  </Protected>} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/sinteticas" element={<Sinteticas />} />
          <Route path="/esquiuday" element={<EsquiuDay />} />
          <Route path="/login" element={<Login />} />
          <Route path="/novedades" element={<Novedades />} />
        </Routes>
      </AuthContextProvider> 
    </>
  )
}

export default App
