import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import Services from './pages/Services'
import Offers from './pages/Offers'
import Store from './pages/Store'
import Contact from './pages/Contact'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/offers' element={<Offers/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/store' element={<Store/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
