import axios from '../axios';
import React,{useState,useEffect} from 'react';
import './Row.css'

const base_url="https://image.tmdb.org/t/p/original/"
function Row({title,fetchUrl,isLargerow=false}) {
    const [movies,setMovies]=useState([]);
    
    useEffect(()=>{
      async function fetchData ()
      {
        const requests=await axios.get(fetchUrl);
        setMovies(requests.data.results)
        return requests;
  
      }
      fetchData();
    },[fetchUrl])  //[] keeping this empty so my row loads only once if movies was present inside then it would reload   when movies state changes 
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row_posters'>
      {movies.map((movie) => (<img className=
      {`row__poster ${isLargerow && "row_posterLarge"}`} 
      src={`${base_url}${isLargerow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />))
      }
        </div> 
      
    </div>
  )
}

export default Row
