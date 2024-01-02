import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Primeira Tarefa</h1>
      <h2>Essa é a primeira tarefa do curso de React</h2>
      <p>Só tenho que alterar alguns elementos html e mudar o estilo css</p>
      <p>E acredito que é bem tranquilo, porque eu já tenho uma leve noção de html e css</p>
      <p>Mas nunca tinha trabalhado com framework antes...</p>
    </>
  )
}

export default App
