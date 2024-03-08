import React from 'react';
import './footer.css';
// import Logo from '../images/download.png';

// import Footer1 from '../images/footer-img/foot1.png';
// import Footer2 from '../images/footer-img/foot2.jfif';
// import Footer3 from '../images/footer-img/foot3.jfif';
// import Footer4 from '../images/footer-img/foot4.jfif';
// import Footer5 from '../images/footer-img/foot5.png';
// import Footer6 from '../images/footer-img/foot6.gif';
// import Footer7 from '../images/footer-img/foot7.png';
// import Footer8 from '../images/footer-img/foot8.jfif';
import TC from '../files/Chrisason Fire - Technical Capabilities .pdf';
import Profile from '../files/Chrisason Fire Protection Profile - 2022.pdf';

import { Container, Nav } from 'react-bootstrap';
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { FaSquareXTwitter } from 'react-icons/fa6';

export default function Footer() {
    const date = new Date()
    return (
        // <footer id='footer' className=''>
        //     <section className='white-banner bg-white py-4 px-4 d-flex flex-md-row flex-column justify-content-center align-items-md-end align-items-center'>
        //         <div className='me-md-5 me-0 mb-md-0 mb-3 text-md-start text-center'>
        //             <p>Email: info@chrisasonfire.com</p>
        //             <p>Work: +234 806 578 4615</p>
        //             <p className=''>
        //                 <a href={TC} target='_blank' rel='noreferrer'>
        //                     View Company's Technical Capabilities
        //                 </a>
        //             </p>

        //             <p className=''>
        //                 <a href={Profile} target='_blank' rel='noreferrer'>
        //                     View Company Profile
        //                 </a>
        //             </p>
        //         </div>

        //         <div className='social-banner d-flex flex-column align-items-center'>
        //             <div className='social pb-2  d-flex justify-content-between align-items-center'>
        //                 <a
        //                     href='https://www.facebook.com/chrisasonfire'
        //                     target='_blank'
        //                     className='text-decoration-none'
        //                     rel='noopener noreferrer'>
        //                     <FaFacebookF className='social-icon' />
        //                 </a>
        //                 <a
        //                     href='https://twitter.com/chrisasonfire'
        //                     target='_blank'
        //                     className='text-decoration-none ms-3'
        //                     rel='noopener noreferrer'>
        //                     <FaTwitter className='social-icon' />
        //                 </a>
        //                 <a
        //                     href='https://www.linkedin.com/company/chrisasonfire/'
        //                     target='_blank'
        //                     className='text-decoration-none ms-3'
        //                     rel='noopener noreferrer'>
        //                     <FaLinkedin className='social-icon' />
        //                 </a>
        //             </div>

        //             <p className='text-center'>
        //                 © 1987 - 2022. Chrisason Fire Protection LTD. All Rights
        //                 Reserved.
        //             </p>
        //         </div>
        //     </section>
        //     <section className='black-banner py-2 '></section>
        // </footer>

        <footer className='text-white py-4'>
            <Container>
                <div className='d-flex flex-sm-row flex-column justify-content-between align-items-center'>
                    <div>
                        {/* <Navbar.Brand href='/'>
                            <Image
                                src={Logo}
                                className='footer-logo'
                                alt='Chrisason Logo'
                            />
                        </Navbar.Brand> */}

                        <p className='details mt-4 mb-1 fw-semibold'>
                            Email: info@chrisasonfire.com
                        </p>
                        <p className='details my-1 fw-semibold'>
                            Work: +234 806 578 4615
                        </p>

                        <p className='details mt-4 mb-1'>
                            <a href={TC} target='_blank' rel='noreferrer'>
                                View Company's Technical Capabilities
                            </a>
                        </p>

                        <p className='details my-1'>
                            <a href={Profile} target='_blank' rel='noreferrer'>
                                View Company Profile
                            </a>
                        </p>

                        <p className='copyright my-1 d-sm-block d-none'>
                            © 1987 - 2023. Chrisason Fire Protection LTD. All
                            Rights Reserved.
                        </p>
                    </div>

                    <div>
                        <div className='social-links d-flex py-sm-0 pt-4 justify-content-sm-end justify-content-center align-items-end'>
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

                        <Nav
                            id='footer-nav'
                            className='flex-wrap justify-content-md-end justify-content-center my-4'>
                            <Nav.Item>
                                <NavLink to='/contact' className='py-0 me-4'>
                                    Contact
                                </NavLink>
                            </Nav.Item>

                            <Nav.Item>
                                <NavLink to='/about' className='py-0'>
                                    About
                                </NavLink>
                            </Nav.Item>

                            {/* <Nav.Item>
                                <NavLink to='/terms' className='py-0 px-3'>
                                    Terms of Use
                                </NavLink>
                            </Nav.Item>

                            <Nav.Item>
                                <NavLink
                                    to='/privacy-policy'
                                    className='py-0 px-3'>
                                    Privacy Policy
                                </NavLink>
                            </Nav.Item> */}
                        </Nav>

                        <p className='copyright my-4 d-sm-none d-block text-center'>
                            © 1987 - {date.getFullYear()}. Chrisason Fire Protection LTD. All
                            Rights Reserved.
                        </p>
                    </div>
                </div>

                {/* <section className='logo-banner py-3 px-4 d-flex justify-content-center align-items-center'>
                    <div className='img-div d-flex justify-content-between align-items-center'>
                        <Image src={Footer1} alt='Logo 1' />
                        <Image src={Footer2} alt='Logo 2' />
                        <Image src={Footer3} alt='Logo 3' />
                        <Image src={Footer4} alt='Logo 4' />
                        <Image src={Footer5} alt='Logo 5' />
                        <Image src={Footer6} alt='Logo 6' />
                        <Image src={Footer7} alt='Logo 7' />
                        <Image src={Footer8} alt='Logo 8' />
                    </div>
                </section> */}
            </Container>
        </footer>
    );
}
