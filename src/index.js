import React from 'react';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';

import Login from 'components/Login';
import MakeHeader from './components/MakeHeader';
import {BrowserRouter as Router} from 'react-router-dom'
import MakeCard from './components/MakeCard';

import { Demo5 } from 'components/Demo5';

import { createRoot } from 'react-dom/client';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <Router>
//     <App/>
//      </Router>
    
// );

// import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);

root.render(
        <Router>
        <App/>
         </Router>
        
    );

