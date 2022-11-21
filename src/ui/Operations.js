import React from 'react';
import './operations.css';
import { Col, Container, Image, Row, Card } from 'react-bootstrap';
import op1 from '../images/operation-img/op1.png';
import op2 from '../images/operation-img/op2.png';
import op3 from '../images/operation-img/op3.png';
import op4 from '../images/operation-img/op4.png';
import aside from '../images/operation-img/aside.png';
import { OpCards } from '../components/Cards';
import { NavLink } from 'react-router-dom';

export default function Operations() {
    return (
        <main id='operations'>
            <section className='op-hero py-3'>
                <Container>
                    <h1 className='text-center  px-4 py-4 m-0 mx-auto'>
                        Projects
                    </h1>
                </Container>
            </section>

            <section className='recent-operations py-5'>
                <Container>
                    <h2 className='title mb-2 text-center text-uppercase'>
                        Fire Protection Projects
                    </h2>
                    <p className='subtitle px-5 text-center'>
                        Chrisason Fire takes great care in ensuring that fire
                        safety operations are carried out efficiently. One of
                        the services used to achieve proper fire safety are fire
                        suppression systems which come in different variations
                    </p>

                    <Row xs={1} md={2} className='pt-5 g-5'>
                        {OpCards.map((e) => (
                            <Col key={e.id}>
                                <Card key={e.id} className='h-100'>
                                    <Card.Img
                                        variant='top'
                                        src={e.img}
                                        alt={e.title}
                                    />
                                    <Card.Body className=''>
                                        <Card.Title>{e.title}</Card.Title>
                                        <Card.Text className='my-3'>
                                            {e.subtitle}
                                        </Card.Text>
                                        <NavLink to='/contact'>
                                            Learn More
                                        </NavLink>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <Container className='d-flex flex-lg-row flex-column justify-content-between py-5'>
                <section className='operation'>
                    <h2 className='text-center'>OTHER SERVICES WE PROVIDE</h2>

                    <div className='d-flex pt-4 flex-md-row flex-column justify-content-between align-items-stretch'>
                        <div className='op'>
                            <img src={op1} alt='' />
                            <h3 className='mt-3 h4'>Servicing</h3>
                            <p className='category mx-auto px-5 py-1 mt-4'>
                                FIRE SYSTEMS
                            </p>
                            <p className='lh-sm'>
                                Chrisason Fire Engineers are experts at
                                servicing fire protection systems, fire
                                suppression systems, hosereels, fire alarms,
                                etc.
                            </p>
                        </div>
                        <div className='op mt-md-0 mt-4'>
                            <img src={op2} alt='' />
                            <h3 className='mt-3 h4'>Fabrication</h3>
                            <p className='category mx-auto px-5 py-1 mt-4'>
                                FIRE UNITS
                            </p>
                            <p className='lh-sm'>
                                Chrisason Fire are specialist at fabricating
                                fire protection extinguishers and parts that may
                                not be in the market.
                            </p>
                        </div>
                    </div>

                    <div className='mt-md-5 d-flex flex-md-row flex-column justify-content-between align-items-stretch'>
                        <div className='op mt-md-0 mt-4'>
                            <img src={op3} alt='' />
                            <h3 className='mt-3 h4'>Procurement</h3>
                            <p className='category mx-auto px-5 py-1 mt-4'>
                                FIRE INSTRUMENTS
                            </p>
                            <p className='lh-sm'>
                                We at Chrisason help our clients procure
                                equipment and machinery that help provide a safe
                                and secure environment for clientele.
                            </p>
                        </div>
                        <div className='op mt-md-0 mt-4'>
                            <img src={op4} alt='' />
                            <h3 className='mt-3 h4'>Installation</h3>
                            <p className='category mx-auto px-5 py-1 mt-4'>
                                FIRE EQUIPMENT
                            </p>
                            <p className='lh-sm'>
                                With over 30years of experience we have become
                                experts at installing a variety of fire
                                protection equipment.
                            </p>
                        </div>
                    </div>
                </section>

                <aside className='py-4 mt-lg-0 mt-4'>
                    <p className='px-4 lh-sm'>
                        Chrisason works closely with the NFPA Foundation on
                        research now in its second quarter century of service,
                        the Fire Protection Research Foundation continues to
                        identify and facilitate research initiatives important
                        to the fire protection engineering community. Activity
                        at the Foundation remains high, with multiple projects
                        of direct interest to SFPE members.
                    </p>
                    <p className='px-4 lh-sm pt-2 mb-5'>
                        The Fire Protection Research Foundation is an
                        independent charitable organization established in 1982
                        with a mission to plan, manage and communicate research
                        in support of the NFPA mission. The NFPA mission, in
                        turn, is to reduce the worldwide burden of fire and
                        other hazards.
                    </p>
                    <img src={aside} alt='' />
                    <p className='px-4 pt-4 lh-sm'>
                        Over the past five years, the Foundation has developed
                        active research programs in areas corresponding with
                        major NFPA technical committee projects. These are: i.
                        Detection and signaling; ii. iElectrical safety; iii.
                        Fire suppression; iv. Firefighter protective clothing
                        and equipment; v. Firefighting tactics; vi. Hazardous
                        materials/commodity storage; and vii. Transportation.
                    </p>
                    <p className='px-4 lh-sm pt-2 mb-1'>
                        These projects cover a range of topics, from research
                        supported by the U.S. Department of Homeland Security. A
                        complete list of existing projects and recent reports is
                        available at www.nfpa.org/foundation.
                    </p>
                </aside>
            </Container>
        </main>
    );
}
