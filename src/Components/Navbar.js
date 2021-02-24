import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import '../assets/css/estilos.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="danger" variant="dark">

  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
  <ReactBootStrap.Nav className="mr-auto"> 
  <Link to="/Home">
    <ReactBootStrap.Nav.Link href="#Home">Inicio</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/CRUD">
    <ReactBootStrap.Nav.Link href="#CRUD">Datos por CCAA</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/DatosGlobales">
    <ReactBootStrap.Nav.Link href="#DatosGlobales">Datos Globales</ReactBootStrap.Nav.Link>
    </Link>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    <ReactBootStrap.FormText className="navNombre">Yaiza Fritis Calvo</ReactBootStrap.FormText>

    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;