import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">RCX</h1>
      <div className="card text-sky-500 hover:text-sky-600 bg-slate-200 ">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br></br>
        <a href="https://open.spotify.com/track/6cGmOGCCRFPCLKvTe9PsGE?si=020afd3e2c174ae9" target="_blank" rel="noopener noreferrer">shredded, let us</a> 
  <br />
  <a href="https://open.spotify.com/track/0AnQTHuNEOIma5UmnciuuD?si=a2b8d33d4e4340be" target="_blank" rel="noopener noreferrer">something left</a> 
      </div>

    </>
  )
}

export default App
