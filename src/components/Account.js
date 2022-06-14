import React from 'react'
import SavedMovies from './SavedMovies'

const Account = () => {
  return (
    <div>
      <div className='w-full text-white'>
          <img className='w-full h-[450px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/25badb14-858b-4b1c-8b7d-2244098454d9/0d1c0164-ff93-4a66-9f94-bfb174f82637/NG-en-20220606-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
          <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'>
            <div className='absolute top-[25%] p-4 md:p-8'>
              <h1 className='text-3xl md:text-6xl font-bold'>My Movies</h1>
            </div>
          </div>
      </div>
      <SavedMovies/>
    </div>
  )
}

export default Account