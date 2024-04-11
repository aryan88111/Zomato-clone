import React from 'react'
import "../Collection.css"
import  style  from 'styled-components'
import img1 from "../Images/C2Header/i1.png"
import img2 from "../Images/C2Header/i2.png"
import img3 from "../Images/C2Header/i3.png"

const Container=style.div`
height: 20vh;
    width: 100%;
    // background-color: #fd7f00;
    display: flex;
    justify-content: center;
    align-items: center;
    // margin-top: 5px; 
  

`;
const Main=style.div`
height: 20vh;
width: 75%;
// background-color: wheat;
display: flex;
align-items: center;
// justify-content: space-between;
`;
const Item=style.div` 
   height: 80px;
width: 80px;
background-color: aliceblue;
border-radius: 50%;
@media (max-width: 800px) {

  width:40px;
  height: 40px;
  // margin-left:-150px;
  }

`;

const Card=style.div`
height: 20vh;
width: 220px;
// background-color: blueviolet;
display: flex;
align-items: end;
cursor: pointer;

`;

const Img=style.img`
height: 8vh;
width: 8wv;
margin-left: 10px;
margin-top: 10px;
@media (max-width: 800px) {
  display: list-item;
  // margin-top:20px;
  width:30px;
  height: 30px;
  // margin-left:-150px;
  }
`;
const H3=style.h3`
margin-bottom: 30px;
margin-left: 10px;
font-size: 3vh;
color: #E03546;
font-weight: normal;
@media (max-width: 800px) {
  font-size: 1vh;
  margin-top:50px;
 
  }
`;
const Line=style.div`
height: 2px;
width: 100%;
background-color: #E03546;
@media (max-width: 800px) {
  height:1px;
 
  }


`;

const Header = () => {
  return (<>
    <Container>
        <Main>
       <Card>
     <Item>   
        <Img src={img1} alt="" /></Item>
            <H3>Dining Out</H3>
       </Card>
       <Card>
     <Item>   
        <Img src={img2} alt="" /></Item>
            <H3>Delivery</H3>
       </Card>
       <Card>
     <Item>   
        <Img src={img3} alt="" /></Item>
            <H3>Nightlife</H3>
       </Card>
        </Main>
    </Container>
        <Line></Line>

        </>
    
  )
}

export default Header