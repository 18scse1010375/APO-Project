import logo from './logo.svg';
import './App.css';
import TabBar from './components/TabBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MakeHeader from './components/MakeHeader';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import MakeCard from './components/MakeCard';
import MakeLabel  from './components/MakeLabel';
import Login from './components/Login';

function App1() {
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