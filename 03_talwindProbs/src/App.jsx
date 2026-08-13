import React from 'react'
import './App.css'
import Card from './Card.jsx'
function App() {
  return (
   <>
  
      <h1 className="bg-green-400 p-5 text-black">
        Tailwind CSS by Prashant Parashar
      </h1>

       <Card />
{/* ********* */}
<div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">Lorem</h2>

          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Distinctio tempora ipsum soluta amet corporis accusantium aliquid
            consectetur eaque!
          </p>
        </div>

        <button
          type="button"
          className="w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200 hover:bg-gray-700 transition"
        >
          Read more
        </button>
      </div>
    
{/* ****** */}
    </>
  )
}

export default App
