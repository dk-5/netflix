import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import "./Nav.css";

function Nav() {
    const [show,handleshow]=useState(false)
   const navigate=useNavigate();
    const transnavbar=()=>{
        if(window.scrollY>100)
        {
            handleshow(true);
        }
        else 
        {
            handleshow(false);
        }
    }
    useEffect(() => {
      
    window.addEventListener("scroll",transnavbar);
      return () => {
    window.removeEventListener("scroll",transnavbar);
      }
    }, [])
    
  return (
    <div className={`Nav  ${show && "nav_black"}`}>
        <div className='nav_contents'>
         <img className='logo' src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' alt='' onClick={()=>{navigate('/')}}/>
         <img className='avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='' onClick={()=>{navigate('/profile')}} />
        </div>


        
    </div>
  )
}

export default Nav
