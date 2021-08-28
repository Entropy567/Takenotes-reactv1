import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./Navbar/Navbar.jsx";

//import NavbarMob from "./Navbar/NavbarMob.jsx";
import MainCon from "./MainCon/MainCon.jsx";
//import MainConMob from "./MainConMob/MainConMob.jsx";
if((typeof(document.querySelector(".note"))!=="undefined")&&(document.querySelector(".note")!==null))
{document.querySelector(".note").style.backgroundColor="black";}
ReactDOM.render(
  <div>
    <Navbar/>
    <MainCon/>
  </div>,
  document.getElementById('root')
);
