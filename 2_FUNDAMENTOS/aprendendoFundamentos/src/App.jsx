import FirstComponent from './components/firstComponent'
import NewTemplate from './components/newTemplate'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <NewTemplate/>
    </>
  )
}

export default App
