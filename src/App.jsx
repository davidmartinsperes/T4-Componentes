import { useState } from 'react'
import FirstComponent from './components/FirstComponent'
import './App.css'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import SecondComponent from './components/SecondComponent'
import ThirdComponent from './components/ThirdComponent'
import FourthComponent from './components/FourthComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
     
      
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<FirstComponent/>}/>
      <Route path='Segundo'element={<SecondComponent/>}/>
      <Route path='Terceiro'element={<ThirdComponent/>}/>
      <Route path='Quarto'element={<FourthComponent/>}/>
      <Route path= '*' element={<h1>Not Found</h1>}/>
      
      
       </Routes>
      </BrowserRouter>
    

    
    
     
  )
}

export default App
