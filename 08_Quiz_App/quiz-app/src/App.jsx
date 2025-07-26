import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QForm from './QForm.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <QForm />
    </>
  )
}

export default App
