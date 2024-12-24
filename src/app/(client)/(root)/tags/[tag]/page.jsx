import HighliteTitle from '@/components/common/Titles/HighliteTitle';
import YoutubeContentCard from '@/components/layouts/YoutubeContentCard/YoutubeContentCard';
import React from 'react'

const page = async ({params}) => {

  let isLoading = true;
  const searchTag = (await params).tag;
  let contents = null;

  const res = await fetch(`http://localhost:3000/api/tags/${searchTag}`);

  if(res.ok){
    contents = await res.json();
    isLoading = false;
  }
  
  return (
    
    <div className='mt-10'>
      {
        contents ? (
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5'>
            {
              contents.map((content) => (
                <YoutubeContentCard key={content?._id} content={content} />
              ))
            }
          </div>
        ) : (
          <p>then there no any valid content related to tag</p>
        )
      }
    </div>
  )
}

export default page