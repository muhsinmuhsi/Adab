import { Route, Routes } from 'react-router-dom'
import AdminLogin from '../Pages/Admin/Login'
import AdminHome from '../Pages/Admin/AdminHome'
import AdminNavbar from '../Pages/Admin/AdminNavbar'
import AddProduct from '../Pages/Admin/AddProduct'
import ProductEdit from '../Pages/Admin/EditProduct'
import ManageProducts from '../Pages/Admin/ManageProduct'

const AdminRoutes = () => {
  return (
    <div>
        
              
             <AdminNavbar/>
              <Routes>
                <Route path='/Login' element={<AdminLogin/>}/>
                <Route path='/adminDash' element={<AdminHome/>}/>
                <Route path='/addProduct' element={<AddProduct/>}/>
                <Route path='/EditProducts/:id' element={<ProductEdit/>}/>
                <Route path='/ManageProducts' element={<ManageProducts/>}/>
              </Routes>
    </div>
  )
}

export default AdminRoutes