import { useState } from 'react'
import './App.css'
import NavigationBar from '../components/NavigationBar'
import Slider from '../components/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavigationBar/>
    <Slider/>
    </>
  )
}

export default App
