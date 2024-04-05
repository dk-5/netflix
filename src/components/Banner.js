import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../axios';
import request from '../request';
function Banner() {
  const [movies,setMovies]=useState([]);
  useEffect(()=>{
    async function fetchData ()
    {
      const requests=await axios.get(request.fetchNetflixoriginals);
   setMovies(
    requests.data.results[
     Math.floor(Math.random() * requests.data.results.length-1)
    ]
   );
   return requests;
    }
    fetchData();
  },[])
  console.log(movies);
  function truncate(string,n)
  {
    return string?.length>n? string.substr(0,n-1)+'...' : string;
  }
  return (
    <header className='banner' style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
    backgroundSize:"cover",
    backgroundPosition:"center center",
    }}>
       <div className='banner_contents'>
        <h1 className='title'>{movies?.title || movies?.name || movies?.original_name}</h1>
        <div className='banner_buttons'>
          <button className='banner_btn'>Play</button>
          <button className='banner_btn'>My list</button>
        </div>
        <h1 className='banner_description'>{truncate(movies?.overview,150)}</ h1>
       </div>
       <div className='banner_fadebottom' >
        </div>
       </header>
  )
}

export default Banner