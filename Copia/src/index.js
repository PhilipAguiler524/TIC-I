import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';

import MyApp from './Aplicacion';
import Registro from './Pages/Registro';
import MainPage from './Pages/Principal';
import Ingreso from './Pages/Ingreso';
import Config from './Pages/Config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Registro />
);
