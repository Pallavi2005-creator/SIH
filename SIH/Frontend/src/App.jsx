import React from 'react';
import Home from './home/Home'
import Hotels from './hotels/Hotels';


import {Route,Routes} from "react-router-dom"
import Signup from './components/Signup';
import Login from './components/Login'

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Hotels" element={<Hotels/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Sign Up" element={<Signup/>}/>
      </Routes>
    </>
  );
}

export default App;
