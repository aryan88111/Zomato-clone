import React from 'react'
import styled from 'styled-components'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import image1 from  "../Images/Collections/i1.jpg"
import image2 from  "../Images/Collections/i2.jpg"
import image3 from  "../Images/Collections/i3.jpg"
import image4 from  "../Images/Collections/i4.jpg"





const Container=styled.div`
height: 60vh;
//background-color: aqua;
margin: 5rem 12rem;
padding: 20px;
@media (max-width: 1000px) {
  margin: 1rem 2rem;
  padding:0;

  }

`;
const Heading=styled.h1`
font-weight: 550;
letter-spacing: 1px;



`;

const Text=styled.div`
margin: 0.4rem 0;
display: flex;
justify-content: space-between;
@media (max-width: 1000px) {
  display:flex;
  
  flex-direction:column;
    justify-content:center;
  }
`;
const P=styled.p`
color: gray;
font-size: 2.5vh;`;
const Span=styled.span`
color: red;
cursor:pointer;
display: flex;
align-items: center;

`;
const Card=styled.div`
@media (max-width: 1000px) {
 margin:20px;
  }
;`;
const Row=styled.div`
display:flex;

justify-content:space-between;
align-items:center;

transition:.3s;
@media (max-width: 1000px) {
    flex-direction:column;
    justify-content:center;
    }

`;


const Image=styled.img`
// position: relative;
margin: 5px;
height: 320px;
width: 268px;
border-radius: 5px;

`;

 const ImageCaption=styled.div`
 margin-top:-80px;
 margin-left:30px;
 height: 45px;
width: 200px;
background:linear-gradient(rgba(4, 9, 30, 0.3), rgba(4, 9, 30, 0.3));
 `;
const Heading2=styled.h3`
font-weight: 400;
color:white;
width: 250px;

// position:relative;


`;
const Heading3=styled.h3`

font-weight: 300;
color:white;
cursor:pointer;
display: flex;
align-items: center;
// position:relative;


`;

const Collection = () => {
  return (
  <Container>
    <Heading>Collections</Heading>
        <Text><P>Explore curated lists of top restaurants, cafes, pubs, and bars in Bhopal, based on trends</P> <Span >All Collections in bhopal <ArrowRightIcon/> </Span> </Text>
     <Row>
      <Card>
            <Image src={image1} alt="" />
            
            
            <ImageCaption>
                <Heading2>9 Great Cafes</Heading2>
                <Heading3>9 Places <ArrowRightIcon/></Heading3>
                </ImageCaption>
                </Card>
      <Card>
            <Image src={image2} alt="" />
            
            
            <ImageCaption>
                <Heading2>16 Best Luxury Dining Places</Heading2>
                <Heading3>16 Places <ArrowRightIcon/></Heading3>
                </ImageCaption>
                </Card>
      <Card>
            <Image src={image3} alt="" />
            
            
            <ImageCaption>
                <Heading2>10 Best Bars & Pubs</Heading2>
                <Heading3>10 Places <ArrowRightIcon/></Heading3>
                </ImageCaption>
                </Card>
      <Card>
            <Image src={image4} alt="" />
            
            
            <ImageCaption>
                <Heading2>10 Serene Rooftop Places</Heading2>
                <Heading3>11 Places <ArrowRightIcon/></Heading3>
                </ImageCaption>
                </Card>
            </Row>
  </Container>
  )
}

export default Collection