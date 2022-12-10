import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {

  const [user, setUser] = useState({});

  const handlerAddTOGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user)
      })
      .catch(error => {
        console.error('error', error)
      })
  }
  const handlerAddTOGoogleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      setUser({})
    }).catch(error => {
      setUser({})
    })
  }
  const handlerAddTOGitHubSignIn = () => {

    const githubProvider = new GithubAuthProvider();

    signInWithPopup(auth, githubProvider)
      .then(result => {
        setUser(result)
        console.log(result)
      })
      .catch(error => {
        console.error('error', error)
      })
  }
  return (
    <div className="App">
      {user.uid ?
        <>
          <button onClick={handlerAddTOGoogleSignOut}>Google Sign Out</button>
          <button onClick={handlerAddTOGoogleSignOut}>Google Sign Out</button>
        </> :
        <>
          <button onClick={handlerAddTOGitHubSignIn}>Github SignIn</button>
          <button onClick={handlerAddTOGoogleSignIn}>Google SignIn</button>
        </>

      }

      <h2>{user.displayName}</h2>
      <h3>{user.email}</h3>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
