import React from 'react'
import Nav from '../components/Nav'
import "./profilescreen.css"
import Planscreen from './Planscreen'
import { auth } from '../firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../components/features/userSlice'

function Profilescreen() {
  const user=useSelector(selectUser)
  return (
    <div className='Profilescreen'>
       <Nav />
       <div className='body'>
        <h1>Edit Profile</h1>
        <div className='info'>
          <img className='avat' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt=''/>
          <div className='details'>
            <h2>{user.email}</h2>
            <div className='plans'>
              <h3>Plans</h3>
              <hr></hr>
              <Planscreen  title='Premium' screen='4K+HDR' />
              <Planscreen  title='Basic' screen='720p' />
              <Planscreen  title='Standard' screen='480p' />
              
              <button className='Signout' onClick={()=>auth.signOut()}>Sign Out</button>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Profilescreen