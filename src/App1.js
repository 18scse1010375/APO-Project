import logo from './logo.svg';
import './App.css';
import TabBar from './components/TabBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MakeHeader from './components/MakeHeader';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import MakeCard from './components/MakeCard';
import MakeLabel  from './components/MakeLabel';
import Login from './components/Login';
import { userStore } from './store/UserStore';
import { useEffect } from 'react';
import { setEnv } from 'configs';
import { adobeIms } from './services/AdobeIms';

function App1() {

    useEffect(() => {
        if (!userStore.isImsInit) {
          adobeIms.initialize();
          userStore.setImsInit(true);
        }
      }, [userStore.isImsInit]);
    
      useEffect(() => {
        fetch("/env")
        .then(async res => setEnv(await res.json()));
      })
  return (
    <div>
 <Router>

  <Routes>
  <Route exact path='/' element={ <Login/>} >  </Route> 
  </Routes>

      {/* <Header/> */}

      <Routes>
         <Route exact path='/home' element={  < MakeCard />}></Route> 
         <Route exact path='/email-suppresion' element={< MakeLabel/>}>  </Route>  
         <Route exact path='/bulk-email-sent' element={< MakeHeader/>}>  </Route>
        
         
          </Routes>
     </Router>  

    </div>
  );
}

export default App1;