import YoutubeContentCard from '@/components/layouts/YoutubeContentCard/YoutubeContentCard';
import FilterContent from '@/lib/FilterContent';
import React from 'react'

const RelatedContentSection = async ({tag, contentId}) => {

    let searchTag = null;
    let tempContents = null;
    let contents = null;

    console.log(contentId)
    
    // check there is any tag
    if(tag.length != 0) {
        searchTag = tag[0];
    }
    else{
        searchTag = tag;
    }
    
    // extrack data from database
    const res = await fetch(`http://localhost:3000/api/tags/${searchTag}`);

    // check there is any data
    if(res.ok) {
        tempContents = await res.json();

        // check there same data comes from the page
        contents =  FilterContent(contentId, tempContents);

        if(contents.length == 0) {
            const res = await fetch(`http://localhost:3000/api/content`);

            if(res.ok) {
                tempContents = await res.json();
                contents =  FilterContent(contentId, tempContents).slice(0, 4);
            }
            
        }

    }
    
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-5'>
        {
            contents?.map((content) => (
                <YoutubeContentCard key={content?._id} content={content} />
            ))
        }
    </div>
  )
}

export default RelatedContentSection