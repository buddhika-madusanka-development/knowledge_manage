import Tag from "@/components/common/Tag";
import HighliteTitle from "@/components/common/Titles/HighliteTitle";
import RelatedContentSection from "@/components/UI/SingleContent/RelatedContentSection";
import React from "react";

const page = async ({params}) => {

  const id = (await params).content;
  console.log(id)

  const contentRes = await fetch(`http://localhost:3000/api/content/${id}`);
  let content = null;

  if(contentRes.ok){
    content = await contentRes.json();
  }
  
  return (

    <div>

      {/* Content area */}
      <div className="w-full flex flex-col gap-y-5 md:flex-row md:gap-x-8 mt-10">
        {/* video section */}
        <div className="w-full md:w-2/3">
          <iframe
            src={content?.contentLink}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full aspect-video rounded-2xl"
          ></iframe>
        </div>

        {/* content section */}
        <div className="w-full md:w-1/3 md:py-10">
          <h1 className="text-2xl md:text-4xl font-bold">{content?.contentTitle}</h1>

          <div className="flex flex-wrap gap-2 mt-2 md:mt-4">
            {
              content?.Tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))
            }
          </div>
          
          <p className="text-sm text-mute mt-6">{content?.contentAdditionalNotes}</p>
        </div>
      </div>


      {/* related content section */}
      <div className="mt-16">
        <HighliteTitle title={'Related'} hightliteText={'Contents'} />
        <div className="contents">
          <RelatedContentSection tag={content?.Tags} contentId={content?.contentId}/>
        </div>
      </div>
      
    </div>
    
  );
};

export default page;


