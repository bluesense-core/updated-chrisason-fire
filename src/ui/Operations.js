import React from 'react';
import './operations.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import op1 from '../images/operation-img/op1.png';
import op2 from '../images/operation-img/op2.png';
import op3 from '../images/operation-img/op3.png';
import op4 from '../images/operation-img/op4.png';
import aside from '../images/operation-img/aside.png';
import FM200 from '../images/operation-img/FM200.svg';
import CO2 from '../images/operation-img/CO2.svg';
import inergen from '../images/operation-img/inergen.svg';
import argon from '../images/operation-img/argon.svg';
import wckh from '../images/operation-img/wckh.svg';
import alarm from '../images/operation-img/alarm.svg';

export default function Operations() {
    return (
        <main id='operations'>
            <section className='op-hero py-3'>
                <Container>
                    <h1 className='text-center display-3'>
                        Chrisason Operations & Research
                    </h1>
                </Container>
            </section>

            <section className='recent-operations text-center py-5'>
                <Container>
                    <h2 className='title mb-2'>
                        FIRE SUPPRESSION SYSTEMS (FSS)
                    </h2>
                    <p className='subtitle px-5'>
                        Chrisason Fire takes great care in ensuring that fire
                        safety operations are carried out efficiently. One of
                        the services used to achieve proper fire safety are fire
                        suppression systems which come in different variations
                    </p>
                    <Row className='justify-content-md-center align-items-center py-5 g-md-5 gy-5'>
                        <Col className='h-100' md={6} lg={4}>
                            <Image
                                src={FM200}
                                alt='FM200 Fire Suppression System'
                            />
                            <h3 className='my-3'>
                                FM200 Fire Suppression System
                            </h3>
                            <p>
                                We specialise in installing and maintaining
                                FM200 which is the most used suppression in the
                                industry at the minute and it is what we
                                recommend for our clients in similar industries.
                                It is a colourless, compressed liquefied gas
                                used to extinguish fires. It is also pressurised
                                with nitrogen, waterless, and upon activation,
                                discharges as a gas to suppress the fire.
                            </p>
                        </Col>

                        <Col className='h-100' md={6} lg={4}>
                            <Image
                                src={CO2}
                                alt='CO2 Fire Suppression System'
                            />
                            <h3 className='my-3'>
                                CO2 Fire Suppression System
                            </h3>
                            <p>
                                A carbon dioxide (CO2) fire suppression system
                                is a system that is designed to suppress the
                                production of carbon dioxide (CO2) by a human or
                                animal source. Carbon dioxide fire suppression
                                systems can be used in both urban and forest
                                fires.
                            </p>
                        </Col>

                        <Col className='h-100' md={6} lg={4}>
                            <Image
                                src={inergen}
                                alt='Inergen Fire Suppression System'
                            />
                            <h3 className='my-3'>
                                Inergen Fire Suppression System
                            </h3>
                            <p>
                                {' '}
                                This automatically extinguishes fires when they
                                start. This system can be used in all types of
                                buildings, including homes and commercial
                                buildings. Inergen also has a smoke detector
                                that can be installed in the building to alert
                                occupants if smoke is present in the building.
                            </p>
                        </Col>

                        <Col md={6} lg={5}>
                            <Image
                                src={argon}
                                alt='Argon Fire Suppression System'
                            />
                            <h3 className='my-3'>
                                Argon Fire Suppression System
                            </h3>
                            <p>
                                The main purpose of an Argon fire suppression
                                system is to prevent fires from spreading too
                                far and causing damage to property or buildings.
                                By controlling the amount of air that passes
                                through the system over time, you can keep fires
                                under control without having to constantly move
                                air tanks around.Its most common use is for
                                homes located in remote areas where there are no
                                nearby residents or buildings that may pose a
                                threat to safety.
                            </p>
                        </Col>

                        <Col md={6} lg={5}>
                            <Image src={wckh} alt='' />
                            <h3 className='my-3'>
                                Wet Chemical Kitchen Hood Fire Suppression
                                System
                            </h3>
                            <p>
                                We specialise in the design, supply, install,
                                service, maintain, recharge of wet chemical hood
                                fire suppression systems to enhance fire
                                protection when spills or accidents occur in the
                                kitchen. It’s best for kitchens that have a high
                                amount of carbon dioxide emissions, such as
                                refrigerated food storage facilities.
                            </p>
                        </Col>
                    </Row>

                    <h2 className='title mb-3'>FIRE ALARM/DETECTION SYSTEMS</h2>

                    <Row className='justify-content-md-center align-items-center py-5 g-md-5 gy-5'>
                        <Col className='h-100' lg={6}>
                            <Image
                                src={alarm}
                                alt='Fire Alarm/Detection Systems'
                            />
                            <h3 className='my-3'>
                                Fire Alarm/Detection Systems
                            </h3>
                            <p>
                                Chrisason ensures the fire safety through the
                                installation and maintenance of fire alarm
                                systems. Special care is taken by our team in
                                selecting one that is well suited to your
                                company needs and complies with British
                                Standards.
                            </p>
                        </Col>
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
