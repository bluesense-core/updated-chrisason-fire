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
        <header
            id='header'
            className='bg-white d-flex flex-lg-column flex-row '>
            <div className='navbar-logo bg-white p-0 d-flex flex-md-row flex-column justify-content-lg-start justify-content-center  align-items-lg-end align-items-center'>
                <Image src={Logo} className='header-logo' alt='Chrisaon Logo' />
                <h1 className='mb-lg-4 me-lg-5 pb-lg-2 p-md-0 py-2 m-0 fs-lg-3 fs-5'>
                    CHRISASON FIRE PROTECTION
                </h1>
            </div>

            <hr className='m-0 w-75 mx-auto d-lg-block d-none' />
            <div className='d-flex justify-content-center'>
                <Navbar
                    className='bg-white py-2  d-flex justify-content-center align-items-center'
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
                                    navbarScroll
                                    activeKey={active}
                                    defaultActiveKey={active}
                                    onSelect={(e) => {
                                        handleActive(e);
                                    }}
                                    className=' d-flex p-0 px-5 pb-1 justify-content-between align-items-center'>
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
                                            to='/projects'
                                            className=''>
                                            Projects
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
                                    {/* <Nav.Item>
                                        <NavLink
                                            onClick={handleClose}
                                            to='/media'
                                            className=''>
                                            Media
                                        </NavLink>
                                    </Nav.Item>*/}
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
            </div>
        </header>
    );
}
