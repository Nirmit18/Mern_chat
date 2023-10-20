import { Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react"
import { useToast } from "@chakra-ui/react";
import axios from "axios"
// import {useHistory} from "react-router-dom"; 

const Signup = (props) => {

  const toast=useToast();
//  const history =useHistory();

  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [confirmpassword,setConfirmpassword]=useState();
  // const [pic,setPic]=useState();

  const submitHandler= async ()=>{
    if(!name || !email || !password || !confirmpassword){
      toast({
          title: 'Account created.',
          status:"warning",
          duration: 5000,
          isClosable: true,
          position:"bottom",
      })
      return;
    }

    if(password!==confirmpassword){
      toast({
           title: 'Password do not match',
          status:"warning",
          duration: 5000,
          isClosable: true,
          position:"bottom",
      });
      return;
    }
    console.log(name,email,password);

    try{
      const config = {
        headers:{
          "Content-type":"application/json",
        },
      };
      const {data} = await axios.post("/api/user",
      {
        name,
        email,
        password,
      },
      config
      );
      console.log(data);
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo",JSON.stringify(data));
      // history.push("/chats");
    } catch(error){
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });    
    }

  };

  return (
    <VStack spacing={'7'} w={80} m={'auto'}>
        <FormControl id="first-name" isRequired>
        <FormLabel >Name</FormLabel>
            <Input placeholder="Enter Your name"
            onChange={(e)=>setName(e.target.value)}
            ></Input>
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel >Email</FormLabel>
            <Input placeholder="Enter Your Email"
            onChange={(e)=>setEmail(e.target.value)}
            ></Input>
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel >Password</FormLabel>
            <Input placeholder="Enter Your Password"
            onChange={(e)=>setPassword(e.target.value)}
            type={'password'}
            ></Input>
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <Input placeholder="Confirm Password"
          onChange={(e)=>setConfirmpassword(e.target.value)}
          />
          
          
        </FormControl>


        <Button alignSelf={'stretch'} color={'white'} backgroundColor={'blackAlpha.900'}
        onClick={submitHandler}>Sign up</Button>

    </VStack>
  )
};

export default Signup;
