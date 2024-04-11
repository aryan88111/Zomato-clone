import React,{useState,useEffect} from 'react'
import axios from 'axios';
import "../Collection.css"
import styled from 'styled-components'
import  {useNavigate} from "react-router-dom"



const Container=styled.div`
min-height: 50vh;
width: 100%;
// background-color: #fd7f00;
display: flex;
justify-content: center;
/* align-items: center; */
margin-top: 50px;
@media (max-width: 800px) {
  
  margin-top:110vh;
  margin-bottom:-100vh;
 
  }


`;

const Main=styled.div`
min-height: 300px;
width: 75%;
// background-color: wheat;
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 1px;
grid-auto-rows: minmax(100px, 100%);
padding: 20px;
@media (max-width: 800px) {
  grid-template-columns: repeat(1, 1fr);
 
  }
  
`;

const Card=styled.div`
height: 300px;
width: 285px;
background-color: #F8F9FC;
// border:1px solid lightgray;
border-radius: 12px;
transition: .3s;
margin-bottom:20px;
&:hover {
  box-shadow: 1px 1px 5px rgb(108, 102, 102);
 
}

`; 
const Img=styled.img`
height: 185px;
    width: 265px;
    border-radius: 12px;
    margin-left: 10px;
    margin-top: 10px;
`;

const H3=styled.h3`
margin-left: 10px;
margin-top: 10px;

`;
const  Description = styled.p `
margin-left: 10px;
width: 250px;
overflow: hidden;
margin-top: 5px;
height: 20px;
color: gray;

`;
const Address=styled.div`
height: 5vh;
width: 250px;
margin-left: 10px;
color: gray;
margin-top: 5px;

`;
















const SeeRestaurant = () => {
  const Navigate=useNavigate();



    const [data, SetData] = useState('');
    const [search, SetSearch] = useState([]);


    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get('http://localhost:7000/api/restro');
            console.log(response.data,"resss");
          
            SetSearch(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, []);


function showFood(id){
  Navigate(`/seerestaurant/${id}/product`);

}

  return (
     <>
    <Container>
  
    
     <H3>Restaurant</H3>
   <Main>



{
 search.map((res)=> {
   console.log(res.image);
   return(<> 
     <Card   onClick={ ()=>showFood(res._id)}>
 <Img src={res.image} alt="" />
<H3>{ res.name}</H3>
<Description>{res.descriptions}</Description>

<Address>{res.address}</Address>
 </Card>
    </>)
}
)
}



 {/* <Card>
 <Img src={} alt="" />
<H3></H3>
<Description></Description>

<Address></Address>
 </Card> */}




   </Main>
   
   
   
   
   
   
   </Container></>
      




  
  )
}

export default SeeRestaurant