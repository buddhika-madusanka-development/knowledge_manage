import YoutubeContentCard from '@/components/layouts/YoutubeContentCard/YoutubeContentCard';
import React from 'react'

const page = async () => {

  let contents = null;
  const res =  await fetch('http://localhost:3000/api/content');

  if(res.ok) {
    contents = await res.json();
  }
  
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-5'>
      {
        contents.map((content) => (
          <YoutubeContentCard key={content?._id} content={content} />
        ))
      }
    </div>
  )
}

export default page