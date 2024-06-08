import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


function Home() {
    const [count, setCount] = useState(0);
    return (
      <div>
      <h1 style={{ color: 'blue', lineHeight : 5, padding: 5 }}>RCX</h1>
        {/* <h1 className="text-3xl font-bold underline">RCX</h1> */}
        <div className="card text-sky-500 hover:text-sky-300 bg-slate-600" >
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>

          <br></br>
          <a className =""
            href="https://open.spotify.com/track/6cGmOGCCRFPCLKvTe9PsGE?si=020afd3e2c174ae9"
            target="_blank"
            rel="noopener noreferrer"
          >
            shredded, let us
          </a>
          <br />
          <a
            href="https://open.spotify.com/track/0AnQTHuNEOIma5UmnciuuD?si=a2b8d33d4e4340be"
            target="_blank"
            rel="noopener noreferrer"
          >
            something left
          </a>
          
        </div>
      </div>
    );
  }
  
  export default Home