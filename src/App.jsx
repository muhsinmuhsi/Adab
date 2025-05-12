import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ProductRoutes from './routes/porductRoutes'
import Footer from './components/Footer'
import AdminRoutes from './routes/adminRoutes'

function App() {

  return (
    <>
    <div>
      
      <BrowserRouter>
      
      <Routes>
      <Route path="/*" element={<ProductRoutes/>}/>
      <Route path="/admin/*" element={<AdminRoutes/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>

    </>
  )
}

export default App
