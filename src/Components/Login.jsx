import React,{useState} from 'react'
import axios from "axios"
import './SignUpLoginPg.css'
// import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import { useNavigate } from 'react-router-dom';

const SignUpLoginPg = () => {
    
   
    
const navigate=useNavigate();

    const [formData,setFormData]=useState({
       
        email:"",
        passWord:""

    })

    const handleChange=(e)=>{
       setFormData({...formData,[e.target.name]:e.target.value})
    }

const handleSubmit=async(e)=>{
    
   

    const res=await axios.post("http://localhost:7000/api/login",formData);
        console.log(res.data,"loginnnned");
        localStorage.setItem("userData",JSON.stringify(res.data));
        if(res.data){
            navigate('/')
        }
        
        console.log(res);
   }
   






   
  return (
      <div className='container'>
      
    <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
    </div>
         <div className="inputs">
            
            
            <div className="input">
                
                <EmailIcon/>
                <input type="email" placeholder='Email ID' name="email" value={formData.value}  onChange={handleChange}/>
            </div>
            <div className="input">
              
                <HttpsIcon/>
                <input type="password" placeholder='Password' name="passWord" value={formData.value} onChange={handleChange} />
            </div>
         </div>
      

       
         
        
         <div className="hero" type="submit"  onClick={handleSubmit}  >Submit</div>
        
    </div>
  )
        }

export default SignUpLoginPg



