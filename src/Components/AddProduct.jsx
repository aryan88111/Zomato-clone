
import React, { useState } from 'react';
import axios from "axios"
import styled from 'styled-components';
import { useParams } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js';
const supabaseUrl="https://nkbbpftwnuhsveggmyzz.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rYmJwZnR3bnVoc3ZlZ2dteXp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwMTI2NTEsImV4cCI6MjAyNjU4ODY1MX0.ROe0bBcn0wkB2MAqcMjw915SDW_hGMd1bR78cmMelQo"
const supabase = createClient(supabaseUrl, supabaseKey);

const AddProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Label = styled.label`
  
  font-weight: bold;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  margin-bottom: 5px;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c82333;
  }
`;
const H2=styled.h2`
text-align:center;
color:#C82333;`;

const AddProducts = () => {
  
const {restroId}=useParams();

  const [formData,setFormData]=useState({
    name:"",
    descriptions:"",
    rating:"",
    price: "",
    image:""

})
const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
const handleImageChange=(e)=>{
    const file=e.target.files[0];
    console.log(file);
    setFormData({...formData,image:file})
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Upload image to Supabase
      const { data, error } = await supabase.storage.from('zomato').upload('food_images/' + formData.image.name, formData.image);
      if (error) {
        throw error;
      }
      // https://fzdfcdjjbsnwmdvxhfrh.supabase.co/storage/v1/object/public/zomato/restaurant_images/india-flag.jpg
      // Get the URL of the uploaded image
      const imageUrl = `${supabaseUrl}/storage/v1/object/public/zomato/food_images/${formData.image.name}`;
      console.log(imageUrl,"blocking zzzzzzz");
  
      // Save restaurant data to MongoDB with image URL
      const response = await axios.post('http://localhost:7000/api/product', { ...formData, image:imageUrl,restroId });
      if (response) {
        alert('Product added successfully');
        // Reset form fields
     
      } else {
        alert('Failed to add product');
      }
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product');
    }
  };

 

  return (
    <AddProductContainer>
      <Form onSubmit={handleSubmit}>
        <H2>Add Product</H2>
        
          <Input
            type="text"
          
            placeholder='name'
            name="name"
            value={formData.value}
        onChange={handleChange}
            required
          />
        
          <Input
            type="text"
          
            placeholder=' Description'
            name="descriptions"
            value={formData.value}
        onChange={handleChange}
            required
          />
        
         
        
          <Input
            type="text"
           
            placeholder='Price'
            name='price'
            value={formData.value}
        onChange={handleChange}
            required
          />
        
          <Input
            type="file"
            accept="image/*"
            name='image'
            onChange={handleImageChange}
            required
          />
        <Button type="submit">Submit</Button>
      </Form>
    </AddProductContainer>
  );
};

export default AddProducts;

