import React, { useState } from 'react'
import Apple from './COMPONENTS/Apple'
import Top from './COMPONENTS/Top'
import Navbar from './COMPONENTS/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import International from './COMPONENTS/International';
import Techcrus from './COMPONENTS/Techcrus';
import Space from './COMPONENTS/Space';


function App() {

  const[color1 , aftercolor] = useState("light");

    function press(){
      if(color1==="light"){
        aftercolor("dark");
        document.body.style.backgroundColor = "#434343";
      }else{
        aftercolor("light");
        document.body.style.backgroundColor = "#E4E4E4";
      }
    }
  
  return (
    <>
    <BrowserRouter>

      <Navbar theam={color1} click={press} />

        <Routes>

          <Route path="/home" element={<Top />}></Route>
          <Route path="/WallStreet" element={<International />}></Route>
          <Route path="/Tech" element={<Techcrus />}></Route>
          <Route path="/apple" element={<Apple />}></Route>
          <Route path="/space" element={<Space theam={color1} />}></Route>
          

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
