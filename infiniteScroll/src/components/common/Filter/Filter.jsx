import React from "react";

function Filter({ setPostsPerScroll }) {
  return (
    <div className="w-full flex justify-center mb-4">
      <input
        type="number"
        placeholder="Posts per scroll"
        
        onChange={(e) => setPostsPerScroll(Number(e.target.value) || 10)}
        className="p-2 w-[300px] border rounded-lg text-white"
      />
    </div>
  );
}

export default Filter;
