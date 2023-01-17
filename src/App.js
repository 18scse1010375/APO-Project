import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from './components/About';
import { Error } from './components/Error';
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MakeCard />}>
          <Route index element={<About />} />
          <Route path="email-suppresion" element={<MakeLabel />} />
          <Route path="bulk-email-sent" element={<MakeHeader />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;