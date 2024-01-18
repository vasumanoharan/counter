import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { useState } from 'react';
import './style.css'
const root=ReactDOM.createRoot(document.getElementById('root'))
function Counter(){

    var [count,setcount]=useState(0)
function increment(){
    setcount(count+1)
}
function decrement(){
    setcount(count-1)

}


  return(
    <div className='ac'>
    <h1>{count}</h1>
    <button onClick={increment}>INC</button>
    <button onClick={decrement}>DEC</button>
    </div>
  )
}

root.render(
  <div>
    <Counter></Counter>
  </div>
)
