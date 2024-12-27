import Form from 'next/form'
import { Input } from 'postcss'
import React from 'react'

const SearchBar = ({query}) => {
  return (
    <Form className='w-4/5 mx-auto flex'>
      <input 
        name='query'
        defaultValue={query}
        placeholder='What you need to know about ?'
        className='bg-mute h-12 px-5 w-4/5 rounded-l-lg border-[1px] border-accent text-mute focus:outline-none'
      />
      <button type='submit' className='w-1/4 bg-accent rounded-r-lg'>Search</button>
    </Form>
  )
}

export default SearchBar