import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MakeHeader from './components/MakeHeader';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MakeCard from './components/MakeCard';
import MakeLabel from './components/MakeLabel';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import { userStore } from './store/UserStore';
import { setEnv } from 'configs';
import { adobeIms } from './services/AdobeIms';
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
    <h1>Welcome to the UI page Arun</h1>
    <h2>This is just the Testing Line for UI Handling</h2>
    <div>
      <Router>
        <Routes>
          <Route exact path='/home' element={< MakeCard />}></Route>
          <Route exact path='/email-suppresion' element={< MakeLabel />}>  </Route>
          <Route exact path='/bulk-email-sent' element={< MakeHeader />}>  </Route>
          <Route exact path='/' element={<Login />} >  </Route>
          <Route exact path='/logout' element={<Login />} >  </Route>

        </Routes>
      </Router>

    </div>
    </>
  );
}

export default App;