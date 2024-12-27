import ContentNotFoundError from '@/components/common/ContentNotFoundError';
import HighliteTitle from '@/components/common/Titles/HighliteTitle'
import YoutubeChannelSkeleton from '@/components/layouts/Skeletons/YoutubeChannelSkeleton';
import YoutubeChannelCard from '@/components/layouts/YoutubeChannelCard/YoutubeChannelCard';
import React from 'react'

const YoutubeChannelSection = async () => {

    let channels = [];
    let availability = false;
    let isLoading = true;

    const res = await fetch('http://localhost:3000/api/channel');
    if(res.ok){
        channels = await res.json();
        isLoading = false;

        if(!channels.length == 0) {
            channels = channels.slice(0,6);
            availability = true;
        }
        
    }


  return (

    isLoading ? (
        <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-5'>
            <YoutubeChannelSkeleton />
        </div>
    ) : (
        <div>
            <HighliteTitle title={'Favorite'} hightliteText={'Youtube Channels'} />

            {
                availability ? (
                    <div className="channel-section grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-5">
                        {
                            channels.map((channel) => (
                                <YoutubeChannelCard channel={channel} key={channel?._id} />
                            ))
                        }
                    </div>

                ) : (
                    <div className='mt-5'>
                       <ContentNotFoundError />
                    </div>
                )
            }

            
        </div>
    )
    
  )
}

export default YoutubeChannelSection