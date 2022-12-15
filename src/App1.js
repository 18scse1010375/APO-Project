import './App.css';
import TabBar from './components/TabBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MakeHeader from './components/MakeHeader';
import {BrowserRouter as Router,Routes,Navigate, Route} from 'react-router-dom'
import MakeCard from './components/MakeCard';
import MakeLabel  from './components/MakeLabel';
import Login from './components/Login';
import {useEffect,useState} from 'react';
import { userStore } from './store/UserStore';  



import { setEnv } from 'configs';
import { adobeIms } from './services/AdobeIms';
import { Header } from 'Header';


function App1() {
  const [isLogin, setIsLogin] = useState(false);

 
  


  // const navigate=useNavigate();

    useEffect(() => {
        if (!userStore.isImsInit) {
          adobeIms.initialize();
          userStore.setImsInit(true);
        }

        console.log("adobeims" ,  adobeIms  )
        console.log("adobeIms.signIn()"  ,     adobeIms.isSignedInUser()    )

        if (adobeIms.isSignedInUser()) {
          // updateUserProfile();
         
          console.log("adobeims" ,  adobeIms  )  
          setIsLogin(true)
          

          
          
          
        }




      }, [userStore.isImsInit]);
    
      useEffect(() => {
        fetch("/env")
        .then(async res => setEnv(await res.json()));
      })
  return (
    <div> 
      <div className='text-center'>
    <Header store = {userStore}></Header>
    </div>


 <Router>



  <Routes>
 
  <Route exact path='/' element={ <Login/>} >  </Route>  

 



  
  <Route exact path='/logout' element={ <Login/>} >  </Route>
  </Routes>

      

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