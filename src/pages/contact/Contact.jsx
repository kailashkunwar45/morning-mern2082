import React from 'react'

export default function Contact() {

  return (
    <div className='px-7'>
      <h1 className='text-4xl py-7 ' style={{ letterSpacing: "7px" }}>Contact</h1>

      <p className='top-8 '>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>

      <h3 className=' text-red-950 py-4 text-xl'>Catering Service, 42nd Living St, 43043 New York, NY</h3>

      <p className='py-5'>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>

      <div className='py-5'>
        <input type="text"
          placeholder='Enter Your Full Name'
          className='border-transparent hover:border-black  border-2 rounded-md p-2 transition duration-200  '
        />
        <br />
        <input type="number"
          placeholder='How many People'
          className='border-transparent hover:border-black  border-2 rounded-md p-2 transition duration-200 ' />

        <input
          type="time"
          className="border-transparent hover:border-black border-2 rounded-md p-2 transition duration-200"
        />


        <input type="text"
          placeholder='Message \ Special Requirements'
          className='border-transparent hover:border-black  border-2 rounded-md p-2 transition duration-200 w-[257px] ' />
        <br />

        <button className='bg-white px-2 py-2 border hover:bg-gray-400'>Click To Send</button>

      </div>

      <footer className=' flex justify-center items-center bg-gray-400 rounded-md h-[100px]  p7-5 '>
        Powered by w3.css



      </footer>


    </div>

  )
}




