import Tag from "@/components/common/Tag";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const YoutubeContentCard = ({ content }) => {

  console.log(content);
   
  return (
    content?.contentLink &&
    content?.contentTitle && (
      <div className="youtube-content-card bg-mute px-5 py-5 rounded-2xl">

        <div className="relative">
            <iframe
            src= {content?.contentLink}
            title="YouTube video player"
            referrerPolicy="strict-origin-when-cross-origin"
            className="aspect-video w-full"
            ></iframe>
            <div className="bg-transparent w-full aspect-video absolute top-0 left-0"></div>
        </div>

        <Link href={`/contents/${content?.contentId}`}>
          <div className="content-details mt-5">
            <Link href={`/contents/${content?.contentId}`}>
              <h1 className="font-bold line-clamp-2">{content?.contentTitle}</h1>
            </Link>
            <p className="text-sm text-mute line-clamp-3 mt-2">
              {content?.contentAdditionalNotes}
            </p>
          </div>
        </Link>

        <div className="tag-section relative mt-5 flex gap-2 line-clamp-1">
          {content?.Tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      </div>
    )
  );
};

export default YoutubeContentCard;
