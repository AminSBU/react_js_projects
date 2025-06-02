import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Application from './Application.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Application />
    </>
  )
}

export default App
