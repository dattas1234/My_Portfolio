import './App.scss';
import React from 'react';
import Layout from './components/layout/Layout';
import { Route } from 'react-router-dom';
import {Routes} from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import About from './components/about/About';
import Contact from './components/contact/Contact'
const App=()=>{
  return (<> 
  
  { 
  
   <Routes>
  <Route path='/' element={<Layout/>} >
    <Route index element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>

    </Route>
  {/* <h1>hii</h1> */}

   </Routes> 
 }
</>
    );
}


export default App;