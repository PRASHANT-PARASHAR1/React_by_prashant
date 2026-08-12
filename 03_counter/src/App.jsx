
import './App.css'
import { useState } from "react";
function App() {
let [counter,setCounter]=useState(15)

const addValue = () =>{
 counter = counter + 1
 setCounter(counter)
 console.log(`counter is ${counter}`)
}
const RemoveVal = () =>{
  counter=counter-1
  setCounter(counter)
  console.log(`counter is ${counter}`)
}
  return (
    <>
      
     <h1>counter by prashant parashar</h1>
     <h2>Counter value:{counter}</h2>
     <button
     onClick={addValue}
     >Add value</button>
     <br />
     <button onClick={RemoveVal}>remove Value</button>
     
    </>

  )
}

export default App
