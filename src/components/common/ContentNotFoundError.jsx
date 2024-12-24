import React from "react";

const ContentNotFoundError = () => {
  return (
    <div className="error-message w-full flex justify-center items-center bg-red-600/10 h-16 rounded-lg border-[1px] border-red-500/20">
      <p>There is no valid content related to search..</p>
    </div>
  );
};

export default ContentNotFoundError;
