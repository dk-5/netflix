import React from 'react'
import "./Planscreen.css"
function Planscreen({title,screen}) {
  return (
    <div className='Planscreen'>
      <div className='plan'>
      <div className='infos'>
             <div><h5>{title}</h5></div> 
             <div><h6>{screen}</h6></div> 
              
              </div>
              <button className='subscribe'>Subscribe</button>
      </div>
        
    </div>
  )
}

export default Planscreen