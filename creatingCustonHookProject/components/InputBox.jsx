import React from 'react'

function InputBox({
  label,
  className = "",
  amount,
  currency='usd',
  onAmountChange,
  onCurrencyChange,
  currencyOptions=[],
  amountDisable=false,
  currencyDisable=false
}) {
 

  return (
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
          <div className="w-1/2">
              <label  className="text-black/40 mb-2 inline-block">
                  {label}
              </label>
              <input
                  
                  className="outline-none w-full bg-transparent py-1.5"
                  type="number"
                  placeholder="Amount"
                  value={amount}
                  onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                  disabled={amountDisable}

              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                  value={currency}
                  onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)} 
              >
                  { /* WHEN Looping in JSX we have to use key otherwise react gives a warning and also performance is decreased */
                     currencyOptions.map((currencyOPt)=>(
                         <option value={currencyOPt} key={currencyOPt}>
                        {currencyOPt}
                    </option>))
                  }
                    
              
              </select>
          </div>
      </div>
  );
}
export default InputBox