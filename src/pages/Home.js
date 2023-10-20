import React from "react"
import { Box, Container, Heading, HStack, Input, VStack,Text, Button,Tab,TabList,TabPanels,Tabs,TabPanel, Flex} from "@chakra-ui/react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Login from "../components/authentication/Login";
import Signup from "../components/authentication/Signup";




const Home = (props) => {
  return (
    <Container maxW={'xl'}  p={"10"} 
    
textAlign={'center'}    >


          
          <Tabs variant='soft-rounded' colorScheme='blackAlpha'>
            <TabList>
              <Tab width="50%">Login</Tab>
              <Tab width="50%">Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Heading mb={'5'}>Login</Heading>
                <Login />
              </TabPanel>
              <TabPanel>
              <Heading mb={'5'}>Sign Up</Heading>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
          
          

      
    
    
        
        
        
    
     
    
    </Container>
  )
};

export default Home;
