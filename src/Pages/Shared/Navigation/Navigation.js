import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top" >
                <Container>
                    <Navbar.Brand href="#home">Doctor's Portal</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} style={{ textDecoration: 'none', color: 'white' }} to='/home'>Home</Nav.Link>
                        <Nav.Link as={Link} style={{ textDecoration: 'none', color: 'white' }} to='/appointment'>Appointment</Nav.Link>
                        {
                            user?.email ?
                                <Nav>
                                    <Nav.Link as={Link} style={{ textDecoration: 'none', color: 'white' }} to='/dashboard'>Dashboard</Nav.Link>
                                    <Nav.Link style={{ textDecoration: 'none', color: 'white' }} onClick={logOut} variant='primary'>Logout</Nav.Link>
                                </Nav> :
                                <Nav.Link as={Link} style={{ textDecoration: 'none', color: 'white' }} to='/login'>Login</Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};


export default Navigation;