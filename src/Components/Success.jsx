import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';




const Container=styled.div`
min-height: 100vh;
width: 100%;
// background-color: #fd7f00;
display: flex;
justify-content: center;
align-items: center; 
// margin-top: 5px;
@media (max-width: 1000px) {
display: block;
  }

`;

const Main=styled.div`
min-height: 300px;
width: 60%;
background-color: aliceblue;
display: flex;
padding: 20px;
border: solid black 1px;

`;
const Ul=styled.ul `
// border: solid black 1px;
width:100%;
list-style: none;
`;
const Li=styled.li `

`;
const Box=styled.div `
border: solid black 1px;
margin-bottom:20px;
display:flex;

`;
const Box2=styled.div `
// height:200px;
width:10%;
// display:flex;
text-align: center;
margin-top:50px;



`;
const Box3=styled.div `
margin-left:60px;

`;

const Span=styled.span `
font-size:3vh;
color:black;
font-weight:700;

`;
const Span1=styled.span `
font-size:5vh;
color:black;
width:100%;
height:100%;
font-weight:700;
text-align: center;
;


`;
const Img=styled.img `
height:120px;
width:120px;
`;

const Success = () => {
 const [details,Setdetails]=useState([]);
 const [ratings, setRatings] = useState([]);

useEffect(()=>{
   async function  GetDetails(){ 

try {
  const response= await axios.get("http://localhost:7000/api/past-orders");
  console.log(response,"imageeee");
  Setdetails(response.data);

  const initialRatings = response.data.map((order) => {
    const productsRatings = {};
    order.products.forEach((product) => {
      productsRatings[product._id] = { rating: 0, productId: product._id };
    });
    return {
      orderId: order.order._id,
      productsRatings
    };
  });
  setRatings(initialRatings);
 
} catch (error) {
  console.error('Error fetching data:', error);
}
}
GetDetails();
},[])



const renderStars = (orderId, productId) => {
  const orderRatings = ratings.find((rating) => rating.orderId === orderId);
  if (!orderRatings) return null;

  const { rating } = orderRatings.productsRatings[productId] || { rating: 0 };
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        color={i <= rating ? 'gold' : 'grey'}
        onClick={() => handleRating(orderId, productId, i)}
        style={{ cursor: 'pointer' }}
      />
    );
  }
  return stars;
};


const handleRating = async (orderId, productId, rating) => {
  try {
    const response = await axios.post('http://localhost:7000/api/ratings', { orderId, productId, rating });
    console.log('Rating saved:', response.data);
    setRatings((prevRatings) => {
      const updatedRatings = prevRatings.map((orderRatings) => {
        if (orderRatings.orderId === orderId) {
          return {
            ...orderRatings,
            productsRatings: {
              ...orderRatings.productsRatings,
              [productId]: { rating, productId }
            }
          };
        }
        return orderRatings;
      });
      return updatedRatings;
    });
  } catch (error) {
    console.error('Error saving rating:', error);
  }
};
  
  return (
    <>
<h2>Transtation Details</h2>
    <Container>
      <Main>
      <Ul>

{details.map((res,index)=>{
  console.log(res.products.image,"image aagayi");
  return(
    <>
    <Li>
   <Box>
  <Box2>
    
    {res.products.map((data)=>{

      return(
        <>
        <Span1><Img src={data.image} alt="no image" /></Span1>
        </>
      )
    })}
    
    
    
    
    
    
    </Box2>
  <Box3 >
   <Li><Span>{index+1}. Your Order Id:</Span>{res.order._id}</Li>
    <Li><Span>Your Order Name:</Span>{res.order.name}</Li>
    <Li><Span>Restaurant Name:</Span>{res.order.restaurant_name}</Li>
    <Li><Span>Restaurant Address:</Span>{res.order.restaurant_address}</Li>
    <Li><Span>Your Order Quantity:</Span>{res.order.quantity}</Li>
    <Li><Span>Your Order Price:</Span>{res.order.price}</Li>
    <Li>
      
    {res.products.map((data)=>{

return(
  <>
  <Span1>Rating:{renderStars(res.order._id, data._id)}</Span1>
  </>
)
})}
      
      
      
      
   </Li>
    </Box3>
   </Box>
    
    </Li>
    </>
  )
})


}


      </Ul>
      </Main>
    </Container>
      </>
  
  )
}

export default Success