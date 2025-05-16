import { Route, Routes } from 'react-router-dom'
import AdminLogin from '../Pages/Admin/Login'
import AdminHome from '../Pages/Admin/AdminHome'
import AdminNavbar from '../Pages/Admin/AdminNavbar'
import AddProduct from '../Pages/Admin/AddProduct'
import ProductEdit from '../Pages/Admin/EditProduct'
import ManageProducts from '../Pages/Admin/ManageProduct'
import AdminProtected from '../components/AdminProtected'

const AdminRoutes = () => {
  return (
    <div>
        
              
             <AdminNavbar/>
              <Routes>
                <Route path='/Login' element={<AdminLogin/>}/>
                <Route path='/adminDash' element={<AdminProtected><AdminHome/></AdminProtected>}/>
                <Route path='/addProduct' element={<AdminProtected><AddProduct/></AdminProtected>}/>
                <Route path='/EditProducts/:id' element={<AdminProtected><ProductEdit/></AdminProtected>}/>
                <Route path='/ManageProducts' element={<AdminProtected><ManageProducts/></AdminProtected>}/>
              </Routes>
    </div>
  )
}

export default AdminRoutes