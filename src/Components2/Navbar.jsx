import React from 'react'
// import "../Collection.css"
import  style  from 'styled-components'
import img1 from "../Images/C2 Navbar/zlogo.png"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';





const Container=style.div`
height: 10vh;
    width: 100%;
    // background-color: #fd7f00;
    display: flex;
    justify-content: center;
    align-items: center;
    // margin-top: 5px; 
    // position: fixed;

`;
const Main=style.div`
height: 10vh;
width: 75%;
// background-color: wheat;
display: flex;
align-items: center;
justify-content: space-between;
`;
const Image=style.img`
width: 140px;
margin-left:10px;
`;
const Middle=style.div` 
box-shadow: 2px 2px 5px rgb(220, 220, 220),-1px -1px 5px rgb(220, 220, 220);
width: 60%;
height: 6.2vh;
display: flex;
margin-left:-70px;
align-items: center;
background-color: #fff;
border-radius: 8px;
padding:4px;
@media (max-width: 800px) {
  display: list-item;
  margin-top:140px;
  width:300px;
  height: 80px;
  margin-left:-150px;
  }
  `
;


const Input=style.input`
border: none;
border-radius: 5px;
width: 500px;
padding:7px;
height: 4vh;
`;
const Select=style.select`  
 margin-left: 20px;
background-color: #fff;
border: none;
width: 200px;
font-size: 2vh;
color:gray;
letter-spacing: 1px;
`;
const Option=style.option`
color:gray;
`;
const Right=style.div`
width: 200px;
display: flex;
justify-content: space-around;


`;
const Span=style.span`
color:rgb(111, 109, 109);
font-size: 2.5vh;
margin:10px;
@media (max-width: 1000px) {
  display: none;
  
  }

`;

const Navbar = () => {
  return (
   <Container>
    <Main>
        <Image src={img1} alt="" />
       <Middle>
       <LocationOnIcon sx={{ color:"#E03546" }}/> 
        <Select name="" id=""> 
        <Option value="">234,mata mandir road Bhopal</Option>
        <Option value="">Delhi</Option>
        <Option value="">Mumbai</Option>
        <Option value="">Kerala</Option>
        </Select>
        <MoreVertIcon  sx={{ color:"gray" }}/>
        <SearchIcon sx={{ color:"gray" }}/>
        <Input type="text" placeholder='Enter Your City' />
       </Middle>
      <Right>
      <Span>Log in</Span>
        <Span>Sign up</Span>
      </Right>
    </Main>
   </Container>
  )
}

export default Navbar