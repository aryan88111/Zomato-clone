import React from 'react'

import styled from 'styled-components';
import image1 from "../Images/Advertisement/i1.png"
import image2 from "../Images/Advertisement/i2.png"
import image3 from "../Images/Advertisement/i3.png"

const Container=styled.div`
height: 68vh;
width: 100%;
 background-color: #FFFBF7; 
// background-color: #fd7f00;
display: flex;
justify-content: center;
align-items: center;
margin-top: 10%;
@media (max-width: 1000px) {
  margin-top:110vh;
  }
`;
const Main=styled.div`
height: 65vh;
width: 75%;
// background-color: wheat;
display: flex;
    align-items: center;
    @media (max-width: 1000px) {
      display: list-item;
      }
`;
const Image=styled.img`
height: 65vh;
`;

const LeftSide=styled.div`
height: 65vh;
    width: 25vw;
    // background-color: rgb(193, 244, 244);
    @media (max-width: 1000px) {
      // display: none;
      }
`;
const RightSide=styled.div`
height: 65vh;
width: 50vw;
background-color:  #FFFBF7;
@media (max-width: 1000px) {
  height: 40vh;
  width: 80vw;
  }

`;

const Heading=styled.h1`
font-weight:500;
margin-bottom:1rem;
margin-top:3rem;
font-size: 7vh;
// text-align: center;
margin-left:20px;
@media (max-width: 1000px) {
    margin-left:0px;
    font-size: 4vh;
    }
`;

const Txt=styled.p`
margin-left:20px;
color:gray;
font-size: 3vh;
@media (max-width: 1000px) {
  margin-left:0px;
  font-size: 2vh;
  }


`;
const Box=styled.div`
padding: 8vh 20px;
display:flex;
@media (max-width: 1000px) {
  padding: 2vh 3vw;
 
  }


`;
const Input=styled.input`
height: 6vh;
        width: 17.5vw;
        border-radius: 5px;
        border: none;
        padding: 1px;
        border: 1px solid #E03546;
        @media (max-width: 1000px) {
          width:200px;
         
          }
        

`;
const Button=styled.button`

margin-left: 10px;
height: 6vh;
width: max-content;
padding: 10px;
background-color: #E03546;
border: none;
border-radius: 5px;
color: white;
font-size: 2.3vh;
@media (max-width: 1000px) {
  font-size: 2vh;
  width: 160px;
  padding: 4px;
  }

`;
const Image2=styled.img`
width: 190px;
margin-right:20px;
@media (max-width: 1000px) {
  width: 100px;
    margin:0 10px;
  }

`;
const ImageBox=styled.div`
display: flex;
margin-left:20px;

// justify-content: space-between;
@media (max-width: 1000px) {
  margin:0 10px;
  }

`;



const Advertisement = () => {
  return (
    <Container>
       <Main>

<LeftSide>
  <Image src={image1} alt="" />
  </LeftSide>
<RightSide>
<Heading>Get The Zomato App</Heading>


<Txt>We will send you a link, open it on your phone to download the app</Txt>
<Box>

<Input type="text" placeholder='Enter yor Email'/>
<Button>Share App Link</Button>
</Box>

<ImageBox>
  <Image2 src={image2} alt="" />
  <Image2 src={image3} alt="" />
</ImageBox>

</RightSide>










       </Main>
    </Container>
  )
}

export default Advertisement