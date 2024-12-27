import React from 'react'

const YoutubeChannelSkeleton = () => {
  return (
    <div className='w-full h-[250px] bg-mute rounded-2xl flex justify-center items-center flex-col gap-4 animate-pulse'>
        <div className="channel-image w-14 h-14 rounded-full bg-green-900/40"></div>
        <div className="channel-name min-w-7 w-40 h-3 bg-green-900/40"></div>
        <div className='flex flex-col gap-2 '>
            <div className="intor-channel w-48 h-2 bg-green-900/40"></div>
            <div className="intro-channel w-48 h-2 bg-green-900/40"></div>
        </div>
    </div>
  )
}

export default YoutubeChannelSkeleton