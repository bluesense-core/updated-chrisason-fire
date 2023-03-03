import React from 'react';
import './company.css';
import { Container } from 'react-bootstrap';
import logo from '../images/about-img/download.png';

export default function Company() {
    return (
        <main id='about'>
            <section className='about-hero py-5 d-flex justify-content-center align-items-center'>
                <Container>
                    <h1 className='px-4 py-4 mx-auto text-center m-0'>
                        About Chrisason
                    </h1>
                </Container>
            </section>

            <section className='who-we-are py-5'>
                <Container className='d-flex flex-md-row flex-column justify-content-between align-items-center py-2'>
                    {/* <img src={logo} alt='' className='mb-3' /> */}

                    <div className='wwa-text'>
                        <h2 className='mb-md-4 mb-2'>Who We Are</h2>
                        <p className=''>
                            Chrisason Fire is an indigenous Nigerian firm
                            involved in importation, assembling, supply,
                            installation and maintenance of various types of
                            Fire Protection, Fire Fighting, Engineering, Fire
                            Detection Equipment and Systems throughout the
                            nation.
                        </p>
                        <p className=''>
                            We appreciate and associate with the Health, Safety,
                            Environment Security and Fire Prevention efforts of
                            our major clients including but not limited to Mobil
                            Producing Nigeria Unlimited, Shell Petroleum
                            Development Company of Nigeria Limited, NNPC, EPCL
                            (INDORAMA), Notore Chemical Industries (NAFFCON)
                            etc.
                        </p>
                    </div>
                </Container>
            </section>

            <section className='about-footer d-flex justify-content-center align-items-center'>
                <Container className='red-box'>
                    <h3 className='mb-5'>More About Us:</h3>
                    <div className='d-flex justify-content-between align-items-start flex-md-row flex-column '>
                        <div className='footer-left'>
                            <h5 className='mb-3'>History:</h5>
                            <p>
                                Traditionally in the business of importing
                                security and fire protection equipment and
                                installations the history of the company dates
                                back to 1987. CHRISTIAN R. IYIRE the actual
                                Chairman of the board of the company, started
                                with his associated foreign partners - Lindsey
                                Jones (UK) to import fire extinguishers and
                                security equipment to the country.
                            </p>
                            <p>
                                Chrisason quickly grew with the analysis of fire
                                risks and study of the required protection,
                                followed by engineering, installation, tests and
                                maintenance of the equipment and necessary
                                systems for a reliable security and fire
                                protection system.{' '}
                            </p>
                        </div>

                        <div className='footer-right mt-md-0 mt-5'>
                            <h5 className='mb-3'>Our latest breakthrough:</h5>
                            <p>
                                Today Chrisason Fire leads the nation providing
                                first class fire protection and security
                                equipment to State Governments, International
                                Oil Companies, Universities and other
                                organisations. Growing from humble beginnings,
                                we have maintained the same approachable but
                                quality service that has helped us build a
                                formidable client base.
                            </p>
                            <p>
                                Through our three decades of expertising in the
                                safety industry, we have affiliation with major
                                Security and fire equipment manufacturers
                                overseas from where we obtain our technical
                                support such as, Angus FIRE ARMOUR Ltd, (UK),
                                CHUBB FIRE (UK), PYRENE, BOC GAS, WILLIAMSONS
                                (UK), BROOKS EQUIPMENT INC. (USA), NOHA (NORWAY)
                                & COFFCO (INDIA) to mention but a few.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
