import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import Recipedetails from './components/RecipeDetails'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <br/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
     
    </Routes>
      
    </>
  )
}

export default App
