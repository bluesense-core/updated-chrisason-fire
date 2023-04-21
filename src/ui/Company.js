import React from 'react';
import './company.css';
import { Container } from 'react-bootstrap';
// import logo from '../images/about-img/download.png';

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
                            Founded in 1987, Chrisason Fire Protection is one of
                            the country’s leading Fire Protection Engineering
                            companies. We take pride in providing safety
                            solutions and simplifying operational challenges for
                            our clients in public and private sectors across the
                            country + continent. At Chrisason Fire, we
                            understand that no two company problems are the
                            same, we help each of our clients’ design safety
                            solutions tailored specifically to meet their asset
                            needs. Our vast industry and engineering expertise,
                            including safety partners across the globe,
                            emergency technology, and robust installation and
                            commissioning expertise, allows us to address
                            problems in the continent, in unique ways that no
                            one else can.
                        </p>
                        <br />
                        <p className=''>
                            We design, supply, install, commission and service -
                            Fire Fighting Equipment, such as, Fire
                            Extinguishers, Fire Trucks, Fire Hose Reel, Fire
                            Fighting Foam & Powders, Foam, Equipment Sprinkler
                            System, CO2 Total Flooding Systems, Fire Detection
                            System (Smoke, Heat, Flame, Explosion Sensors), Fire
                            Hydrant Equipment, FM 200, Argon, Inergen, Fog
                            Water, Fire Fighting Systems, Dry Powder, Fire
                            Fighting Systems, Portable and Trolley units.
                        </p>
                        <br />
                        {/* <p>
                            We provide fire consultation, fire building designs,
                            fire strategy, and training services of the highest
                            quality to help you build stronger teams, install
                            and commission - UL listed fire equipment. Our
                            clients are fully involved in the processes since we
                            provide personalised solutions to safety problems.
                            Some of our major clients including but not limited
                            to TOTAL Energy, Exxon Mobil, Shell Petroleum
                            Development Company, NNPC, Indorama (EPLC), Notore
                            Chemical Industries (NAFFCON), A few Federal Fire
                            Services, Rivers State Government, Akwa Ibom State
                            Government, etc.
                        </p> */}
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
