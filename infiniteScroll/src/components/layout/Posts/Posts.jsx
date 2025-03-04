import React, { useRef, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCurrencies } from "../../../api/currency/fetchCurrencies";
import Post from "../../common/post/Post";

function Posts() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["currencies"],
    queryFn: fetchCurrencies,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.length > 0 ? allPages.length + 1 : undefined,
    keepPreviousData: true, 
    staleTime: Infinity,
  });

  const bottomRef = useRef();

  useEffect(() => {
    if (!bottomRef.current || !hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log("entries:", entries[0]);
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    observer.observe(bottomRef.current);

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]); 

  if (isLoading) return <p className="text-center text-gray-500">Fetching...</p>;
  if (isError) return <p className="text-center text-red-500">Error loading data!</p>;

  return (
    <main className="bg-black w-full h-full p-4">
      {data?.pages?.flatMap((page) =>
        page?.map((coinData) => <Post key={coinData.id} data={coinData} />)
      )}

      {isFetchingNextPage && (
        <p className="text-center text-blue-400">Loading more...</p>
      )}

      <div ref={bottomRef} className="h-10"></div>
    </main>
  );
}

export default Posts;
