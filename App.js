import React, { Component } from 'react'
import Header from './Component/Header'
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from './Component/Home';
import Checkout from './Component/Checkout';
import Login from './Component/Login';


export default class App extends Component {
  render() {
    return (
      <div className='App'>
      <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/login" element={<Login/>} />
       
      </Routes>

      </BrowserRouter>
     
      
      </div>
    )
  }
}
