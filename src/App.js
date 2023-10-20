// import logo from './logo.svg';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
 import React from 'react';
import Home from './pages/Home';

import ChatPage from './pages/ChatPage';





function App() {
  
  
  return (
    <>
    <Route path="/" component={Home} exact />
    <Route path="/chats" component={ChatPage} exact/>
    



      
    </>
  );
}

export default App;
