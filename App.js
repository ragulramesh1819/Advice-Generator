import logo from './logo.svg';
import './App.css';
import React,{useState} from'react';
import Count from './Count';

function App() {
  const [advice,setAdvice]=useState("click below button to get advice");
  const [count,setCount]=useState(0);
  const advicedata= async()=>
  {
    let url= await fetch("https://api.adviceslip.com/advice");
    const data= await url.json();
    setAdvice(data.slip.advice)
    setCount(count+1);
  } 
  return (
    <>
        <div className="tot-box">
          <div className="tittle">
            <Count count={count} />
          </div>
          <div className="advice">
              <p>"{advice}"</p>
          </div>
          <div className="design">
            <div className="class"></div>
            <img src="bx-pause (1).svg" alt="" />
            <div className="class"></div>
          </div>
        </div>
        <button onClick={advicedata}><img src="icon-dice.svg" alt="" /> </button>  
        </>
  );
}

export default App;
