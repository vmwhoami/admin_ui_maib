import React from 'react';
import { TiChartPie } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import {
  Navbar, Nav,
} from 'react-bootstrap';

const NavBar = () => (
  <Navbar variant="green">
    <Navbar.Brand className="logo d-flex ml-4 text-white" href="#home"><TiChartPie /></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link className="text-white" href="#home">VMWHOAMI</Nav.Link>
    </Nav>
    <Link className="text-white text-uppercase mr-4" to="/">Logout</Link>
  </Navbar>
);

export default NavBar;
