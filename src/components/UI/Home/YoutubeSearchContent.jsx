import HighliteTitle from '@/components/common/Titles/HighliteTitle'
import YoutubeContentCard from '@/components/layouts/YoutubeContentCard/YoutubeContentCard';
import YoutubeChannelSection from "@/components/UI/Home/YoutubeChannelSection";
import YoutubeContentSection from "@/components/UI/Home/YoutubeContentSection";
import React from 'react'

const YoutubeSearchContent = async ({query}) => {

  let contents = [];
  let availability = false;

  const res = await fetch(`http://localhost:3000/api/search/?query=${query}`);

  if(res.ok){
    contents = await res.json();
    availability = true;
  }
  
  return (
    <>
      {
        availability ? (
          <>
            <HighliteTitle title={'Search results'} hightliteText={query} />
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5'>
              {
                contents.map((content) => (
                  <YoutubeContentCard key={content?._id} content={content} />
                ))
              }
            </div>
          </>
        ):(
          <>

            <div className="error-message w-full flex justify-center items-center bg-red-600/10 h-16 rounded-lg border-[1px] border-red-500/20">
              <p>There is no valid content related to search..</p>
            </div>
            
            <div className="youtube-channel-section mt-8">
              {/* youtube channel section */}
              <YoutubeChannelSection />
            </div>

            <div className="youtube-content-section mt-16">
              {/* youtube content section */}
              <YoutubeContentSection />
            </div><div className="youtube-channel-section">
              {/* youtube channel section */}
              <YoutubeChannelSection />
            </div>

            <div className="youtube-content-section mt-16">
              {/* youtube content section */}
              <YoutubeContentSection />
            </div>
          </>
        )
      }
    </>
  )
}

export default YoutubeSearchContent