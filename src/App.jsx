import { useState , useEffect} from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './componentes/Home'
import AuthContextProvider from './context/authContext'
import AdminImport from './componentes/AdminImport';
import AdminImportTorneo from './componentes/AdminImportTorneo';
import AdminResults from './componentes/AdminResults';
import AdminFixture from './componentes/AdminFixture';
import AdminPlayers from './componentes/AdminPlayers';
import AdminNews from './componentes/AdminNews';
import Campus from './componentes/Campus';
import ViewLibres from './componentes/ViewLibres';
import View30 from './componentes/View30';
import View36 from './componentes/View36';
import View40 from './componentes/View40';
import ViewMaxi from './componentes/ViewMaxi';
import Sinteticas from './componentes/Sinteticas';
import EsquiuDay from './componentes/EsquiuDay';
import FormAddPlayer from './componentes/FormAddPlayer';
import Login from './componentes/Login';
import LoginTeam from './componentes/LoginTeam';
import Novedades from './componentes/Novedades';
import NovedadesDetalle from './componentes/NovedadesDetalle';
import Protected from './componentes/Protected';
import QuienesSomos from './componentes/QuienesSomos';
import Reglamento from './componentes/Reglamento';
import Sansiones from './componentes/Sansiones';
import Users from './componentes/Users';
import FormUpdatePlayer from './componentes/FormUpdatePlayer';


function App() {

  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/torneo-libre" element={<ViewLibres/>} />
          <Route exact path="/torneo-30" element={<View30/>} />
          <Route exact path="/torneo-36" element={<View36/>} />
          <Route exact path="/torneo-40" element={<View40/>} />
          <Route exact path="/torneo-maxi" element={<ViewMaxi/>} />
          <Route exact path="/admin-fixture" element={<Protected>  <AdminFixture/>  </Protected>} />
          <Route exact path="/admin-torneo" element={<Protected>  <AdminImportTorneo/>  </Protected>} />
          <Route exact path="/admin-goles" element={<Protected>  <AdminImport/>  </Protected>} />
          <Route exact path="/admin-noticias" element={<Protected>  <AdminNews/>  </Protected>} />
          <Route exact path="/admin-resultados" element={<Protected>  <AdminResults/>  </Protected>} />
          <Route exact path="/admin-jugadores" element={<Protected>  <AdminPlayers/>  </Protected>} />
          <Route exact path="/campus" element={<Campus />} />
          <Route exact path="/sinteticas" element={<Sinteticas />} />
          <Route exact path="/esquiuday" element={<EsquiuDay />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path='/loginTeam' element={<LoginTeam />} />
          <Route exact path='/usuario' element={<Users />} />
          <Route exact path='/usuario/equipo' element={<FormAddPlayer />} />
          <Route exact path='/usuario/equipo/editar-jugador' element={<FormUpdatePlayer />} />
          <Route exact path="/novedades" element={<Novedades />} />
          <Route exact path="/novedades/:id" element={<NovedadesDetalle />} />
          <Route exact path="/quienes-somos" element={<QuienesSomos />} />
          <Route exact path="/reglamento" element={<Reglamento />} />
          <Route exact path="/sansiones" element={<Sansiones />} />
        </Routes>
      </AuthContextProvider> 
    </>
  )
}

export default App

