// import { useEffect, useState } from 'react'
// import './App.css'
// import { fetchCurrencies } from './api/currency/fetchCurrencies';
// import Post from './components/posts/Post';
// import Pagination from './components/pagination/Pagination';

// function App() {
//   const [currentPage,setCurrentPage]=useState(1);
//   const [coinsData,setCoinsData]=useState([]);
//   const postsPerPage=10;
  
//   useEffect(() => {
//     const getData = async () => {
//       const data = await fetchCurrencies();
//       setCoinsData(data);
//     };
  
//     getData();
//   }, []);

//   let lastIndex=currentPage * postsPerPage;
  
//   let firstIndex=Math.abs(lastIndex-postsPerPage);

//   let perPageCoins=coinsData.slice(firstIndex,lastIndex);


//   return (
//  <main className="flex flex-col w-full min-h-[90vh] justify-between items-center p-4">
  
//     {coinsData.length === 0 ? (
//       <p className="text-center text-gray-500 text-lg">Fetching data...</p>
//     ) : (
//       perPageCoins.map((coinData) => <Post key={coinData.name} data={coinData} />)
//     )}


//   {coinsData.length > 0 && (
//     <Pagination
//       postsPerPage={postsPerPage}
//       totalPosts={coinsData.length}
//       currentPage={currentPage}
//       setCurrentPage={setCurrentPage}
//     />
//   )}
// </main>

//   )
// }

// export default App


import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCurrencies } from "./api/currency/fetchCurrencies";
import Post from "./components/posts/Post";
import Pagination from "./components/pagination/Pagination";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // Fetch data using React Query
  const { data: coinsData = [], isLoading, isError } = useQuery({
    queryKey: ["currencies"],
    queryFn: fetchCurrencies,
  });

  // Calculate indices for pagination
  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const perPageCoins = coinsData.slice(firstIndex, lastIndex);

  if (isLoading) return <p className="text-center text-gray-500">Fetching...</p>;
  if (isError) return <p className="text-center text-red-500">Error loading data!</p>;

  return (
    <main className="flex flex-col w-full min-h-[90vh] justify-between items-center p-4">
     
        {perPageCoins.map((coinData) => (
          <Post key={coinData.name} data={coinData} />
        ))}
    

      {coinsData.length > 0 && (
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={coinsData.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </main>
  );
}

export default App;

