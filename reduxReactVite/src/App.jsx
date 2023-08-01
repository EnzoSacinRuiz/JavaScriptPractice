import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from './Components/Contador'
import Cards from './Components/Cards'

function App() {
  return (
    <div>
      <Contador/>
      <Cards/>
    </div>
  )
}

export default App
