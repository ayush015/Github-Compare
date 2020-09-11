import React from "react";
import {Navbar} from "react-bootstrap";


const Header = () =>{
 return <div>
    <Navbar bg="dark" expand="lg">
  <Navbar.Brand href="#" className="mb-3 mt-3"  style={{color:"#fff"}}>Github Compare</Navbar.Brand>
</Navbar>
 </div>
}

export default Header ;