import React from 'react';
import './footer.css';
import Footer1 from '../images/footer-img/foot1.webp';
import Footer2 from '../images/footer-img/foot2.webp';
import Footer3 from '../images/footer-img/foot3.webp';
import Footer4 from '../images/footer-img/foot4.webp';
import Footer5 from '../images/footer-img/foot5.webp';
import Footer6 from '../images/footer-img/foot6.webp';
import Footer7 from '../images/footer-img/foot7.webp';
import { Image } from 'react-bootstrap';
import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer id='footer'>
            <section className='grey-banner py-4 px-4 d-flex flex-md-row flex-column justify-content-between align-items-center'>
                <div className='text-md-start text-center'>
                    <h6>CHRISASON FIRE PROTECTION LTD</h6>
                    <p>Over 260,000hours expertise in Fire Engineering</p>
                    <p>
                        Since 1987 we have been providing Africa with easy
                        access to safety technology
                    </p>
                </div>

                <div className='m-md-0 mt-3'>
                    <p>Email: info@chrisasonfire.com</p>
                    <p>Work: +234 806 578 4615</p>
                </div>
            </section>

            <section className='logo-banner px-4 d-flex justify-content-between align-items-center'>
                <Image src={Footer1} alt='Logo 1' />
                <Image src={Footer2} alt='Logo 2' />
                <Image src={Footer3} alt='Logo 3' />
                <Image src={Footer4} alt='Logo 4' />
                <Image src={Footer5} alt='Logo 5' />
                <Image src={Footer6} alt='Logo 6' />
                <Image src={Footer7} alt='Logo 7' />
            </section>

            <section className='red-banner py-2 px-4 d-flex flex-md-row flex-column justify-content-between align-items-center'>
                <div className='text-md-start text-center'>
                    <p>
                        Terms of use | Privacy Policy | © 1987 - 2021. Chrisason
                        Fire Protection LTD. All Rights Reserved.
                    </p>
                </div>

                <div className='m-md-0 mt-3 social d-flex justify-content-between align-items-center'>
                    <FaLinkedin />
                    <FaTwitter />
                    <FaYoutube />
                </div>
            </section>
        </footer>
    );
}
