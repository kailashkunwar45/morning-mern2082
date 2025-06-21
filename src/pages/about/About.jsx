import React from 'react'

export default function About() {
  return (
    <div className=' grid grid-cols-2  justify-center'>

      <img src="https://www.w3schools.com/w3images/tablesetting2.jpg" alt=""
        className='py-6 h-screen ' />

      <div>
        <h1 className='text-4xl flex justify-center  items-center py-7 tracking-[15px]'
        >About Catering </h1>

        <p className='py-9 px-3 text-2xl flex justify-center items-center tracking-[10px]'
        >Tradtion since 1889</p>

        <p className='py-6 px-8'>
          The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.

        </p>

        <p className='py-5 text-gray-400 px-8'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      </div>
    </div>
  )
}

