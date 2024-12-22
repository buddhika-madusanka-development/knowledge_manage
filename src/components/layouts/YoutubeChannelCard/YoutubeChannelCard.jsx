import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const YoutubeChannelCard = ({channel}) => {
    
  return (

    channel?.channelName && channel?.channelLink && (
        <Link href={channel?.channelLink} target='_blank' className='channel-card flex flex-col items-center gap-y-2 text-center bg-mute px-7 py-7 rounded-3xl'>
            <Image 
                src={channel?.channelImage}
                width={70}
                height={70}
                alt={channel?.channelName}
                className='rounded-full'
            />
            <h3 className='font-semibold text-lg line-clamp-2'>{channel?.channelName}</h3>
            <p className='text-sm text-mute line-clamp-2'>{channel?.channelDescrition}</p>
        </Link>
    )
    
  )
}

export default YoutubeChannelCard