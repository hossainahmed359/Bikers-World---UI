import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <>
            <Navbar className="navigation" expand="lg">
                <Container fluid>
                    <NavLink to="/home">Bikers World</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/explore">Explore</NavLink>
                            <NavLink to="/purchase">Purchase</NavLink>
                            <NavLink to="/dashboard">Dashboard</NavLink>
                            <NavLink to="/login">Login</NavLink>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Navigation;