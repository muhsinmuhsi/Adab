import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLogin from '../Pages/Admin/Login'
import AdminHome from '../Pages/Admin/AdminHome'
import AdminNavbar from '../Pages/Admin/AdminNavbar'
import AddProduct from '../Pages/Admin/AddProduct'

const AdminRoutes = () => {
  return (
    <div>
        
              
             <AdminNavbar/>
              <Routes>
                <Route path='/Login' element={<AdminLogin/>}/>
                <Route path='/adminDash' element={<AdminHome/>}/>
                <Route path='/addProduct' element={<AddProduct/>}/>
              </Routes>
    </div>
  )
}

export default AdminRoutes