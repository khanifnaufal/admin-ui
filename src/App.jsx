import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-6'>
      <div className='flex bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-3xl '>

        <div className="w-1/2 bg-gray-200 flex items-center justify-center">
          <div className='text-gray-400 text-4xl font-semibold select-none'> 600 x 500</div>
        </div>

        <div className="w-1/2 bg-white p-8">
        <h2 className="text-center text-2xl font-semibold mb-6"> Login</h2>
        <form action="" className="space-y-4 max-w-sm mx-auto">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1 ">Email</label>
            <input
              type="Email"
              placeholder='Masukkan Email'
              className='w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400'/>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1 ">Password</label>
            <input
              type="Password"
              placeholder='Masukkan Password'
              className='w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400'/>
          </div>

          <div>
            <button type='Submit' className=' w-full bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md py-2 text-sm shadow-sm'>
              Login
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
