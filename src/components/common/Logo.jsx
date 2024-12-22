import Link from 'next/link'
import React from 'react'

export const Logo = () => {
  return (
    <Link href="/">
        <h1 className='font-bold text-2xl'>Manage<span className='text-primary'>KNOWLEDGE</span></h1>
    </Link>
  )
}
