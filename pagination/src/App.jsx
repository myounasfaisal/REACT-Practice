import { useEffect, useState } from 'react'
import './App.css'
import { fetchCurrencies } from './api/currency/fetchCurrencies';
import Post from './components/posts/Posts';
import Pagination from './components/pagination/Pagination';

function App() {
  const [currentPage,setCurrentPage]=useState(1);
  const [coinsData,setCoinsData]=useState([]);
  const postsPerPage=10;
  
  useEffect(() => {
    const getData = async () => {
      const data = await fetchCurrencies();
      setCoinsData(data);
    };
  
    getData();
  }, []);

  let lastIndex=currentPage * postsPerPage;
  
  let firstIndex=Math.abs(lastIndex-postsPerPage);

  let perPageCoins=coinsData.slice(firstIndex,lastIndex);


  return (
    <main className='flex flex-col w-100% justify-center items-center'>
   {perPageCoins.map((coinData)=>{
    return(
<Post key={coinData.name} data={coinData} />
    )
   })}

   <Pagination  postsPerPage={10}
  totalPosts={coinsData.length}
  currentPage={currentPage}
  setCurrentPage={setCurrentPage} />
    </main>
  )
}

export default App
