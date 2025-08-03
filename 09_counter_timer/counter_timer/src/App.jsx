import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter_Timer from './Counter_timer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter_Timer />
    </>
  )
}

export default App
