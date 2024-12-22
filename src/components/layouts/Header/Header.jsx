import { Logo } from '@/components/common/Logo'
import Link from 'next/link';
import React from 'react'

import { HiMenu } from "react-icons/hi";

const Header = () => {
  return (
    <div className='min-h-20 w-11/12 mx-auto md:flex md:justify-between md:items-center'>
        <div className='flex justify-between h-20 items-center'>
          <div className="logo-section">
            <Logo />
          </div>
          <div className="ham-menu px-2 py-2 rounded-lg bg-mute md:hidden">
            <HiMenu />
          </div>
        </div>
        <div className="nav-section flex flex-col gap-y-2 md:flex-row md:items-center md:bg-mute md:h-fit md:px-10 md:py-3 md:rounded-xl md:block">
          <Link href={'/contents'} className='nav-link'>Contents</Link>
          <Link href={'/channel'} className='nav-link'>Channels</Link>
          <Link href={'/roadmap'} className='nav-link'>Road Maps</Link>
        </div>
    </div>
  )
}

export default Header