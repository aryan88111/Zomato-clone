import React from 'react'

import styled from 'styled-components'
import orderfood from './orderfood.jpg'
import dining from './dining.jpg'
import club from './club.jpg'

const Row =styled.div`
display:flex;

justify-content:space-between;
align-items:center;
margin:30px 14rem;
transition:.3s;
@media (max-width: 1000px) {
    flex-direction:column;
    justify-content:center;
    margin-top:20vh;
    margin-left:12rem;
    
    }
`;

const Container= styled.div`

 height:250px;
 width:350px;
//  background-color: red;
border:.5px solid lightgray;
 border-radius: 12px;
 transition: .3s;
 &:hover {
   
    transform: scale(1.05);
  }
  @media (max-width: 1000px) {
   margin:20px ;
    }
 `;
 const CoverImg = styled.img`
 height:170px;
 width:350px;
 border-radius: 12px 12px 0 0;

 `;
 const Heading=styled.h3`
 margin-left:20px;
 font-weight: 500;
 font-size:20px;
 margin-top:10px;
//  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
 `;
 const Text=styled.p`
 margin-left:20px;
 margin-top:5px;
 color: gray;
 `;




const Card = () => {
  return (
 <Row>
     <Container><CoverImg src={orderfood} alt="" />
     <Heading>Order Online</Heading>
     <Text>Stay home and order to your doorstep</Text>
     </Container>
     <Container><CoverImg src={dining} alt="" />
     <Heading>Dining</Heading>
     <Text>View the city's favourite dining venues</Text>
     </Container>
     <Container><CoverImg src={club} alt="" />
     <Heading>Nightlife and Clubs</Heading>
     <Text>Explore the city's top nightlife outlets</Text>
     </Container>
 </Row>

  )
}

export default Card