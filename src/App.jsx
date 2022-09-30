import { useState } from 'react'
import './App.css'
import NavVar from './components/layout/NavVar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavVar />
        <Routes>
          <Route path='/' element={<Home />}/>

          
        </Routes>
      
      
    </div>
  )
}

export default App
