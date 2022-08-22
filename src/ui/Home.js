import React from 'react';
import './home.css';
import herohome from '../images/herohome.png';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import notore from '../images/notore.png';
import ge from '../images/ge.png';
import ffs from '../images/ffs.png';
import feasr from '../images/feasr.png';
import nnpc from '../images/nnpc.png';
import mede from '../images/mede.png';
import goaks from '../images/goaks.png';
import exxonmobil from '../images/exxonmobil.png';
import gofs from '../images/gofs.png';
import uniuyo from '../images/uniuyo.png';
import shell from '../images/shell.png';
import icrc from '../images/icrc.png';
import fgn from '../images/fgn.png';
import eni from '../images/eni.png';
import chevron from '../images/chevron.png';
import total from '../images/total.png';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import pro1 from '../images/process1.svg';
import pro2 from '../images/process2.svg';
import pro3 from '../images/process3.svg';
import pro4 from '../images/process4.svg';
import fireengineering from '../images/fireengineering.png';
import marineengineering from '../images/marineengineering.png';
import fireinstallations from '../images/fireinstallations.png';

export default function Home() {
    return (
        <main>
            <div className='hero-img'>
                <img src={herohome} alt='Homepage'></img>
                <div className='hero-text'>
                    <h1>Over ​260,000hours expertising in Fire Engineering</h1>
                    <p>
                        Since 1987 we have been providing Africa with easy
                        access to safety technology
                    </p>
                </div>
            </div>

            <div className='content'>
                <div className='img-slider'>
                    <CarouselProvider
                        className='case-slide'
                        isIntrinsicHeight={true}
                        dragEnabled={true}
                        touchEnabled={true}
                        totalSlides={3}
                        interval={3000}
                        isPlaying={true}
                        infinite={true}>
                        <Slider className='slider-class' moveThreshold={0}>
                            <Slide index={0}>
                                <img
                                    src={img1}
                                    alt='slide1'
                                    className='slideimg'></img>
                            </Slide>
                            <Slide index={1}>
                                <img
                                    src={img2}
                                    alt='slide2'
                                    className='slideimg'></img>
                            </Slide>
                            <Slide index={2}>
                                <img
                                    src={img3}
                                    alt='slide3'
                                    className='slideimg'></img>
                            </Slide>
                        </Slider>
                    </CarouselProvider>
                </div>
                <div className='case-text'>
                    <div className='text1'>
                        <p className='bold m-0'>Research & Analysis</p>
                        <p className='m-0'>
                            All our projects undergo research and analysis.
                            Research is what allows our experts know exactly how
                            to best meet your safety challenges.
                        </p>
                    </div>
                    <div className='text2'>
                        <p className='bold m-0'>Fire Protection Engines</p>
                        <p className='m-0'>
                            Fire Apparatus & Engines are a must for any
                            community that is keen on securing the lives and
                            properties of its people. We have & can assist in
                            consulting and supplying your fire engines.
                        </p>
                    </div>
                </div>
            </div>

            <div className='process-grid'>
                <div className='process1'>
                    <div className='process-img'>
                        <img src={pro4} alt='25%'></img>
                    </div>
                    <div className='process-title'>Consult</div>
                    <div className='process-body'>
                        <p className='lh-sm'>
                            The first thing we do is arrange for a convenient
                            time to discuss your challenges and safety issues.
                        </p>
                    </div>
                </div>

                <div className='process1'>
                    <div className='process-img'>
                        <img src={pro3} alt='25%'></img>
                    </div>
                    <div className='process-title'>Design</div>
                    <div className='process-body'>
                        <p className='lh-sm'>
                            After consulting with your company, we would then
                            have to research and analyse your safety challenges.
                        </p>
                    </div>
                </div>

                <div className='process1'>
                    <div className='process-img'>
                        <img src={pro2} alt='25%'></img>
                    </div>
                    <div className='process-title'>Supply</div>
                    <div className='process-body'>
                        <p className='lh-sm'>
                            Angus Fire UK & Chubb Fire UK are a few of our
                            longterm partners we liaise with to procure,
                            refurbish or manufacture to your specifications.
                        </p>
                    </div>
                </div>

                <div className='process1'>
                    <div className='process-img'>
                        <img src={pro1} alt='25%'></img>
                    </div>
                    <div className='process-title'>Installation</div>
                    <div className='process-body'>
                        <p className='lh-sm'>
                            We have been installing fire alarms, sprinklers,
                            hosereels, CCTVs and other safety and security
                            equipment for well over three decades now.
                        </p>
                    </div>
                </div>
            </div>

            <div className='logo-flex'>
                <div className='logo-head'>
                    <h1 className='fw-bolder fs-3'>Some Clients</h1>
                </div>
                <div className='logo-block'>
                    <div className='logo'>
                        <img src={notore} alt=''></img>
                    </div>
                    <div className='logo'>
                        <img src={ge} alt=''></img>
                    </div>
                    <div className='logo'>
                        <img src={ffs} alt=''></img>
                    </div>
                    <div className='logo'>
                        <img src={feasr} alt=''></img>
                    </div>
                    <div className='logo'>
                        <img src={nnpc} alt=''></img>
                    </div>
                    <div className='logo'>
                        <img src={mede} alt=''></img>
                    </div>
                    <div className='logo'>
                        <img src={goaks} alt=''></img>
                    </div>
                    <div className='logo'>
                        <img src={exxonmobil} alt=''></img>
                    </div>
                </div>
                <div className='logo-block'>
                    <div className='logo'>
                        <img src={gofs} alt=''></img>
                    </div>
                    <div className='logo'>
                        <img src={uniuyo} alt=''></img>
                    </div>
                    <div className='logo'>
                        <img src={shell} alt=''></img>
                    </div>
                    <div className='logo'>
                        <img src={icrc} alt=''></img>
                    </div>
                    <div className='logo'>
                        <img src={fgn} alt=''></img>
                    </div>
                    <div className='logo'>
                        <img src={eni} alt=''></img>
                    </div>
                    <div className='logo'>
                        <img src={chevron} alt=''></img>
                    </div>
                    <div className='logo'>
                        <img src={total} alt=''></img>
                    </div>
                </div>
            </div>

            <div className='card-heading'>
                <h1 className='fw-bolder fs-3'>Services</h1>
            </div>
            <div className='card-grid'>
                <div className='card rounded-4'>
                    <div className='card-img'>
                        <img src={fireengineering} alt=''></img>
                    </div>
                    <div className='card-text'>
                        <p className='ptitle'>Fire Engineering</p>
                        <p className='mb-0 lh-sm'>
                            Improving the safety of your employees and assets is
                            our main priority; allowing you to focus on other
                            critical aspects of your firm
                        </p>
                    </div>
                </div>

                <div className='card rounded-4'>
                    <div className='card-img'>
                        <img src={marineengineering} alt=''></img>
                    </div>
                    <div className='card-text'>
                        <p className='ptitle'>Marine Engineering</p>
                        <p className='mb-0 lh-sm'>
                            Improving the safety of your employees and assets is
                            our main priority; allowing you to focus on other
                            critical aspects of your firm
                        </p>
                    </div>
                </div>

                <div className='card rounded-4'>
                    <div className='card-img'>
                        <img src={fireinstallations} alt=''></img>
                    </div>
                    <div className='card-text'>
                        <p className='ptitle'>Fire Installation</p>
                        <p className='mb-0 lh-sm'>
                            Improving the safety of your employees and assets is
                            our main priority; allowing you to focus on other
                            critical aspects of your firm
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
