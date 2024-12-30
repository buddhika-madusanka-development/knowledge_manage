import ContentNotFoundError from '@/components/common/ContentNotFoundError';
import YoutubeChannelCard from '@/components/layouts/YoutubeChannelCard/YoutubeChannelCard';
import React from 'react'

export const dynamic = 'force-dynamic'

const page = async () => {

  let changels = null;
  let avaliability = false;
  try {
    const res = await fetch('http://localhost:3000/api/channel');
    if(res.ok){
      changels = await res.json();
      console.log(changels);
  
      if(changels.length > 0) avaliability = true;
  
    }
  }
  catch(err) {
    console.log(err);
  }

  
  return (

    avaliability ? (
      <div className=' grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-5 md:mt-10'>
        {
          changels.map((channel) => (
            <YoutubeChannelCard channel={channel} key={channel?._id} />
          ))
        }
      </div>

    ) : (
      <div className='mt-5'>
        <ContentNotFoundError />
      </div>
    )
  )
}

export default page