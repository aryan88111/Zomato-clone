import React from 'react'
// import "../Collection.css" 
import styled from "styled-components"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';


const Container=styled.div`
height: 65vh;
width: 100%;

background-color: #F8F8F8;
display: flex;
justify-content: center;
align-items: center;
margin-top: 10%;
@media (max-width: 1000px) {
    height: 155vh;
    margin-top:5vh;
    }


`;
const Main=styled.div`
height: 65vh;
width: 75%;
// background-color: wheat;

  
`;

const Select=styled.select`
width: 80px;
  height:35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border:none;
  margin-left: 10px;

       option {
         color: black;
         background: white;
         font-weight: small;
         display: flex;
         white-space: pre;
         min-height: 20px;
         padding: 0px 2px 1px;
       }
`;

const Heading=styled.div`
margin-top: 30px;
height: 70px;
width: 100%;
// background-color: red;
display: flex;
justify-content: space-between;
align-items: baseline;

`;

const Text=styled.div`
margin-left:20px;
height: 70px;
width: 40%;
// background-color: rgb(162, 0, 255);
justify-content: space-between;
font-size: 40px;
font-weight: 700;
font-family: 'Urbanist Thick';

`;
const India=styled.div`
display: flex;`;

const Box=styled.div`
height: 30vh;
// background-color: azure;
padding:20px;
display: flex;
justify-content: space-between;
@media (max-width: 1000px) {
    display: list-item;
   
    }

`;


const Ul=styled.ul`
background-color: #F8F8F8;

@media (max-width: 1000px) {
    margin-bottom:20px;
   
    }`;
const Li=styled.li`
list-style: none;
color:gray;
&:nth-child(1) {
    color:black;
    font-size: 3vh;
    font-weight: 600;
}

`;
const Vr=styled.div`
width:100%;
height:2px;
background-color: rgb(72, 72, 72);
@media (max-width: 1000px) {
   margin-top:60vh;
    }
`;
const Txt=styled.p`
margin-top:20px;
color:gray;
`;


const Footer = () => {
  return (
    <Container>


<Main>

    <Heading>
        <Text>Zomato</Text>
        <India>
             <Select name="" id="">
                <option value="">India</option>
                <option value="">UAE</option>
               
                </Select>
             <Select name="" id="">
                <option value="">English</option>
                <option value="">Hindi</option>
                <option value="">Espaniol</option>
                </Select>

                </India>
    </Heading>
   


<Box>

<Ul>
    <Li>About Zomato</Li>
    <Li>Who Are We</Li>
    <Li>Blog</Li>
    <Li>Press Kit</Li>
    <Li>Investor Relations</Li>
    <Li>Work With Us</Li>
    <Li>Report Funds</Li>
    <Li>Contact Us</Li>


</Ul>
<Ul>
    <Li>Zomaverse</Li>
    <Li>blinkit</Li>
    <Li>Zomato</Li>
    <Li>Feeding India</Li>
    <Li>Hyper Pure</Li>
    <Li>Zomaland</Li>
</Ul>
<Ul>
    <Li>For Restaurants</Li>
    <Li>Apps For You</Li>
    <Li>Learn More</Li>
   
</Ul>
<Ul>
    <Li>Partner With Us</Li>
    <Li>Privacy</Li>
    <Li>Security</Li>
    <Li>Terms</Li>
    <Li>Sitemap</Li>
    
</Ul>
<Ul>
    <Li>Social links</Li>
    <Li><LinkedInIcon/><FacebookIcon/><InstagramIcon/><YouTubeIcon/><XIcon/></Li>
    
</Ul>

</Box>

<Vr></Vr>
<Txt>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</Txt>

   
</Main>
        
    </Container>
  )
}

export default Footer