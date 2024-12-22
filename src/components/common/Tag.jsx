import Link from 'next/link'
import React from 'react'

const Tag = ({tag}) => {
  
  return (

    tag&& (
      <Link href={`/content/tag/${tag}`} className='text-mute text-[12px] bg-base px-3 py-1 border-[1px] border-accent rounded-lg'>{tag}</Link>
    )
  )
}

export default Tag