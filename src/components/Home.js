import React from 'react'
import Main from './Main'
import Row from './Row'
import requests from '../Request'

const Home = () => {
  return (
    <div>
        <Main/>
        <Row rowID='1' title='Upcoming' fetchURL={requests.requestTopRated}/>
        <Row rowID='2' title='Popular' fetchURL={requests.requestPopular}/>
        <Row rowID='4' title='Trending' fetchURL={requests.requestUpcoming}/>
        <Row rowID='3' title='Top Rated' fetchURL={requests.requestNowPlaying}/>
        
    </div>
  )
}

export default Home