import { useState } from 'react'
import { InputBox } from '../components/index'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'
import './App.css'

function App() {
 const [amount,setAmount]=useState(0);
 const [from,setFrom]=useState('usd');
 const [to,setTo]=useState('pkr');
 const [convertedAmount,setConvertedAmount]=useState(0);

  const fromCurrency=useCurrencyInfo(from);

  const options=Object.keys(fromCurrency);

const swap=()=>{
let temp= from;
setFrom(to);
setTo(temp);
temp=amount
setAmount(convertedAmount);
setConvertedAmount(temp);
}

const conversion=()=>{
setConvertedAmount(amount * fromCurrency[to]);
}

return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('https://images.pexels.com/photos/29734978/pexels-photo-29734978/free-photo-of-reflection-of-matterhorn-in-serene-alpine-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                     conversion()
                  }}
              > 
                  <div className="w-full mb-1">
                    <InputBox label="From" currencyOptions={options} amount={amount} onAmountChange={(amount)=>setAmount(amount)} onCurrencyChange={(amount)=>setAmount(amount)}  currency={from}   />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To" currencyOptions={options} amount={convertedAmount} onCurrencyChange={(from)=>setTo(from)} amountDisable={true} currency={from} 
                          
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert 
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
