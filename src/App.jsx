import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col items-center justify-center text-center min-h-screen bg-neutral-800'>
    <div className='flex items-center justify-center space-x-8 mb-12'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-24 h-24 animate-bounce" alt="Vite logo"
          style={{animationDuration:"2s"}} />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-24 h-24 animate-spin" alt="React logo"
          style={{animationDuration:"10s"}} />
        </a>
      </div>
      <h1 className='text-white text-6xl font-bold mb-16'>Vite + React</h1>
      <h3 className='text-red-500 font-semibold text-shadow-amber-400'> Muhammad Khanif Naufal</h3>
      <div className="card text-blue-500 text-sm/8 space-y-6 mb-8">
        <button onClick={() => setCount((count) => count + 1)} className='bg-neutral-900 text-white py-2 px-6 rounded-lg text-lg animate-pulse'
         style={{animationDuration:"2s"}} >
          count is {count}
        </button>
        <p className='text-neutral-300'>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-neutral-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>

    </>
  )
}

export default App
