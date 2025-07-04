import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Products from '../Pages/Products'
import ProductDetails from '../Pages/SingleProduct'
import CategoryPage from '../Pages/CategoryPage'
import FloatingWhatsAppButton from '../components/whatsappbutton'
import AboutUs from '../Pages/AboutUs'
import PrivacyPolicy from '../Pages/PrivacyPolicy'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const ProductRoutes = () => {
  return (
    <div>
        
        
            <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:id' element={<ProductDetails/>}/>
          <Route path='/products/category/:category' element={<CategoryPage/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/privacy_Policy' element={<PrivacyPolicy/>}/>
        </Routes>
        <Footer/>

        <FloatingWhatsAppButton/>
        
        


    </div>
  )
}

export default ProductRoutes