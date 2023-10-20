import React, { useEffect } from "react"
import axios from 'axios'



const ChatPage = (props) => {

const fetchChats = async ()=>{
  const data= await axios.get('/api/chat');

  console.log(data);
};
 
useEffect (()=>{
  fetchChats();
},[]);



  return (
    <div>
      chatpage11
    </div>
  )
};

export default ChatPage;
