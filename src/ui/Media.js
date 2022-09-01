import React from 'react';
import { Container } from 'react-bootstrap';
import { FaQuoteRight, FaHome } from 'react-icons/fa';
import { BsFillPinFill, BsPeopleFill } from 'react-icons/bs';
import { GiCook } from 'react-icons/gi';
import './media.css';
import DoubleArrow from '../images/arrows-couple.svg';

export default function Media() {
    return (
        <main id='media'>
            <section className='media-text py-5'>
                <Container>
                    <h1 className='text-center mb-3'>Chrisason Fire Media </h1>
                    <hr />
                    <article className='media-article1 py-4 d-flex flex-lg-row flex-column justify-content-between'>
                        <div className='plain-bg lh-sm fs-6 mb-lg-0 mb-3'>
                            <p>
                                We have experts available to help provide an
                                insightful view on the area of safety and fire
                                protection in Africa. With over 30years of
                                experience and strong international networks
                                with other safety organisations, we can provide
                                an expert opinion on issue surounding the
                                industry
                            </p>
                        </div>
                        <div className='dark-bg lh-sm fs-6 d-flex justify-content-center align-items-center text-center  px-lg-4 p-4'>
                            <p>
                                At Chrisason Fire, we take our media profiles
                                very seriously. We have a team that are always
                                willing to contribute to helping the Press get
                                the best perspective on happenings in the
                                industry. If you are a media personnel and in
                                need of an expert onpinion to help your audience
                                grasp the critical issues in the industry, we
                                are always willing to contribute.{' '}
                            </p>
                        </div>
                        <div className='plain-bg lh-sm fs-6 mb-lg-0 mt-3'>
                            <p>
                                For up to date information for your audience and
                                how to guides, please do not hesitate to get in
                                touch with our team. We can assist you in
                                bringing clarity to your audience on issues that
                                the public may need a little bit more
                                clarification on - from the professionals.{' '}
                            </p>
                        </div>
                    </article>
                    <article className='media-article2 py-5 d-flex flex-lg-row flex-column justify-content-between align-items-start'>
                        <div className='mini-article'>
                            <p className='text-break'>
                                Fire, power failure, security breach—even a
                                minor incident threatens your business.
                                Statistics show that the most prepared
                                organizations recover within 24 hours, while the
                                least prepared are down for more than 30 times
                                that.
                            </p>

                            <p className='text-break'>
                                We collaborate with clients to develop the right
                                solutions to ensure your people, facilities—and
                                your overall business—are more than prepared to
                                survive a disaster.
                            </p>

                            <p className='text-break'>
                                Chrisason provides life safety systems,
                                including fire detection and suppression and the
                                most advanced security technology. Plus, our
                                certified inspectors and licensed technicians
                                test, repair, and upgrade equipment to make sure
                                it’s always ready.
                            </p>

                            <p className='text-break'>
                                We integrate systems and strategies to fully
                                protect your business. And we can include fire
                                protection as part of our commercial
                                construction services, industrial electrical
                                services, and commercial mechanical construction
                                services.
                            </p>
                        </div>
                        <div className='mini-article'>
                            <p className='text-break'>
                                Chrisason Fire excels at complex turnaround and
                                project execution for the refining and
                                petrochemical industries. Very few companies
                                offer the ultra-specialized skills and
                                experience required to perform these enormous –
                                and enormously critical – industrial maintenance
                                projects.
                            </p>

                            <p className='text-break'>
                                When heat exchanger, coker unit, and
                                distillation/alkylation and hydrocracker
                                components fail, multi-million dollar losses are
                                an instant reality. “Mission critical” becomes
                                an understatement since lost production caused
                                by unplanned downtime can be crippling.
                            </p>

                            <p className='text-break'>
                                Hence the need for CFPL's highly trained team of
                                field technicians and their battery of
                                specialized equipment and technology – from
                                cranes with narrow footprints and proper lift
                                capacities to 3D AutoCAD used to digitally
                                "rehearse" major lifts and installs.
                            </p>
                        </div>
                    </article>
                    <div className='grey-banner p-5 d-flex justify-content-center align-items-center'>
                        <FaQuoteRight />
                        <p className='blockquote ms-5'>
                            "Know Safety, No Fire."
                        </p>
                    </div>
                </Container>
            </section>

            <section className='download-sect'>
                <div className='download-hero p-md-5 px-0 d-flex flex-column justify-content-center align-items-center'>
                    <img src={DoubleArrow} alt='' />
                    <h1 className='py-5'>Chrisason Downloads</h1>
                </div>
                <section className='grey-banner py-5'>
                    <Container className='d-flex flex-md-row flex-column justify-content-around align-items-start'>
                        <div className='no-bg'>
                            <h3 className='mb-3'>Our Company Profile</h3>
                            <p className='lh-sm pt-3 m-md-0 mb-4'>
                                You can download our company profile and other
                                flyers and signs to place at your workplace to
                                help remind your employees and visitors to bear
                                safety in mind at all times. Please feel free to
                                contact us if you need any more information or
                                have any further enquiries.
                            </p>
                        </div>

                        <div className='grey-bg p-4'>
                            <h3 className='mb-3'>Our Press Release</h3>
                            <p className='lh-sm m-0'>
                                Our Press Release statements page is still being
                                worked on and would be announced once it is up
                                and running. In the meantime, should you need an
                                expert to comment on a story or discuss on a
                                panel, feel free to get in ttouch with our
                                office.
                            </p>
                        </div>
                    </Container>
                </section>

                <section className='download-details py-5'>
                    <Container>
                        <div className='d-flex flex-lg-row flex-column justify-content-between'>
                            <div className='detail d-flex justify-content-around pb-5 px-3 pt-4'>
                                <div className='red-box'>
                                    <FaHome />
                                </div>

                                <div className='detail-text'>
                                    <h3 className='h4'>
                                        Fire Risk Assessment UK{' '}
                                    </h3>
                                    <p>
                                        Chrisason Fire Risk Assessment meets up
                                        with the UK Standard set for workplace
                                        fire assessments.
                                    </p>
                                    <p>
                                        Every responsible organisation must
                                        carry out and regularly review a fire
                                        risk assessment of the premises. This
                                        will identify what your organisation
                                        need to do to prevent fire and keep
                                        people safe.{' '}
                                    </p>
                                </div>
                            </div>

                            <div className='detail d-flex justify-content-around pb-5 px-3 pt-4'>
                                <div className='red-box'>
                                    <GiCook />
                                </div>

                                <div className='detail-text'>
                                    <h3 className='h4'>
                                        Fire Standards for the Kitchen
                                    </h3>
                                    <p>
                                        The kitchen is the most fire prone room
                                        in the house. Organisations that also
                                        run operations with a kitchen (like
                                        hotels, restaurants, etcetera) also need
                                        to ensure their staff are adequately
                                        trained to work safely to prevent fire
                                        and also fight small fires in the event
                                        that they occur.{' '}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='d-flex flex-lg-row flex-column justify-content-between pb-4 '>
                            <div className='detail d-flex justify-content-around pb-5 px-3 pt-4'>
                                <div className='red-box'>
                                    <BsPeopleFill />
                                </div>

                                <div className='detail-text'>
                                    <h3 className='h4'>Evacuation Plans</h3>
                                    <p>
                                        As every good manager knows, employees
                                        have to be provided with a safe and
                                        convenient working environment.{' '}
                                    </p>
                                    <p>
                                        In the case where this is done, the next
                                        safety step is to provide an adequate
                                        assembly point and a comprehensive
                                        evacuation plan to be routinely drilled
                                        with the staff in the event of a fire.
                                    </p>
                                </div>
                            </div>

                            <div className='detail d-flex justify-content-around pb-5 px-3 pt-4'>
                                <div className='red-box'>
                                    <BsFillPinFill />
                                </div>

                                <div className='detail-text'>
                                    <h3 className='h4'>Important Updates</h3>
                                    <p>
                                        From this tab, you can find important
                                        updates about Chrisason as well as new
                                        insights into our company.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </section>
        </main>
    );
}
