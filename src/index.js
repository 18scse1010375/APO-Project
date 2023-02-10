import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';

import Login from 'components/Login';
import MakeHeader from './components/MakeHeader';
import {BrowserRouter as Router} from 'react-router-dom'
import MakeCard from './components/MakeCard';

import { Demo5 } from 'components/Demo5';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
    <Demo5/>
     </Router>
    
);

