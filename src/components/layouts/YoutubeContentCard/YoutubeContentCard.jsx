import Tag from '@/components/common/Tag'
import Link from 'next/link'
import React from 'react'

const YoutubeContentCard = ({content}) => {
    
  return (

    content?.contentLink && content?.contentTitle && (        
        <div className='youtube-content-card bg-mute px-5 py-5 rounded-2xl'>
            <iframe src={content?.contentLink} className='w-full aspect-video'></iframe>

            <div className="content-details mt-5">
                <Link href={`/content/${content?.contentId}`}><h1 className='font-bold line-clamp-2'>{content?.contentTitle}</h1></Link>
                <p className='text-sm text-mute line-clamp-3 mt-2'>{content?.contentDescription}</p>
            </div>

            <div className="tag-section relative mt-5 flex gap-2 line-clamp-1">
                {
                    content?.Tags.map((tag) => (
                        <Tag key={tag} tag={tag} />
                    ))
                }
            </div>
            
        </div>
    )
  )
}

export default YoutubeContentCard