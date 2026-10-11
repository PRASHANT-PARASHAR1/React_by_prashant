import { useState } from 'react'
import './App.css'
import { store } from './app/store'
import { todoSlice } from './features/todo/todoSlice'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 text-center p-10 text-4xl'>Learn About Redux Toolkit</h1>

<store />
<todoSlice />


    </>
  )
}

export default App
