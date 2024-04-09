import React from 'react'

import styled from "styled-components"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const Container=styled.div`
height: 70vh;
width: 100%;
// background-color: red;
display: flex;
justify-content: center;
align-items: center;
margin-top: 10vh;
@media (max-width: 1000px) {
    margin-top:170vh;
    }

`;

const Main=styled.div`
height: 70vh;
    width: 75%;
    // background-color: red;
    `;


    const Heading=styled.h1`
    font-weight:400;
    margin-bottom:3rem;
    margin-left:20px;
    @media (max-width: 1000px) {
        margin-left:0px;
        }
    `;
    const Span=styled.span`
    font-weight:600;
    
    `;
const Row =styled.div`
display:flex;

justify-content:space-between;
align-items:center;
margin:15px 1rem;
transition:.3s;
@media (max-width: 1000px) {
    flex-direction:column;
    justify-content:center;
    }
`;
const Card=styled.div`
height: 60px;
width: 360px;
// background-color: aliceblue;
border: .5px solid  rgb(220, 220, 220);
padding: .7rem;
border-radius: 8px;
margin :0px 7px;
box-shadow: 1px 1px 3px #FDFDFD;
@media (max-width: 1000px) {
    padding: .3rem;
    margin-bottom:10px;
    // margin-left:-20px;
    }

    &:hover {
        box-shadow: 1px 1px 5px rgb(108, 102, 102);
       
      }

`;

const Text=styled.p`
font-size: 2.8vh;
`;

const Txt=styled.p`
display: flex;
align-items: center;
color:gray;
cursor:pointer
`;

const City = () => {
  return (
    <Container>
<Main>   
     <Heading>Popular localities in and around <Span>Bhopal</Span></Heading>
       <Row>
        <Card>
            <Text>Maharana Pratap Nagar</Text>
            <Txt>234 place <ArrowRightIcon/></Txt>
            
        </Card>
        <Card>
            <Text>TT Nagar</Text>
            <Txt>403 place <ArrowRightIcon/></Txt>
            
        </Card>
        <Card>
            <Text>JP Nagar</Text>
            <Txt>340 place <ArrowRightIcon/></Txt>
            
        </Card>
       
       </Row>
       <Row>
        <Card>
            <Text>Arera Colony</Text>
            <Txt>442 place <ArrowRightIcon/></Txt>
            
        </Card>
        <Card>
            <Text>Gulmohar Colony</Text>
            <Txt>483 place <ArrowRightIcon/></Txt>
            
        </Card>
        <Card>
            <Text>Kohefiza</Text>
            <Txt>340 place <ArrowRightIcon/></Txt>
            
        </Card>
       
       </Row>
       <Row>
        <Card>
            <Text>Peer Gate Area</Text>
            <Txt>102 place <ArrowRightIcon/></Txt>
            
        </Card>
        <Card>
            <Text>BHEL</Text>
            <Txt>793 place <ArrowRightIcon/></Txt>
            
        </Card>
        <Card>
            <Text>Airport Area</Text>
            <Txt>360 place <ArrowRightIcon/></Txt>
            
        </Card>
       
       </Row>
       <Row>
        <Card>
            <Text>Habib Ganj</Text>
            <Txt>402 place <ArrowRightIcon/></Txt>
            
        </Card>
        <Card>
            <Text>Jhangirabad</Text>
            <Txt>253 place <ArrowRightIcon/></Txt>
            
        </Card>
        <Card>
            <Text>Indripuri</Text>
            <Txt>190 place <ArrowRightIcon/></Txt>
            
        </Card>
       
       </Row>

</Main>
    </Container>
  )
}

export default City