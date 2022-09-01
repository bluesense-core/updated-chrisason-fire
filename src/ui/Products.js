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

export default function Products() {
    return (
        <main id='products'>
            <section className='pro-hero py-5 text-center'>
                <div className='pro-div d-flex justify-content-center align-items-center'>
                    <Container className='w-xl-25 w-lg-50'>
                        <h1 className='mb-0'>Our Products</h1>
                        <p className='px-xl-2 lh-sm'>
                            We have committed our entire existence to quality
                            safety engineering.
                        </p>
                    </Container>
                </div>

                <Container>
                    <p className='bottom'>
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
                        <Col lg={4} md={6}>
                            <img src={pro1} alt='' />
                            <h3>Fire Hose</h3>
                            <p className='lh-sm'>
                                We specialise in Angus Hosereels. The world’s
                                original and best maintenance-free fire hose,
                                exceeds BS 6391:2009 Type 3 and Kitemarked. A
                                strong, lightweight covered hose combining high
                                performance with affordability.
                            </p>
                        </Col>
                        <Col lg={4} md={6}>
                            <img src={pro2} alt='' />
                            <h3>Water Delivery Hose</h3>
                            <p className='lh-sm'>
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
                        <Col lg={4} md={6}>
                            <img src={pro3} alt='' />
                            <h3>Fire Fighting Chemicals</h3>
                            <p className='lh-sm'>
                                Chrisason Fire only uses Angus Fire foams. Angus
                                Fire maintains its position at the forefront of
                                firefighting foam technology through continuous
                                investment in research and development. You can
                                rely on Chrisason Fire to provide foams of the
                                highest firefighting performance with low
                                environmental impact.
                            </p>
                        </Col>

                        <Col lg={4} md={6}>
                            <img src={pro4} alt='' />
                            <h3>Foam Equipment</h3>
                            <p className='lh-sm'>
                                Rapid and affordable fire protection for sites
                                where flammable and hazardous liquids are stored
                                or processed. Ideal for rapid deployment of foam
                                to flammable liquid fires and chemical spills. A
                                full range of fixed foam system equipment,
                                including the Polaris range of water-powered
                                foam induction motors.
                            </p>
                        </Col>

                        <Col lg={4} md={6}>
                            <img src={pro5} alt='' />
                            <h3>Monitors</h3>
                            <p className='lh-sm'>
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

                        <Col lg={4} md={6}>
                            <img src={pro6} alt='' />
                            <h3>Fire Fittings</h3>
                            <p className='lh-sm'>
                                We have three types of fitting: The Osprey, The
                                Harrier & The Falcon The Osprey Selectable Flow
                                Water and Foam Nozzle provides a range of flow
                                combinations without having to leave the area of
                                the incident to change nozzle. Flow rate from
                                360 - 750 l/min @ 7 Bar Harrier: 115 - 475 l/min
                                @ 7 Bar Falcon: 360 - 950 litre/min @ 7 Bar
                            </p>
                        </Col>

                        <Col lg={4} md={6}>
                            <img src={pro7} alt='' />
                            <h3>Portable Pumps</h3>
                            <p className='lh-sm'>
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
                        <Col lg={4} md={6}>
                            <img src={pro8} alt='' />
                            <h3>Fire Extinguishers</h3>
                            <p className='lh-sm'>
                                We stock two major types of extinguishers:
                                Portable & Mobile. Portable: Our range of
                                portable fire extinguishers is BSI Kitemark
                                approved to the European Standard EN3. Mobile:
                                Our comprehensive selection of mobile fire
                                extinguishes is ideal for a wide range of
                                industrial applications.
                            </p>
                        </Col>
                        <Col lg={4} md={6}>
                            <img src={pro9} alt='' />
                            <h3>Fire Engineering Systems</h3>
                            <p className='lh-sm'>
                                Our fire system application solutions range
                                from: Offshore platfroms; Helidecks, helipads,
                                hangers; Floating production & transport; Docks
                                & Jetties; Petrochemical plants; Tank storage
                                farms & Liquefied Natural Gas (LNG).{' '}
                            </p>
                        </Col>

                        <Col lg={4} md={6}>
                            <img src={pro10} alt='' />
                            <h3>Fire Engines & Choppers</h3>
                            <p className='lh-sm'>
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
                        <Col lg={4} md={6}>
                            <img src={pro11} alt='' />
                            <h3>Fire Fighting Gears</h3>
                            <p className='lh-sm'>
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
                        <Col lg={4} md={6}>
                            <img src={pro12} alt='' />
                            <h3>& much more..</h3>
                            <p className='lh-sm'>
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
        </main>
    );
}
