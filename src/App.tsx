import { Header } from 'Header';
import './App.css';
// import { adobeIms, logout } from './services/AdobeIms';
// import { userStore } from './store/UserStore';
// import { useEffect } from 'react';
// import { setEnv } from 'configs';

// const signIn = ()=> {
//   adobeIms.signIn();
// }

// const signOut = () => {
//   logout();
// }

function App() {

  // useEffect(() => {
  //   if (!userStore.isImsInit) {
  //     adobeIms.initialize();
  //     userStore.setImsInit(true);
  //   }
  // }, [userStore.isImsInit]);

  // useEffect(() => {
  //   fetch("/env")
  //   .then(async res => setEnv(await res.json()));
  // })

  return (
    <div className="App">
      <Header store = {userStore}></Header>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={signIn}>Sign in</button>
        <button onClick={signOut}>Sign out</button>
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
