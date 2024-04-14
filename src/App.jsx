import React from 'react'
import SignUpLoginPg from './Components/SignUpLoginPg'
import Login from './Components/Login'
import AddRestaurant from './Components/AddRestaurant'
import SeeRestaurant from './Components/SeeRestaurant'
import ZHome from './ZHome'
import {  Routes ,Route} from 'react-router-dom';

import RHome from './RHome'
import AllProducts from './Components/AllProducts'
import AddProduct from './Components/AddProduct'
import ViewCart from './Components/ViewCart'
import Success from './Components/Success'
import Cancle from './Components/Cancle'


const App = () => {
  return (
    <div>
<Routes>

  <Route path='/' element={<ZHome/>}></Route>
  <Route path='/signup' element={<SignUpLoginPg prop="Sign Up" />}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/addrestaurant' element={<AddRestaurant/>}></Route>
  <Route path='/seerestaurant' element={<SeeRestaurant/>}></Route>
  <Route path='/seerestaurant/:restroId/product' element={<AllProducts/>}></Route>
  <Route path='/seerestaurant/:restroId/addproduct' element={<AddProduct/>}></Route>
  <Route path='/findrestro' element={<RHome/>}></Route>
  <Route path='/success' element={<Success/>}></Route>
  <Route path='/cancel' element={<Cancle/>}></Route>
  <Route  path='/ViewCart/:restroId'   element={<ViewCart/>}/>
  
</Routes>

   
    </div>
  )
}

export default App