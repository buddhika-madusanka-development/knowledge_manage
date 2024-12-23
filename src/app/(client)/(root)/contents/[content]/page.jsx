import getUrlPathname from "@/lib/getUrlPathname";
import React from "react";

const page = async ({params}) => {

  const id = (await params).content;
  console.log(id)

  const contentRes = await fetch(`http://localhost:3000/api/content/${id}`);
  let content = null;

  if(contentRes.ok){
    content = await contentRes.json();
  }

  console.log(content?.contentTitle);
  
  return (
    <div className="w-full flex flex-col gap-y-5 md:flex-row md:gap-x-8 mt-10">
      {/* video section */}
      <div className="w-full md:w-2/3">
        <iframe
          src="https://www.youtube.com/embed/Hej48pi_lOc?si=E9aTOa_VOQyvP_lf"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full aspect-video rounded-2xl"
        ></iframe>
      </div>

      {/* content section */}
      <div className="w-full md:w-1/3">
        <h1 className="text-2xl font-bold">{content?.contentTitle}</h1>
        <p className="text-sm">{content?.contentDescription}</p>
      </div>
    </div>
  );
};

export default page;


