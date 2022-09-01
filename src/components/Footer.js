import React from 'react';
import './footer.css';
import Footer1 from '../images/footer-img/foot1.png';
import Footer2 from '../images/footer-img/foot2.jfif';
import Footer3 from '../images/footer-img/foot3.jfif';
import Footer4 from '../images/footer-img/foot4.jfif';
import Footer5 from '../images/footer-img/foot5.png';
import Footer6 from '../images/footer-img/foot6.gif';
import Footer7 from '../images/footer-img/foot7.png';
import Footer8 from '../images/footer-img/foot8.jfif';

import { Image } from 'react-bootstrap';
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer id='footer' className=''>
            <section className='white-banner bg-white py-4 px-4 d-flex flex-md-row flex-column justify-content-center align-items-md-end align-items-center'>
                <div className='me-md-5 me-0 mb-md-0 mb-3 text-md-start text-center'>
                    <p>Email: info@chrisasonfire.com</p>
                    <p>Work: +234 806 578 4615</p>
                </div>

                <div className='social-banner d-flex flex-column align-items-center'>
                    <div className='social pb-2  d-flex justify-content-between align-items-center'>
                        <a
                            href='https://www.facebook.com/chrisasonfire'
                            target='_blank'
                            className='text-decoration-none'
                            rel='noopener noreferrer'>
                            <FaFacebookF className='social-icon' />
                        </a>
                        <a
                            href='https://twitter.com/chrisasonfire'
                            target='_blank'
                            className='text-decoration-none ms-3'
                            rel='noopener noreferrer'>
                            <FaTwitter className='social-icon' />
                        </a>
                        <a
                            href='https://www.linkedin.com/company/chrisasonfire/'
                            target='_blank'
                            className='text-decoration-none ms-3'
                            rel='noopener noreferrer'>
                            <FaLinkedin className='social-icon' />
                        </a>
                    </div>

                    <p className='text-center'>
                        © 1987 - 2022. Chrisason Fire Protection LTD. All Rights
                        Reserved.
                    </p>
                </div>
            </section>

            <section className='logo-banner py-3 px-4 d-flex justify-content-center align-items-center'>
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
            </section>

            <section className='black-banner py-2 '></section>
        </footer>
    );
}
