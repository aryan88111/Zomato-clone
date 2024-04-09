import React, { useState } from 'react';
import axios from "axios"
import styled from 'styled-components';
// import { useParams } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js';
const supabaseUrl="https://nkbbpftwnuhsveggmyzz.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rYmJwZnR3bnVoc3ZlZ2dteXp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwMTI2NTEsImV4cCI6MjAyNjU4ODY1MX0.ROe0bBcn0wkB2MAqcMjw915SDW_hGMd1bR78cmMelQo"
const supabase = createClient(supabaseUrl, supabaseKey);

const AddRestaurantForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 10% auto;
  border:0.5px solid gray;
  padding:2%;
  border-radius: 4px;
`;

const InputField = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #E03546;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;


const Heading= styled.h1 `
display: flex;
color: #E03546;
margin: 5% auto;
`;

const AddRestaurant = () => {
  
  // let {restroId} = useParams();
 
  const [formData,setFormData]=useState({
    name:"",
    descriptions:"",
    address:"",
    Contact_No: "",
    image:""

})
const handleChange=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value})
}

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      // Upload image to Supabase
      const { data, error } = await supabase.storage.from('zomato').upload('product_images/' + formData.image.name, formData.image);
      if (error) {
        throw error;
      }
   
      const imageUrl = `${supabaseUrl}/storage/v1/object/public/zomato/product_images/${formData.image.name}`;
      console.log(imageUrl,"blocking zzzzzzz");
   
    const res=await axios.post("http://localhost:7000/api/restro", { ...formData, image:imageUrl });
    console.log('Submitted:');


    if (res) {
      alert('Restaurant added successfully');
      // Reset form fields
   
    } else {
      alert('Failed to add restaurant');
    }
  } catch (error) {
    console.error('Error adding restaurant:', error);
    alert('Failed to add restaurant');
  }




    // Reset form fields
   
  };


  // JutlJ8j3mhh6NeQ8
  const handleImageChange=(e)=>{
    const file=e.target.files[0];
    console.log(file);
    setFormData({...formData,image:file})
  }

  return (
    <AddRestaurantForm onSubmit={handleSubmit}>
      <Heading>Add Restaurant</Heading>
      <InputField
        type="text"
        placeholder="Restaurant Name"
        name="name"
        value={formData.value}
        onChange={handleChange}
        required
      />
      <TextArea
        placeholder="Description"
        name="descriptions"
        value={formData.value}
        onChange={handleChange}
        required
      />
      <InputField
        type="tel"
        placeholder="Contact Number"
        name="Contact_No"
        value={formData.value}
        onChange={handleChange}
        required
      />
      <InputField
        type="text"
        placeholder="Address"
        name="address"
        value={formData.value}
        onChange={handleChange}
        required
      />
      <InputField
        type="file"
        accept="image/*"
        placeholder="Image"
        name='image'
       
        onChange={handleImageChange}
        required 
      />
      <SubmitButton type="submit">Add Restaurant</SubmitButton>
    </AddRestaurantForm>
  );
};

export default AddRestaurant;


// https://nkbbpftwnuhsveggmyzz.supabase.co

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rYmJwZnR3bnVoc3ZlZ2dteXp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwMTI2NTEsImV4cCI6MjAyNjU4ODY1MX0.ROe0bBcn0wkB2MAqcMjw915SDW_hGMd1bR78cmMelQo