import React, { useState } from 'react';
import './header.css';
import Logo from '../images/download.png';
import { NavLink } from 'react-router-dom';
import { Container, Image, Navbar, Offcanvas, Nav } from 'react-bootstrap';
import TC from '../files/Chrisason Fire - Technical Capabilities .pdf';
import Profile from '../files/Chrisason Fire Protection Profile - 2022.pdf';
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

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

                    <Nav
                        id='header-nav'
                        variant='pills'
                        activeKey={active}
                        defaultActiveKey={active}
                        onSelect={(e) => {
                            handleActive(e);
                        }}
                        className='d-lg-flex d-none text-uppercase justify-content-between align-items-center'>
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
                    <Navbar.Offcanvas
                        id='offcanvas'
                        show={show}
                        onHide={handleClose}
                        placement='end'
                        className='flex-lg-grow-0 d-lg-none d-block'>
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
                                className='justify-content-between align-items-center'>
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

                            <footer className='text-white py-4 mt-5'>
                                <Container>
                                    <div className='d-flex flex-column justify-content-between align-items-center'>
                                        <div>
                                            <p className='details mt-4 mb-1 fw-semibold'>
                                                Email: info@chrisasonfire.com
                                            </p>
                                            <p className='details my-1 fw-semibold'>
                                                Work: +234 806 578 4615
                                            </p>

                                            <p className='details mt-4 mb-1'>
                                                <a
                                                    href={TC}
                                                    target='_blank'
                                                    rel='noreferrer'>
                                                    View Company's Technical
                                                    Capabilities
                                                </a>
                                            </p>

                                            <p className='details my-1'>
                                                <a
                                                    href={Profile}
                                                    target='_blank'
                                                    rel='noreferrer'>
                                                    View Company Profile
                                                </a>
                                            </p>
                                        </div>

                                        <div>
                                            <div className='social-links d-flex py-sm-0 pt-4 justify-content-center align-items-end'>
                                                <a
                                                    href='https://www.linkedin.com/company/chrisasonfire/'
                                                    target='_blank'
                                                    rel='noopener noreferrer'>
                                                    <FaLinkedin className='social-icon me-sm-3 mx-3' />{' '}
                                                </a>

                                                <a
                                                    href='https://x.com/chrisasonfire'
                                                    target='_blank'
                                                    rel='noopener noreferrer'>
                                                    <FaSquareXTwitter className='social-icon me-sm-3 mx-3' />{' '}
                                                </a>

                                                <a
                                                    href='https://www.facebook.com/chrisasonfire'
                                                    target='_blank'
                                                    rel='noopener noreferrer'>
                                                    <FaFacebookSquare className='social-icon me-sm-0 ms-sm-3 mx-3' />{' '}
                                                </a>
                                            </div>

                                            <p className='copyright my-2 text-center'>
                                                © 1987 - 2023. Chrisason Fire
                                                Protection LTD. All Rights
                                                Reserved.
                                            </p>
                                        </div>
                                    </div>
                                </Container>
                            </footer>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </header>
    );
}
