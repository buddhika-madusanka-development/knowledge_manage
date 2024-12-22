import React from 'react'

const MainTitle = ({title}) => {
  return (

    title && (
        <div>
            <h1 className='text-3xl md:text-5xl font-bold text-center'>{title}</h1>
        </div>
    )
  )
}

export default MainTitle