import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ProductRoutes from './routes/porductRoutes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/*" element={<ProductRoutes/>}/>
      {/* <Route path="/admin/*" element={<AdminRoutes/>} /> */}
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>

    </>
  )
}

export default App
