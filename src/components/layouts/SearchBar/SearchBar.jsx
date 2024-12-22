"use client"

import React from 'react'

const SearchBar = () => {
  return (
    <div className='w-full flex'>
        <input type="text" placeholder='Search for content' className='w-full h-12 px-4 rounded-lg rounded-r-none focus:outline-none text-mute bg-mute border-[1px] border-accent' />
        <button className='bg-accent text-white px-8 py-2 rounded-lg rounded-l-none'>Search</button>
    </div>
  )
}

export default SearchBar