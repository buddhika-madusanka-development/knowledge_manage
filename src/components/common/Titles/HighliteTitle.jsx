import React from 'react'

const HighliteTitle = ({title, hightliteText}) => {
  return (

    title && hightliteText && (
        <div>
            <h1 className='text-xl md:text-3xl font-bold'>{title}<span className='text-primary'> {hightliteText}</span></h1>
        </div>
    )
  )
}

export default HighliteTitle