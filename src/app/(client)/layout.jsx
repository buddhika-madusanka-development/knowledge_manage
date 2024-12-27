import Footer from '@/components/layouts/Footer/Footer'
import Header from '@/components/layouts/Header/Header'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='min-h-screen flex flex-col'>

        {/* Import header */}
        <Header />
        
        <div className='w-11/12 mx-auto'>
          {/* render children components */}
          {children}
        </div>

        <div className='mt-auto'>
            {/* Import footer */}
            <Footer />
        </div>
        
    </div>
  )
}

export default layout