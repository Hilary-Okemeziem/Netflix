import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import requests from '../Request'

const Main = () => {
    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
      axios.get(requests.requestPopular).then((response) => {
        setMovies(response.data.results);
      });
    }, []);
    // console.log(movie);

    // const truncateString = (str, num) => {
    //   if (str?.length > num) {
    //     return str.slice(0, num) + '...';
    //   } else{
    //     return str
    //   }
    // }
    


  return (
    <div className='w-full h-[600px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
        <img className='w-full h-full object-cover object-center' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />

        <div className='absolute w-full top-[20%] p-4 md:p-8'>
          <h1 className='text-4xl font-bold md:text-6xl'>{movie?.title}</h1>
          <div className='my-5'>
            <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
            <button className='border text-white ml-4 border-gray-300 py-2 px-5'>Watch Later</button>
          </div>
          <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
          <p className='w-full my-3 md:max-w-[70%] lg:max-w-[60%] xl:max-w-[40%] text-gray-200'>{movie?.overview}
            {/* {truncateString(movie?.overview, 150)} */}
            </p>
        </div>
        
      </div>
    </div>
  )
}

export default Main