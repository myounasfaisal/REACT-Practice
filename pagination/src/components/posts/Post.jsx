import React from "react";

const Post = ({ data }) => {
  if (!data) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-lg border border-gray-200 flex items-center space-x-4 mb-4">
      <img src={data.image} alt={data.name} className="w-16 h-16 rounded-full border border-gray-300" />
      <div>
        <h2 className="text-xl font-bold text-gray-900">{data.name}</h2>
        <p className="text-lg font-semibold text-green-600">${data.current_price.toLocaleString()}</p>
        <p className="text-gray-500 text-sm">Last Updated: {new Date(data.last_updated).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Post;
