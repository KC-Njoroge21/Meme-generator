import { useState } from 'react'
import Header from './Header'
import './App.css'
import Major from './Major'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Major />
        
    </>
  )
}

export default App
