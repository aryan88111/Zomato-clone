import React,{useState} from 'react'
import { useLocation,useParams  } from 'react-router-dom'
import "../Collection.css"
import Navbar from  "../Components2/Navbar"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import styled from 'styled-components';
import {loadStripe} from '@stripe/stripe-js';



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
// background-color: aliceblue;
display: flex;
padding: 20px;

`;
const Ul=styled.ul ``;


const Button=styled.button `
height: 3vh;
width: 2vw;
background-color:#E03546;
border: none;
color:#fff;
margin-left: 10px;
cursor: pointer;`;

const Img=styled.img `
height: 80px;
width: 80px;
border-radius: 4px;
`;
const Li=styled.li `
min-height: 100px;
width: 600px;
/* background-color: aquamarine; */
display: flex;
align-items: center;
border: 1px solid lightgray;
margin-bottom: 5px;
padding: 5px;
transition: .2s;
&:hover {
  box-shadow: 1px 1px 3px rgb(108, 102, 102);
 
}
`;
const Left=styled.div``;
const Right=styled.div ` 
margin-left: 10px;`;

const Span=styled.span `
margin-left: 5px;
display: flex;
align-items: center;
`;
const Span1=styled.span `
margin-left: 5px;
display: flex;
align-items: center;
font-size:3vh;
font-weight:700;
`;
const Text=styled.p`
font-size:5vh;
`;
const H1=styled.h1 `
// display: flex;
text-align: center;
margin-bottom:-50px;
`;
const H2=styled.h2 `
// display: flex;
text-align: center;
// margin-bottom:-50px;
`;

const Main2=styled.div`
  min-width: 35%;
height: 600px;
// background-color: aquamarine;
display: flex;
align-items: center;
justify-content: center;
border:1px solid lightgray;

`;
const Box=styled.div`
min-height: 300px;
width: 100%;
// background-color: #fd7f00;
padding: 30px;
// border:1px solid gray;
box-shadow: 1px 1px 3px rgb(108, 102, 102);
`;

const Select=styled.select `
max-height: 30px;
width: 180px;
background-color: #fff;
padding: 2px;
margin-top: 10px;`;


const Option=styled.option`
height: 10px;
width: 180px;
background-color: rgb(63, 62, 62);
color: #fff;
`;

const P=styled.p` 
 font-size: 20px;
font-weight: 500;
`;
const Button2=styled.button`
// margin-top: 45px;
margin-left: 15px;
height:30px;
    width: 140px;
    background-color: #E03546;
    border: none;
    color:#fff;
`;
const Button3=styled.button`
margin-top: 45px;
margin-left: 15px;
height:40px;

    width: 90%;
    background-color: #E03546;
    border: none;
    color:#fff;
    border-radius:4px;
    cursor:pointer;
    &:hover{
      box-shadow: 1px 1px 3px rgb(108, 102, 102);
    }
`;
const FlexBox=styled.div`
display:flex;
justify-content: space-between;

