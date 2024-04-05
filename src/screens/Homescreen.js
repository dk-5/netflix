import React from 'react';
import "./homescreen.css";
import Nav from '../components/Nav';
import Banner from '../components/Banner'
import request from '../request';
import Row from '../components/Row'

function Homescreen() {
  return (
    <div className='Homescreen'>
      <Nav />
      <Banner />
      <Row title='NETFLIX ORIGINALS' fetchUrl={request.fetchNetflixoriginals} isLargerow />
      <Row title='TRENDING' fetchUrl={request.fetchNetflixoriginals}  />
      <Row title='TOP RATED' fetchUrl={request.fetchToprated}  />
      <Row title='ACTION MOVIES' fetchUrl={request.fetchActionmovies}  />
    </div>
  )
}

export default Homescreen;
