
import React,{useState,useEffect} from 'react'
import {useParams}  from 'react-router-dom';
import axios from 'axios';
import "../Collection.css" 
import styled from 'styled-components';
import Navbar from  "../Components2/Navbar"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

import  {useNavigate} from "react-router-dom"



const Container=styled.div`
min-height: 100vh;
width: 100%;
// background-color: #fd7f00;
display: flex;
justify-content: center;
align-items: center; 
margin-top: 5px;

`;

const Main=styled.div `
min-height: 100vh;
min-width: 75%;
// background-color: wheat;
// display: flex;
align-items: center;

`;


const Img=styled.img `
width: 75vw;
    height: 300px;
    border-radius: 12px;
     object-fit:cover;
`;

const Button=styled.button `
min-height: none;
min-width: none;
padding: 5px;
font-size: 20px;
background-color: #dc3545;
border: none;
color: white;
cursor: pointer;
margin-right:50px;
`;

const H1=styled.h1 `
margin: 20px;
    font-weight: 600;
`;

const Box=styled.div`
min-height: 300px;
min-width: 75%;
// background-color: blue;
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 1px;
grid-auto-rows: minmax(50px, 100%);
padding: 20px;
@media (max-width: 800px) {
  grid-template-columns: repeat(1, 1fr);
 
  }
`;

const Card=styled.div`
height: 370px;
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
const Img2=styled.img`
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
const Price=styled.div`
height: 3vh;
width: 250px;
margin-left: 10px;
color: black;
margin-top: 5px;
display: flex;
align-items: center;

`;
const Quantity=styled.div`
height: 3vh;
width: 250px;
margin-left: 10px;
color: black;
margin-top: 5px;
display: flex;
// align-items: center;
justify-content: space-between;
`;

const Btn2=styled(Button)`
background-color:green;
height: 3vh;
font-size:2vh;
width:min-content;
padding:3px;
border: none;
border-radius: 4px;

`;
const Btn3=styled(Button)`
background-color:#fd7f00;
height: 25px;
font-size:2vh;
width:25px;
padding:3px;
border: none;
border-radius: 50%;

`;






const AllProducts = () => {
    const {restroId} =useParams();
   
    const navigate= useNavigate();
   
    const [showProduct, SetProduct] = useState([]);
    const [restro,SetRestro] = useState({});//restaurant
    const [totalPrice, SetTotalPrice] = useState(0);
    const [cart, setCart] = useState([]);

///restaurant
    useEffect(() => {
        async function fetchData() {
          try {
            const res = await axios.get(`http://localhost:7000/api/restro/${restroId}`);
            console.log(res.data,"resss");
          
            SetRestro(res.data);


          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, []);




///product
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get('http://localhost:7000/api/product');
            // console.log(response.data,"resss");
     const filterProduct=response.data.filter((item)=> item.restaurant===restroId);
          
            SetProduct(filterProduct);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    
        fetchData();
      }, []);

function showProducts(id){
    navigate(`/seerestaurant/${restroId}/addproduct`)
}


const handleplus = (id) => {
  let updatedProduct = [...showProduct];
  updatedProduct[id].quantity = ((updatedProduct[id].quantity || 0) + 1);
  SetProduct(updatedProduct);

  const productToAdd = { ...showProduct[id] };
  setCart([...cart.filter(item => item._id !== productToAdd._id), productToAdd]);
  calculateTotalPrice();
};

const handleminus = (id) => {
  let updatedProduct = [...showProduct];
  updatedProduct[id].quantity = Math.max(((updatedProduct[id].quantity || 0) - 1), 0);
  SetProduct(updatedProduct);

  const productToRemove = { ...showProduct[id] };
  setCart(cart.filter(item => item._id !== productToRemove._id));
  calculateTotalPrice();
};


const addProductToCart = (id) => {
  let updatedProduct = [...showProduct];
  updatedProduct[id].quantity = ((updatedProduct[id].quantity || 0) + 1);;
  SetProduct(updatedProduct);

  const productToAdd = { ...showProduct[id]};
  setCart([...cart, productToAdd]);
  calculateTotalPrice();

};


function calculateTotalPrice(price){
  const totalPrice = showProduct.reduce((acc, curr) => {
    return acc + (curr.price || 0) * (curr.quantity || 0);
  }, 0);
  SetTotalPrice(totalPrice);
}

const viewCart = () => {
  console.log(cart,"cartt aagayi");
  navigate(`/viewCart/${restroId}`, { state: { cart, totalPrice, restro } });
};

  return (<>
   <Navbar/>
<Container>
      <Main>
      
    

<Button onClick={()=>showProducts(restro._id)}>Add Product</Button>
<Button onClick={()=>viewCart()}>View Cart ({cart.length})</Button>
<H1>Restaurant :{restro.name}</H1>
<Img src={restro.image} alt="" />


<Box>

{showProduct.map((res,id)=>{
 
 return(<> 
  <Card   >
<Img2 src={res.image} alt="" />
<H3>{ res.name}</H3>
<Description>{res.descriptions}</Description>
<Quantity> Quantity:{res.quantity||0}
{/* <p>data.quantity || 0</p> */}
{!res.quantity?(
  <><Btn2 onClick={() => addProductToCart(id)}>Add</Btn2></>
):(
  <><Btn3 onClick={() => handleminus(id)} > - </Btn3>
  <Btn3 onClick={() => handleplus(id)} > + </Btn3>
  </>
)}</Quantity>
<Price>Price:   <CurrencyRupeeIcon  fontSize="x-small" />{res.price}</Price>
<Price>TotalPrice:   <CurrencyRupeeIcon  fontSize="x-small" />{res.price*(res.quantity||0)}</Price>
</Card>
 </>)

})
}

</Box>









   
      </Main>
    </Container>
    </>
  )
}

export default AllProducts







//pk_test_51P4JcdSJeGYHz3q7z6UJjoOSgvTRc8BtIgf9IA9iScPSUdjYEJfW7bHin4TMCEzlcNGLgXSxOOMAbsopRK4EqGtA00sm15nMJq



//sk_test_51P4JcdSJeGYHz3q7TolsZEUSbMXVi71YuXlZ8s3mEEwmlkRi6n9QzQMgL0e36TVlAF9B4RjHxp6MvOQgA7zXP4sf00iN4lVMJZ