import React,{useState,useEffect} from 'react'
import './ZHome.css'
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Card from './Card';
import Collection from './Components/Collection';
import { Link  } from 'react-router-dom';
import City from './Components/City';
import Advertisement from './Components/Advertisement';
import Footer from './Components/Footer';

const ZHome = () => {
    const [data, SetData] = useState(null);
    useEffect(() => {

        let data=   localStorage.getItem('userData')
        console.log(data,"dataaaaaaaa");
       let newData=  JSON.parse(data)
       console.log(newData,"newData");

       SetData(newData)

   }, []);

   let remove=()=>{
    localStorage.clear('userData')
    SetData(null)


   }






  return (
    <>
    <div className="Parent">
        <div className="Navbar">
            <ul>
                <li><Link  className='Linkk' to="/addrestaurant"  >Add Restaurant</Link></li>
                <li><Link  className='Linkk' to="/seerestaurant"  >See Restaurant</Link></li>
            </ul>
            <ul>
           

           {
            data?( <><li> {data?.loginData?.name} </li><li onClick={remove}><Link className='Linkk'>Logout <ExitToAppIcon /></Link></li></>  ):( <><li><Link className='Linkk' to="/signup"><HowToRegIcon />Signup</Link></li><li><Link className='Linkk' to="/login"><LoginIcon />Login</Link></li></>
            )
           }
            {/* data? (    <li> {  data.userData.name} </li>
    <li  onClick={remove}  ><Link className='Linkk'  >Logout <ExitToAppIcon/></Link>  </li>  
      ):(
                <li><Link className='Linkk' to="/signup" ><HowToRegIcon/>Signup</Link></li>
                <li><Link  className='Linkk' to="/login"  ><LoginIcon/>Login</Link></li>
                
                ) */}
            </ul>
        </div>
        <div className="Hlogo"></div>
       <div className="Lower-text">Discover the Best Food & Drink in Your City</div>
        <div className="Hinput">
            
            <div className="Inmain">
            <LocationOnIcon sx={{ color:"#E03546" }}/>
            <select name="" id="">
                <option value="">bhopal</option>
                <option value="">jhansi</option>
                <option value="">datia</option>
                <option value="">gwalior</option>
                </select>
                
       <SearchIcon/> 
       <input type="text" placeholder=' Search for restaurant and cuisin'/>
            </div>
            
            </div>
    </div>
    <Card/>

  <Link id='Collection' to="/findrestro"><Collection/></Link>
    <City/>
    <Advertisement/>
    <Footer/>
    </>
  )
}

export default ZHome