`;

const Fbox=styled.div``;












const BillDetailsCard = ({ totalPrice, discount, gstRate, platformChargeRate }) => {
  const gstAmount = (totalPrice * gstRate) / 100;
  const platformCharge = (totalPrice * platformChargeRate) / 100;
  const totalAmount = totalPrice - (totalPrice * discount) / 100 + gstAmount + platformCharge;
      
  return (
    <div className='bill-details-card'>
      <H2>Bill Details</H2>
      <P><FlexBox>
        <Fbox> Total Price: </Fbox>
        <Fbox>{totalPrice}</Fbox>
       
        
        </FlexBox></P>
      <P>
      <FlexBox>
        <Fbox>  Discount: </Fbox>
        <Fbox>{discount}%</Fbox>
       
        
        </FlexBox>
       </P>
      <P>
      <FlexBox>
        <Fbox>  GST: </Fbox>
        <Fbox>({gstRate}%): {gstAmount}</Fbox>
       
        
        </FlexBox>
        
         </P>
      <P>
      <FlexBox>
        <Fbox> Platform Charge : </Fbox>
        <Fbox>({platformChargeRate}%): {platformCharge}</Fbox>
       
        
        </FlexBox>
      
      </P>
      <P>
      <FlexBox>
        <Fbox> Total Amount:</Fbox>
        <Fbox>{totalAmount}</Fbox>
       
        
        </FlexBox>
        </P>
    </div>
  );
};





const ViewCart = () => {
    const location=useLocation();
    const {restroId}=useParams();

    const { cart, totalPrice: initialTotalPrice , restro } = location.state;
    console.log(restro,"qwetyui");

    const [coupon, setCoupon] = useState('');
    const [discount, setDiscount] = useState(0);
    const [savedAmount, setSavedAmount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(initialTotalPrice);
    const [cartItems, setCartItems] = useState(cart);



    const handlePlus = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity++;
        setCartItems(updatedCartItems);
        updateTotalPrice(updatedCartItems);

   
      };
    
      const handleMinus = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity = Math.max(updatedCartItems[index].quantity - 1, 0);
        setCartItems(updatedCartItems);
        updateTotalPrice(updatedCartItems);
      
      };
    
      const updateTotalPrice = (items) => {
        const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalPrice(totalPrice);
      };


      const handleApplyCoupon = () => {
        switch (coupon) {
          case 'MAIGAREEBHU':
            setDiscount(90);
            setSavedAmount((totalPrice * 90) / 100);
            break;
          case 'COUPON1':
            setDiscount(50);
            setSavedAmount((totalPrice * 50) / 100);
            break;
          case 'IAMENGINEER':
            setDiscount(100);
            setSavedAmount((totalPrice * 100) / 100);
            break;
          case 'COUPON2':
            setDiscount(25);
            setSavedAmount((totalPrice * 25) / 100);
            break;
          default:
            alert('Invalid coupon code');
        }
      };
    
      const handleCouponChange = (e) => {
        setCoupon(e.target.value);
      };



      const handlePayment = async()=>{
        const stripe = await loadStripe("pk_test_51P4JcdSJeGYHz3q7z6UJjoOSgvTRc8BtIgf9IA9iScPSUdjYEJfW7bHin4TMCEzlcNGLgXSxOOMAbsopRK4EqGtA00sm15nMJq");
    
        const body = {
            products:cartItems,
            restroId:restroId,
            restro:restro
        }
        const headers = {
            "Content-Type":"application/json"
        }
        const response = await fetch("http://localhost:7000/api/payment",{
            method:"POST",
            headers:headers,
            body:JSON.stringify(body)
        });
    console.log(`response`, response);
        const session = await response.json();
    
        const result = stripe.redirectToCheckout({
            sessionId:session.id
        });
        
        if(result.error){
            console.log(result.error, 'errrrr aayatdgsgef');
        }
    }

  return (
    <>
    <Navbar/>
    <H1>Your Cart</H1>
    <Container>

{
    cart.length===0?(<><Main>
      <Text>Your Cart Is Empty</Text>
      </Main></>):(<> 
    <Main> 
       <Ul>
{cartItems.map((item,index)=>{
    return(<>
    <Li key={index}>

       <Left>{index+1}. <Img src={item.image} alt="" /></Left>
       <Right>
         <Span1>{item.name}</Span1>
         <Span>{item.descriptions}</Span>
        <Span>Quantity:{item.quantity}</Span>
        <Span>Price:<CurrencyRupeeIcon  fontSize="small" />{item.price * item.quantity}</Span>
      < Button onClick={()=>handlePlus(index)}>+</Button>
      {item.quantity}
        <Button onClick={()=>handleMinus(index)}>-</Button>
        </Right>
    </Li>
    
    </>)
})
}

        </Ul></Main>   </>)
}

{/* http://localhost:3000/viewCart/660c0f0416daf0c8fa781d17 */}

<Main2>
  <Box>
  <H2>Your Total Bill</H2>
  <P>
    
  <FlexBox>
        <Fbox> Total Price:</Fbox>
        <Fbox><CurrencyRupeeIcon  fontSize="x-small" /> {totalPrice}</Fbox>
       
        
        </FlexBox>
    </P>
          {discount > 0 && <P>
            <FlexBox>
        <Fbox>  Discount:</Fbox>
        <Fbox><CurrencyRupeeIcon  fontSize="x-small" /> {discount}%</Fbox>
       
        
        </FlexBox>
          </P>}
          {savedAmount > 0 && <P>
            <FlexBox>
        <Fbox>  You saved:</Fbox>
        <Fbox><CurrencyRupeeIcon  fontSize="x-small" />{savedAmount}</Fbox>
       
        
        </FlexBox>
            </P>}
          <P>
          <FlexBox>
        <Fbox>  Total Price after Discount:</Fbox>
        <Fbox><CurrencyRupeeIcon  fontSize="x-small" />{totalPrice - (totalPrice * discount) / 100}</Fbox>
       
        
        </FlexBox>
            
            </P>
         
            <Select value={coupon} onChange={handleCouponChange}>
              <Option value="">Select Coupon</Option>
              <Option value="MAIGAREEBHU">MAIGAREEBHU - 90% off</Option>
              <Option value="COUPON1">COUPON1 - 50% off</Option>
              <Option value="IAMENGINEER"> IAMENGINEER- 100% off</Option>
              <Option value="COUPON2">COUPON2 - 25% off</Option>
            </Select>
            <Button2 onClick={handleApplyCoupon}>Apply Coupon</Button2>

               <BillDetailsCard
            totalPrice={totalPrice}
            discount={discount}
            gstRate={12}
            platformChargeRate={1}
          />
            <Button3 onClick={handlePayment}>PAY NOW</Button3>
          
  </Box>

</Main2>

    </Container>
  
    
    </>
  )
}

export default ViewCart