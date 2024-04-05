
import './App.css';

import Homescreen from './screens/Homescreen';
import {
  BrowserRouter as Router,
  
  Route,

  Routes
} from "react-router-dom";
import Loginscreen from './screens/Loginscreen';
import Profilescreen from './screens/Profilescreen';
import { useEffect } from 'react';
import { auth } from './firebase';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {login,logout, selectUser} from './components/features/userSlice'

function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(()=>{
 const unsubscribe=auth.onAuthStateChanged((userauth)=>{
  if(userauth)
  {
    dispatch(login({
    uid:userauth.uid,
    email:userauth.email,

    }
    )
    );

  }
  else 
  {
    dispatch(logout());
  }
 })
 return unsubscribe;
  },[])
  return (
 <div className='App'>

<Router>
      {!user ? (
        <Loginscreen />
      ) : (
        <Routes>
          
          <Route path='/' element={<Homescreen />} />

          <Route path='/profile' element={<Profilescreen />} />
          
   
  </Routes>
    

      )}

    </Router>
 </div>
  );
}

export default App;
