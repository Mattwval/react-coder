import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import Cart from "../Cart/Cart";
import { BsPaintBucket } from "react-icons/bs";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function NavBar() {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to='/' style={{ textDecoration: 'none' }} >
                    <Navbar.Brand href="#home"><BsPaintBucket color='#BB544C' /><text style={ {color: '#BB544C'}}>Rem</text>edios Lab</Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <Nav.Link href="#home">INICIO</Nav.Link>
                        </Link>
                        <Nav.Link href="#link">Blog</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Hidrolatos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Aceites</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <Link to='/catalogo' style={{ textDecoration: 'none' }} activeClassName='active'>
                                <NavDropdown.Item href="#action/3.4">Todos</NavDropdown.Item>
                            </Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Cart items="10"/>
        </Navbar>
    )
}

export default NavBar