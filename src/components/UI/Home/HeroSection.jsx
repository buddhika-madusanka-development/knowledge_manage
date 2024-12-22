import MainTitle from '@/components/common/Titles/MainTitle'
import SearchBar from '@/components/layouts/SearchBar/SearchBar'
import Image from 'next/image'
import React from 'react'
import TagSection from './TagSection'

const HeroSection = () => {
  return (
    <div className='w-full h-[600px] flex justify-center items-center aspect-video'>
        <div className="background-glow opacity-10 z-0"></div>
        <div className='w-3/5 mx-auto flex flex-col gap-y-4 items-center z-10'>
            <MainTitle title="Knowledge can do what you can't think you can happen in life" />

            <div className="search-bar mt-5 w-full">
                {/* search bar option */}
                <SearchBar />
            </div>

            <div className="tag-section">
                {/* tag option */}
                <TagSection />
            </div>
        </div>
    </div>
  )
}

export default HeroSection