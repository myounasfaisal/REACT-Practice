// import { useEffect, useState } from 'react'
// import './App.css'
// import { fetchCurrencies } from './api/currency/fetchCurrencies';
// import Post from './components/posts/Post';
// import Pagination from './components/pagination/Pagination';

import Home from "./pages/Home";

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


function App() {
 return(
  <>
  <Home/>
  </>
 )
}

export default App;

