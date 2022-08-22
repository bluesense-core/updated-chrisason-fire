import React, { useState } from 'react';
import './header.css';
import Logo from '../images/logo.webp';
import { NavLink } from 'react-router-dom';
import { Container, Image, Navbar, Offcanvas, Nav } from 'react-bootstrap';

export default function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [active, setActive] = useState('/');
    const handleActive = (e) => setActive(e);

    return (
        <header
            id='header'
            className='bg-white d-flex flex-lg-column flex-row justify-content-between '>
            <div className='navbar-logo bg-white py-3 d-flex justify-content-center align-items-center'>
                <Navbar.Brand
                    href='/'
                    className='p-0 m-0 d-flex justify-content-end align-items-center'>
                    <Image
                        src={Logo}
                        className='header-logo'
                        alt='Chrisaon Logo'
                    />
                </Navbar.Brand>
                <h1>CHRISASON FIRE PROTECTION</h1>
            </div>

            <Navbar
                className='bg-white py-4 d-flex justify-content-center align-items-center'
                expand='lg'>
                <div>
                    <Navbar.Toggle
                        aria-controls='responsive-navbar-nav'
                        onClick={handleShow}
                        className='me-2'
                    />
                    <Navbar.Offcanvas
                        id='offcanvas'
                        show={show}
                        onHide={handleClose}
                        placement='start'
                        className='flex-lg-grow-0'>
                        <Offcanvas.Header className='py-4' closeButton />

                        <Offcanvas.Body>
                            <Nav
                                id='header-nav'
                                variant=''
                                activeKey={active}
                                defaultActiveKey={active}
                                onSelect={(e) => {
                                    handleActive(e);
                                }}
                                className=' d-flex justify-content-between align-items-center'>
                                <Nav.Item>
                                    <NavLink
                                        onClick={handleClose}
                                        to='/'
                                        className=''>
                                        Home
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink
                                        onClick={handleClose}
                                        to='/about'
                                        className=''>
                                        Our Company
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink
                                        onClick={handleClose}
                                        to='/operations'
                                        className=''>
                                        Operations
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink
                                        onClick={handleClose}
                                        to='/products'
                                        className=''>
                                        Products
                                    </NavLink>
                                </Nav.Item>
                                <Nav.Item>
                                    <NavLink
                                        onClick={handleClose}
                                        to='/contact'
                                        className=''>
                                        Contact
                                    </NavLink>
                                </Nav.Item>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </div>
            </Navbar>
        </header>
    );
}
