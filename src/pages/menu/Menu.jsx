import React from 'react'

export default function Menu() {
  return (
    <div className='grid grid-cols-2 p-9 '>
      <div>
        <div className='flex justify-center items-center text-4xl py-4 tracking-[10px]'
        >Our Menu </div>

        <div className='px-5 tracking-[6px]'>
          <h1 className='py-4 '
          >Bread Basket</h1>
          <p className='text-gray-400 py-5'>Assortment of fresh baked fruit breads and muffins 5.50</p>

          <h1 className='py-4 '
          >Honey Almond Granola with Fruits</h1>
          <p className='text-gray-400 py-5'>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>

          <h1 className='py-4 '
          >Belgian Waffle</h1>
          <p className='text-gray-400 py-5'>Vanilla flavored batter with malted flour 7.50</p>

          <h1 className='py-4 '
          >Scrambled eggs</h1>
          <p className='text-gray-400 py-5'>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>

          <h1 className='py-4 '
          >Blueberry Pancakes</h1>
          <p className='text-gray-400 py-5'>With syrup, butter and lots of berries 8.50</p>
        </div>
      </div>

      <img src="https://www.w3schools.com/w3images/tablesetting.jpg" alt="" className='px-5 py-8 rounded-b-md ' />




    </div>
  )
}

