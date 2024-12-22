import HighliteTitle from '@/components/common/Titles/HighliteTitle'
import YoutubeChannelCard from '@/components/layouts/YoutubeChannelCard/YoutubeChannelCard';
import React from 'react'

const YoutubeChannelSection = async () => {

    let channels = [];

    const res = await fetch('http://localhost:3000/api/channel');
    if(res.ok){
        channels = await res.json();
    }

    channels = channels.slice(0, 6);

  return (
    <div>
        <HighliteTitle title={'Favorite'} hightliteText={'Youtube Channels'} />

        <div className="channel-section grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-5">
            {
                channels.map((channel) => (
                    <YoutubeChannelCard channel={channel} key={channel?._id} />
                ))
            }
        </div>
        
    </div>
  )
}

export default YoutubeChannelSection