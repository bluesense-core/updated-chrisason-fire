import React from 'react';
import { Container } from 'react-bootstrap';
import './home.css';
import img1 from '../images/home-img/img1.png';
import img2 from '../images/home-img/img2.png';
import img3 from '../images/home-img/img3.png';
import chevron from '../images/home-img/chevron.png';
import eni from '../images/home-img/eni.png';
import exxonmobil from '../images/home-img/exxonmobil.png';
import ffs from '../images/home-img/ffs.png';
import fgn from '../images/home-img/fgn.png';
import ge from '../images/home-img/ge.png';
import goaks from '../images/home-img/goaks.png';
import gofs from '../images/home-img/gofs.png';
import icrc from '../images/home-img/icrc.png';
import indorama from '../images/home-img/indorama.png';
import mede from '../images/home-img/mede.png';
import nb from '../images/home-img/nb.png';
import nnpc from '../images/home-img/nnpc.png';
import notore from '../images/home-img/notore.png';
import shell from '../images/home-img/shell.png';
import total from '../images/home-img/total.png';
import fireeng from '../images/home-img/fireengineering.png';
import marineeng from '../images/home-img/marineengineering.png';
import fireinstall from '../images/home-img/fireinstallations.png';

export default function Home() {
    return (
        <main id='home'>
            <section className=' home-hero d-flex flex-column align-items-center justify-content-center py-5 px-lg-0 px-3'>
                <h1 className='mb-2 text-center'>
                    Over{' '}
                    <span className='text-decoration-underline'>
                        ​260,000hours
                    </span>{' '}
                    expertising in Fire Engineering
                </h1>
                <p className='fs-5 text-center'>
                    Since 1987 we have been providing Africa with easy access to
                    safety technology
                </p>
            </section>

            <section className='home-services '>
                <Container>
                    <div className='service1 py-5 d-flex flex-lg-row flex-column justify-content-between align-items-stretch'>
                        <img
                            src={img1}
                            alt=''
                            className='main-service-img m-lg-0 mb-5'
                        />

                        <div className='service1-details'>
                            <div className='d-flex justify-content-center align-items-start'>
                                <img
                                    src={img2}
                                    alt=''
                                    className='service-img'
                                />

                                <div className='ms-4'>
                                    <h2 className='h4'>Research & Analysis</h2>
                                    <p className=''>
                                        All our projects undergo research and
                                        analysis. Research is what allows our
                                        experts know exactly how to best meet
                                        your safety challenges.{' '}
                                    </p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center align-items-start mt-4'>
                                <img
                                    src={img3}
                                    alt=''
                                    className='service-img'
                                />

                                <div className='ms-4'>
                                    <h2 className='h4'>
                                        Fire Protection Engines
                                    </h2>
                                    <p className=''>
                                        Fire Apparatus & Engines are a must for
                                        any community that is keen on securing
                                        the lives and properties of its people.
                                        We have & can assist in consulting and
                                        supplying your fire engines.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='text-center py-5 service2 d-flex flex-md-row flex-column justify-content-between align-items-start'>
                        <div className='service'>
                            <div className='grey-circle mb-3'>
                                <p>1</p>
                            </div>
                            <h5>Consult</h5>
                            <p className='pt-2 px-2'>
                                The first thing we do is arrange for a
                                convenient time to discuss your challenges and
                                safety issues
                            </p>
                        </div>

                        <div className='service'>
                            <div className='grey-circle mb-3'>
                                <p>2</p>
                            </div>
                            <h5>Design</h5>
                            <p className='pt-2 px-2'>
                                After consulting with your company, we would
                                then have to research and analyse your safety
                                challenges.
                            </p>
                        </div>

                        <div className='service'>
                            <div className='grey-circle mb-3'>
                                <p>3</p>
                            </div>
                            <h5>Supply</h5>
                            <p className='pt-2'>
                                Angus Fire UK & Chubb Fire UK are a few of our
                                longterm partners we liaise with to procure,
                                refurbish or manufacture to your specifications.{' '}
                            </p>
                        </div>

                        <div className='service'>
                            <div className='grey-circle mb-3'>
                                <p>4</p>
                            </div>
                            <h5>Installation</h5>
                            <p className='pt-2'>
                                We have been installing fire alarms, sprinklers,
                                hosereels, CCTVs and other safety and security
                                equipment for well over three decades now.{' '}
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            <section className='home-clients pt-5 pb-5'>
                <Container>
                    <h4>Some Clients</h4>
                    <div className='d-flex justify-content-between align-items-center'>
                        <img src={chevron} alt='' />
                        <img src={ge} alt='' />
                        <img src={shell} alt='' />
                        <img src={exxonmobil} alt='' />
                        <img src={total} alt='' />
                        <img src={eni} alt='' />
                        <img src={notore} alt='' />
                        <img src={indorama} alt='' />
                    </div>

                    <div className='d-flex justify-content-between align-items-center'>
                        <img src={icrc} alt='' />
                        <img src={mede} alt='' />
                        <img src={fgn} alt='' />
                        <img src={nnpc} alt='' />
                        <img src={gofs} alt='' />
                        <img src={goaks} alt='' />
                        <img src={nb} alt='' />
                        <img src={ffs} alt='' />
                    </div>
                </Container>
            </section>

            <section className='dark-bg'>
                <Container className='d-flex py-5 flex-md-row flex-column justify-content-between align-items-center'>
                    <div className='fire-card mb-4 pb-3'>
                        <img src={fireeng} alt='' />
                        <h4 className='my-2 pt-3'>Fire Engineering</h4>
                        <p className='px-2'>
                            {' '}
                            Improving the safety of your employees and assets is
                            our main priority; allowing you to focus on other
                            critical aspects of your firm
                        </p>
                    </div>
                    <div className='fire-card mb-4 pb-3'>
                        <img src={marineeng} alt='' />
                        <h4 className='my-2 pt-3'>Marine Engineering</h4>
                        <p className='px-2'>
                            Marine engineering often cost millions to acquire.
                            Which is why it is important companies invest in
                            protecting these assets.
                        </p>
                    </div>
                    <div className='fire-card mb-4 pb-3'>
                        <img src={fireinstall} alt='' />
                        <h4 className='my-2 pt-3'>Fire Installations</h4>
                        <p className='px-2'>
                            We have consulted Shell, NNPC, Mobil, TotalElf and a
                            few other IOCs with fire protection procurement and
                            installations
                        </p>
                    </div>
                </Container>
            </section>
        </main>
    );
}
