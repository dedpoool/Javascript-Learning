import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h4 className='bg-gray-900 rounded-2xl text-white w-fit p-4'>This is my first website</h4>
    </>
  )
}

export default App
