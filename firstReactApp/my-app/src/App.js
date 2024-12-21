import logo from './logo.svg';
import './App.css';

let press=1;
function Button(){
  return <button className="button">Press Me</button>
}

const user={
  name:"Younas Faisal",
  age:20,
  occupation:"Web Dev Intern"
}

let list=[
  {
title:"Apple",
fruit:true,
  },{
    title:"Car",
    fruit:false,
  },
  {
    title:"Laptop",
fruit:!true,
  }
]


function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Practicing React
         <br/><br/> 
         Name :- {user.name}
         <br/>
         Age :- {user.age}
         <br/>
         Occupation :- {user.occupation}
         <br/>
         <br/>
          <Button/> 
          <p>
          {press}
        </p>
        
        </p>  
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>{list.map((product)=>{
            return(
              <li style={{color: product.fruit? 'red' : 'black',
                margin:'10px'
              }}>
                {product.title}
              </li>
            )
          })}</ul>
      </header>
    </div>
  );
}

export default App;
