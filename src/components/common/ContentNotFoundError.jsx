import React from "react";

const ContentNotFoundError = ({conent = "Still valid documents are not found..."}) => {
  return (
    <div className="error-message w-full flex justify-center items-center bg-red-600/10 h-16 rounded-lg border-[1px] border-red-500/20">
      <p>{conent}</p>
    </div>
  );
};

export default ContentNotFoundError;
