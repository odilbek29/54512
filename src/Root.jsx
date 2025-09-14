import React from 'react'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Admin from './pages/admin/Admin'
import Login from './pages/login/Login'

function Root() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/admin' element={<Admin></Admin>}></Route>
   
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Root