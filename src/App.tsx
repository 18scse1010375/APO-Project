import { Header } from 'Header';
import './App.css';
import { adobeIms, login, updateUserProfile} from './services/AdobeIms';
import { userStore } from './store/UserStore';
import {useEffect} from 'react';

const signIn = ()=> {
  adobeIms.signIn();
}

const logout = () => {
  try {
    adobeIms.signOut();
    let profile = null;
    userStore.updateData(profile, 'token');
  } catch (e) {
    console.error('logout', e);
  }
}

function App() {

  useEffect(() => {
    if (!userStore.isImsInit) {
      adobeIms.initialize();
      userStore.setImsInit(true);
    }
  }, [userStore.isImsInit]);

  return (
    <div className="App">
      <Header store = {userStore}></Header>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={signIn}>Sign in</button>
        <button onClick={logout}>Sign out</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
