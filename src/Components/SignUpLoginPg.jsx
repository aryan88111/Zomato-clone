import React,{useState} from 'react'
import axios from "axios"
import './SignUpLoginPg.css'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
// import { useNavigate } from 'react-router-dom';

const SignUpLoginPg = (data) => {
    
    const [actionss,SetActionss]=useState(data.prop)
    
// const navigate=useNavigate();

    const [formData,setFormData]=useState({
        name:"",
        email:"",
        passWord:""

    })

    const handleChange=(e)=>{
       setFormData({...formData,[e.target.name]:e.target.value})
    }

const handleSubmit=async(e)=>{
    console.log('dkfjndfj');
   
let res=await axios.post("http://localhost:7000/api/signup",formData)
   
    console.log(res);
}





   
  return (
      <div className='container'>
      
    <div className="header">
        <div className="text">{actionss}</div>
        <div className="underline"></div>
    </div>
         <div className="inputs">
            {actionss==='Login'?<div></div>:<div className="input">
               
                <PersonOutlinedIcon/>
                <input type="text" placeholder='Name' name="name" value={formData.value} onChange={handleChange}/>
                
            </div>}
            
            <div className="input">
                
                <EmailIcon/>
                <input type="email" placeholder='Email ID' name="email" value={formData.value}  onChange={handleChange}/>
            </div>
            <div className="input">
              
                <HttpsIcon/>
                <input type="password" placeholder='Password' name="passWord" value={formData.value} onChange={handleChange} />
            </div>
         </div>
      

         {actionss==='Sign Up'?<div></div>:<div className="forget-password">Forget Password? <span>Click Here!</span></div>}
         
         <div className="submit-container">
            <div className={actionss==='Login'?"submit gray":"submit"} onClick={()=>{SetActionss('Sign Up')}}>Sign Up</div>
            <div className={actionss==='Sign Up'?"submit gray":"submit"} onClick={()=>{SetActionss('Login')}}>Login</div>
         </div>
         <div className="hero" type="submit"  onClick={handleSubmit}  >Submit</div>
        
    </div>
  )
}

export default SignUpLoginPg



