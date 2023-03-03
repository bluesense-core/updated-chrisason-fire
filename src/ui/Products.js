import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './products.css';
import pro1 from '../images/product-img/pro1.png';
import pro2 from '../images/product-img/pro2.png';
import pro3 from '../images/product-img/pro3.png';
import pro4 from '../images/product-img/pro4.png';
import pro5 from '../images/product-img/pro5.png';
import pro6 from '../images/product-img/pro6.png';
import pro7 from '../images/product-img/pro7.png';
import pro8 from '../images/product-img/pro8.png';
import pro9 from '../images/product-img/pro9.png';
import pro10 from '../images/product-img/pro10.png';
import pro11 from '../images/product-img/pro11.png';
import pro12 from '../images/product-img/pro12.png';
import circle1 from '../images/product-img/circle1.png';
import circle2 from '../images/product-img/circle2.png';

export default function Products() {
    return (
        <main id='products'>
            <section className='pro-hero py-5 text-center'>
                <div className='pro-div d-flex justify-content-center align-items-center'>
                    <Container className='w-xl-25 w-lg-50'>
                        <h1 className='mb-3'>Our Products</h1>
                        <p className='px-xl-2 '>
                            We have committed our entire existence to quality
                            safety engineering.
                            <span className='d-md-none d-inline'>
                                We have a proven track record of over 30years in
                                the Fire Protection Industry with clients
                                including Government bodies, International Oil
                                Companies & professionally certified engineers
                                that would build and install our British
                                standard certified products. Ensuring quality
                                engineering for all our clients.{' '}
                            </span>
                        </p>
                    </Container>
                </div>

                <Container>
                    <p className='bottom d-md-block d-none'>
                        We have a proven track record of over 30years in the
                        Fire Protection Industry with clients including
                        Government bodies, International Oil Companies &
                        professionally certified engineers that would build and
                        install our British standard certified products.
                        Ensuring quality engineering for all our clients.{' '}
                    </p>
                </Container>
            </section>

            <section className='pro-list py-5 text-center'>
                <Container>
                    <Row className='g-md-5 gy-5'>
                        <Col className='sect' lg={4} md={6}>
                            <img src={pro1} alt='' />
                            <h3>Fire Hose</h3>
                            <p className=''>
                                We specialise in Angus Hosereels. The world’s
                                original and best maintenance-free fire hose,
                                exceeds BS 6391:2009 Type 3 and Kitemarked. A
                                strong, lightweight covered hose combining high
                                performance with affordability.
                            </p>
                        </Col>
                        <Col className='sect' lg={4} md={6}>
                            <img src={pro2} alt='' />
                            <h3>Water Delivery Hose</h3>
                            <p className=''>
                                Hi-Vol large-diameter hose offers an efficient
                                means of delivering critical water supplies
                                during an emergency when water resources are
                                limited or non-existent. Hivolite is constructed
                                from specially formulated high grade synthetic
                                rubber, extruded through an all-synthetic woven
                                jacket, to provide maximum resistance to
                                abrasion, UV and weathering.
                            </p>
                        </Col>
                        <Col className='sect' lg={4} md={6}>
                            <img src={pro3} alt='' />
                            <h3>Fire Fighting Chemicals</h3>
                            <p className=''>
                                Chrisason Fire only uses Angus Fire foams. Angus
                                Fire maintains its position at the forefront of
                                firefighting foam technology through continuous
                                investment in research and development. You can
                                rely on Chrisason Fire to provide foams of the
                                highest firefighting performance with low
                                environmental impact.
                            </p>
                        </Col>

                        <Col className='sect' lg={4} md={6}>
                            <img src={pro4} alt='' />
                            <h3>Foam Equipment</h3>
                            <p className=''>
                                Rapid and affordable fire protection for sites
                                where flammable and hazardous liquids are stored
                                or processed. Ideal for rapid deployment of foam
                                to flammable liquid fires and chemical spills. A
                                full range of fixed foam system equipment,
                                including the Polaris range of water-powered
                                foam induction motors.
                            </p>
                        </Col>

                        <Col className='sect' lg={4} md={6}>
                            <img src={pro5} alt='' />
                            <h3>Monitors</h3>
                            <p className=''>
                                We have three types of Monitors: Portable,
                                Mobile & Fixed. Portable: Lightweight monitors
                                for quick and easy deployment with excellent
                                stability in use and easy storage. Mobile:
                                Trailer-mounted monitors are ideal for proteting
                                locations inadequately covered by fixed monitors
                                and provide a highly flexible addition to any
                                fire service armoury of equipment. Fixed: We
                                stock lever operated, oscillating and remote
                                control monitors
                            </p>
                        </Col>

                        <Col className='sect' lg={4} md={6}>
                            <img src={pro6} alt='' />
                            <h3>Fire Fittings</h3>
                            <p className=''>
                                We have three types of fitting: The Osprey, The
                                Harrier & The Falcon The Osprey Selectable Flow
                                Water and Foam Nozzle provides a range of flow
                                combinations without having to leave the area of
                                the incident to change nozzle. Flow rate from
                                360 - 750 l/min @ 7 Bar Harrier: 115 - 475 l/min
                                @ 7 Bar Falcon: 360 - 950 litre/min @ 7 Bar
                            </p>
                        </Col>

                        <Col className='sect' lg={4} md={6}>
                            <img src={pro7} alt='' />
                            <h3>Portable Pumps</h3>
                            <p className=''>
                                We stock a variety of fire pumps ranging from
                                Diesel: LDA400, LDA600 & LD1800 Petrol: LWA500
                                MK2, LWA800, AP800, LWA1200 & LW2275 All our
                                Angus Pumps come with state of the art engines
                                and are full electronic control with diagnostics
                                utilising the new EDI EPM. They combine the
                                benefits of high pressure fire fighting
                                performance with the ability to move large
                                volumes of water continuously.
                            </p>
                        </Col>
                        <Col className='sect' lg={4} md={6}>
                            <img src={pro8} alt='' />
                            <h3>Fire Extinguishers</h3>
                            <p className=''>
                                We stock two major types of extinguishers:
                                Portable & Mobile. Portable: Our range of
                                portable fire extinguishers is BSI Kitemark
                                approved to the European Standard EN3. Mobile:
                                Our comprehensive selection of mobile fire
                                extinguishes is ideal for a wide range of
                                industrial applications.
                            </p>
                        </Col>
                        <Col className='sect' lg={4} md={6}>
                            <img src={pro9} alt='' />
                            <h3>Fire Engineering Systems</h3>
                            <p className=''>
                                Our fire system application solutions range
                                from: Offshore platfroms; Helidecks, helipads,
                                hangers; Floating production & transport; Docks
                                & Jetties; Petrochemical plants; Tank storage
                                farms & Liquefied Natural Gas (LNG).{' '}
                            </p>
                        </Col>

                        <Col className='sect' lg={4} md={6}>
                            <img src={pro10} alt='' />
                            <h3>Fire Engines & Choppers</h3>
                            <p className=''>
                                Getting engines for your city or state needs a
                                special expertise only very few fire protection
                                companies can handle. We have supplied a few
                                governmental bodies and institutions fire
                                engines and apparatus and can assist in
                                consulting and procuring the engines that would
                                best suite your community's needs. Get in touch
                                with our team today. We are always happy to
                                help.
                            </p>
                        </Col>
                        <Col className='sect' lg={4} md={6}>
                            <img src={pro11} alt='' />
                            <h3>Fire Fighting Gears</h3>
                            <p className=''>
                                Chrisason Fire has been supplying several
                                International Oil Companies (IOCs) and
                                Governmental bodies fire gears for decades. All
                                our gears are premium equipment manufactured to
                                the strictest EU regulatory standards, to ensure
                                the safety of your fire fighters. Our gears
                                range from fire suits, fire helmets, fire
                                gloves, fire gloves and socks, oxygen tanks, to
                                mention but a few..
                            </p>
                        </Col>
                        <Col className='sect' lg={4} md={6}>
                            <img src={pro12} alt='' />
                            <h3>& much more..</h3>
                            <p className=''>
                                Looked through our website and still cannot find
                                what you are looking for? Get in touch with our
                                team. You can find our details on our contact
                                page. Even if we do not have what you are after,
                                we could direct you to one of our partners or a
                                likeminded competitor who may be able to better
                                meet your needs.{' '}
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='pro-banner'></section>

            <section className='fabrication py-5 '>
                <Container>
                    <div className='fab-sect1 pb-5  d-flex flex-lg-row flex-column justify-content-center align-items-center'>
                        <div className='fab-circles m-lg-0 mb-4 position-relative '>
                            <img
                                src={circle1}
                                alt=''
                                className='circle1 circle'
                            />
                            <img
                                src={circle2}
                                alt=''
                                className='circle2 circle'
                            />
                        </div>

                        <div className='fab-text pe-lg-5 mt-lg-4 mt-5 ms-xl-0 ms-lg-4'>
                            <p>
                                Chrisason Fire is certified BAFE SP103 - The
                                Inspection, Testing, Refurbishing and Refilling
                                of Portable Fire Extinguishers and Containers in
                                conjunction with Fire Extinguishing Equipment.
                            </p>
                            <p>
                                We test and refurbish all portable and wheeled
                                fire extinguisher. Our team of expert fire
                                technicians are experienced in overhauling all
                                portable and wheeled fire extinguishers,
                                hosereels and other fire prevention equipement.{' '}
                            </p>
                            <p>
                                Fire extinguishers require stringent maintenance
                                to ensure they will work when needed, and are
                                more importantly, safe. Fire extinguishers are
                                pressurised vessels that can explode when
                                corroded or damaged, and have been know to cause
                                serious injury and even fatal. ​
                            </p>
                        </div>
                    </div>

                    <div className='fab-sect2 pt-lg-5 pt-0 pb-3 d-flex  justify-content-around align-items-stretch flex-md-nowrap flex-wrap'>
                        <div className='fab-detail'>
                            <p>Frequent Clients</p>
                            <div className='red-circle clients'>83%</div>
                        </div>

                        <div className='fab-detail '>
                            <p>Key Global Partners</p>
                            <div className='red-circle partners'>67%</div>
                        </div>

                        <div className='fab-detail m-md-0 mt-4'>
                            <p>Referrals</p>
                            <div className='red-circle referrals'>90%</div>
                        </div>

                        <div className='fab-detail m-md-0 mt-4'>
                            <p>Major Complaints</p>
                            <div className='red-circle complaints'>
                                <strong>5%</strong>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
