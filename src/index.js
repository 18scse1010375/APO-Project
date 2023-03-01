import React from 'react';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';

import Login from 'components/Login';
import MakeHeader from './components/MakeHeader';
import {BrowserRouter as Router} from 'react-router-dom'
import MakeCard from './components/MakeCard';


import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom/client";

import { TestAxios } from 'components/TestAxios';
import ApiDemo from 'components/ApiDemo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
    <App/>
     </Router>
    
);
