// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MakeHeader from './components/MakeHeader';
import { BrowserRouter as Router, Routes, Route,useLocation} from 'react-router-dom'
import MakeCard from './components/MakeCard';
import MakeLabel from './components/MakeLabel';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import BulkEmail from './components/BulkEmail';
import 'react-toastify/dist/ReactToastify.css';
import Geeks from 'components/Geeks';
import { NoMatch } from './components/NoMatch';

import { setEnv } from 'configs';
import { adobeIms } from './services/AdobeIms';
import { userStore } from './store/UserStore';


export const LocationDisplay = () => {
  const location = useLocation()

  return <div data-testid="location-display">{location.pathname}</div>
}











function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (!userStore.isImsInit) {
      adobeIms.initialize();
      userStore.setImsInit(true);
    }

    if (adobeIms.isSignedInUser()) {
      setIsLogin(true)
    }

  }, [userStore.isImsInit]);

  useEffect(() => {
    fetch("/env")
      .then(async res => setEnv(await res.json()));
  })
  return (
    <>
    
      {/* <Router> */}
        <Routes>
          <Route exact path='/home' element={< MakeCard />}></Route>
          <Route exact path='/email-suppresion' element={< MakeLabel />}>  </Route>
          <Route exact path='/bulk-email-sent' element={< BulkEmail />}>  </Route>
          <Route exact path='/' element={<Login />} >  </Route>
          <Route exact path='/logout' element={<Login />} >  </Route> 
          <Route path="*" element={<NoMatch />} />

        </Routes>
      {/* </Router> */}

            <LocationDisplay/>

    </>
  );
}

export default App;
