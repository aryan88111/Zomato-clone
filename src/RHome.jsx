import React from 'react'
import  style  from 'styled-components'
import Navbar from './Components2/Navbar'
import SeeRestaurant from './Components/SeeRestaurant'
import Collection from './Components/Collection'
import Header from './Components2/Header'
import Footer from './Components/Footer';
import Advertisement from './Components/Advertisement';

const RHome = () => {
  return (
    <div>
<Navbar/>
<Header/>
<Collection/>
<SeeRestaurant/>
<Advertisement/>
<Footer/>


    </div>
  )
}

export default RHome