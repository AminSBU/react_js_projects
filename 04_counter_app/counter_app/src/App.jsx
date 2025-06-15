import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter.jsx'
import Timer from './timer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
      <Timer />
    </>
  )
}

export default App
