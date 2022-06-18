import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import Inicio from './pages/inicio/Inicio';
import Juegayaprende from './pages/juegayaprende/Juegayaprende';
import Kitfem from './pages/kitfem/Kitfem';
import Oportunidades from './pages/oportunidades/Oportunidades';
import Asociados from './pages/redes/asociados/Asociados';
import Lineas from './pages/redes/lineas/Lineas';
import Error404 from './pages/error404/Error404';
import Jovenes1 from './pages/juegayaprende/jovenes/jovenes1/Jovenes1';
import Jovenes2 from './pages/juegayaprende/jovenes/jovenes2/Jovenes2';
import Jovenes3 from './pages/juegayaprende/jovenes/jovenes3/Jovenes3';
import JovenesJuegos from './pages/juegayaprende/jovenes/jovenes_juegos/JovenesJuegos';
import Form from './pages/formulario/form';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormAsociado from './pages/form-asocia/FormAsociado';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      {/* Nombres temporales a las rutas */}
      <Route path='/react-redvindicadas/' element={<Home/>}></Route>
      <Route path='/react-redvindicadas/inicio' element={<Inicio/>}></Route>
      <Route path='/react-redvindicadas/juega-aprende' element={<Juegayaprende/>}></Route>
      <Route path='/react-redvindicadas/kit-fem' element={<Kitfem/>}></Route>
      <Route path='/react-redvindicadas/oportunidades' element={<Oportunidades/>}></Route>
      <Route path='/react-redvindicadas/asociados' element={<Asociados/>}></Route>
      <Route path='/react-redvindicadas/lineas' element={<Lineas/>}></Route>
      <Route path='*' element={<Error404/>}></Route>
      <Route path='/react-redvindicadas/home' element={<Navigate replace to={'/'}/>}></Route>
      {/* Rutas internas de juega y aprende jóvenes */}
      <Route path='/react-redvindicadas/juega-aprende/jovenes1' element={<Jovenes1/>}></Route>
      <Route path='/react-redvindicadas/juega-aprende/jovenes2' element={<Jovenes2/>}></Route>
      <Route path='/react-redvindicadas/juega-aprende/jovenes3' element={<Jovenes3/>}></Route>
      <Route path='/react-redvindicadas/juega-aprende/jovenes-juegos' element={<JovenesJuegos/>}></Route>   
      {/* Rutas de ejercicio formulario */}     
      <Route path='/react-redvindicadas/formulario' element={<Form/>}></Route>
      {/* Rutas de ejercicio nuevo formulario */}  
      <Route path='/react-redvindicadas/formulario-asociados' element={<FormAsociado/>}></Route>   
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);