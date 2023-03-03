import React, { useState } from 'react';
import './header.css';
import Logo from '../images/download.png';
import { NavLink } from 'react-router-dom';
import { Container, Image, Navbar, Offcanvas, Nav } from 'react-bootstrap';

export default function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [active, setActive] = useState('/');
    const handleActive = (e) => setActive(e);

    return (
        <header className='py-1 fixed-top bg-white'>
            <Navbar className='bg-white' expand='lg'>
                <Container>
                    <Navbar.Brand href='/' className='p-0 d-flex'>
                        <Image
                            src={Logo}
                            className='header-logo'
                            alt='Chrisason Logo'
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle
                        aria-controls='responsive-navbar-nav'
                        onClick={handleShow}
                    />
                    <Navbar.Offcanvas
                        id='offcanvas'
                        show={show}
                        onHide={handleClose}
                        placement='end'
                        className='flex-lg-grow-0'>
                        <Offcanvas.Header className='py-4' closeButton />

                        <Offcanvas.Body>
                            <Nav
                                id='header-nav'
                                variant='pills'
                                activeKey={active}
                                defaultActiveKey={active}
                                onSelect={(e) => {
                                    handleActive(e);
                                }}
                                className=' text-uppercase justify-content-between align-items-center'>
                                <Nav.Item className='me-lg-3 mb-lg-0 mb-3'>
                                    <NavLink
                                        onClick={handleClose}
                                        to='/'
                                        className='py-1 px-3'>
                                        Home
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item className='me-lg-3 mb-lg-0 mb-3'>
                                    <NavLink
                                        onClick={handleClose}
                                        to='/about'
                                        className='py-1 px-3'>
                                        Our Company
                                    </NavLink>
                                </Nav.Item>
                                {/* <Nav.Item className='me-lg-3 mb-lg-0 mb-3'>
                        <NavLink
                            onClick={handleClose}
                            to='/blog'
                            className='py-1 px-3'>
                            Blog
                        </NavLink>
                    </Nav.Item> */}
                                <Nav.Item className='me-lg-3 mb-lg-0 mb-3'>
                                    <NavLink
                                        onClick={handleClose}
                                        to='/projects'
                                        className='py-1 px-3'>
                                        Projects
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item className='me-lg-3 mb-lg-0 mb-3'>
                                    <NavLink
                                        onClick={handleClose}
                                        to='/products'
                                        className='py-1 px-3'>
                                        Products
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink
                                        onClick={handleClose}
                                        to='/contact'
                                        className='py-1 px-3'>
                                        Contact
                                    </NavLink>
                                </Nav.Item>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </header>
    );
}
