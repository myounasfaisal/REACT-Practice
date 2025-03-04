import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCurrencies } from "../../../api/currency/fetchCurrencies";
import Post from "../../common/post/Post";
import Pagination from "../../common/pagination/Pagination";
import Filter from "../../common/Filter/Filter"; // Import Filter Component

function Posts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  const { data: coinsData = [], isLoading, isError } = useQuery({
    queryKey: ["currencies"],
    queryFn: fetchCurrencies,
  });

  const filteredCoins = coinsData.filter((coin) =>
    coin.name.toLowerCase().includes(searchQuery)
  );

  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const perPageCoins = filteredCoins.slice(firstIndex, lastIndex);

  if (isLoading) return <p className="text-center text-gray-500">Fetching...</p>;
  if (isError) return <p className="text-center text-red-500">Error loading data!</p>;

  return (
    <main className="flex flex-col w-full h-full justify-between items-center p-4">
      <Filter setSearchQuery={setSearchQuery} setPostsPerPage={setPostsPerPage} />

      {perPageCoins.map((coinData) => (
        <Post key={coinData.name} data={coinData} />
      ))}

      {filteredCoins.length > 0 && (
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={filteredCoins.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </main>
  );
}

export default Posts;
