import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Header from './component/Header';
import SideBar from './component/SideBar';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './component/Feed';
import Login from './component/Login';
import { auth } from './component/firebase';

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
      //user logged in sucessfully
       dispatch(login({
        email: userAuth.email,
        uid: userAuth.uid,
        displayName: userAuth.displayName,
        photoPic: userAuth.photoURL,
       }))
      }else{
        // user logged out
       dispatch(logout)
      }
    })
  },[]);
  

  return (
    <div className="app">
   
    {/* Header */}
     <Header />

     {!user ? (<Login />)
     :(
  <div className='app__body'>
  <SideBar />
    <Feed />

  </div>

     )
     }

</div>
  );
}

export default App;
