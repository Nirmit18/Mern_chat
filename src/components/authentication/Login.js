import { Button, FormControl, FormLabel, Input, VStack, useToast } from "@chakra-ui/react";
import React, { useState } from "react"
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = (props) => {

  const toast=useToast();
  const history=useHistory();
 
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();



  const submitHandler = async () => {
    
    if (!email || !password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );

      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      // setUser(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      // setLoading(false);
      history.push("/chats");
    } catch (error) {
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

        

        <Button alignSelf={'stretch'} color={'white'} backgroundColor={'blackAlpha.900'}
        onClick={submitHandler}>Login</Button>

    </VStack>
  )
};

export default Login;
