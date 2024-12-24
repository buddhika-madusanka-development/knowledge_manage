import YoutubeChannelCard from '@/components/layouts/YoutubeChannelCard/YoutubeChannelCard';
import React from 'react'

const page = async () => {

  let changels = null;
  const res = await fetch('http://localhost:3000/api/channel');

  if(res.ok){
    changels = await res.json();
  }
  
  return (
    <div className=' grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-5 md:mt-10'>
      {
        changels.map((channel) => (
          <YoutubeChannelCard channel={channel} key={channel?._id} />
        ))
      }
    </div>
  )
}

export default page