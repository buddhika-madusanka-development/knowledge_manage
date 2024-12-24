import HighliteTitle from '@/components/common/Titles/HighliteTitle'
import YoutubeContentCard from '@/components/layouts/YoutubeContentCard/YoutubeContentCard';
import React from 'react'

const YoutubeContentSection = async () => {

    let contents = [];
    const res = await fetch('http://localhost:3000/api/content');
    if(res.ok){
        contents = await res.json();
        contents = contents.slice(0,12);
    }
    
  return (
    <div>
        <HighliteTitle title={'Recent'} hightliteText={'Youtube Contents'} />

        {/* content section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-5'>
            {
                contents.map((content) => (
                    <YoutubeContentCard content={content} key={content?._id} />
                ))
            }
        </div>
        
    </div>
  )
}

export default YoutubeContentSection