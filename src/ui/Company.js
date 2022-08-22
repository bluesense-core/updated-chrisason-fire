import React from 'react';
import './company.css';
import img1 from '../images/herocompany.png';
import aboutfire from '../images/aboutfire.png';
import careers from '../images/careers.png';
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';

export default function Company() {
    return (
        <main className='lh-sm'>
            <div className='company-hero-img'>
                <img src={img1} alt='Homepage'></img>
                <div className='company-hero-text'>
                    <h1>About Chrisason Fire</h1>
                </div>
            </div>

            <div className='about-section lh-sm'>
                <div className='about-text-1 '>
                    <div className='about-title'>Who We Are</div>
                    <div className='about-paragraph-1'>
                        <p>
                            Chrisason Fire is an indigenous Nigerian firm
                            involved in importation, assembling, supply,
                            installation and maintenance of various types of
                            Fire Protection, Fire Fighting, Engineering, Fire
                            Detection Equipment and Systems throughout the
                            nation.
                            <br />
                            <br />
                            We appreciate and associate with the Health, Safety,
                            Environment Security and Fire Prevention efforts of
                            our major clients including but not limited to Mobil
                            Producing Nigeria Unlimited, Shell Petroleum
                            Development Company of Nigeria Limited, NNPC, EPCL
                            (INDORAMA), Notore Chemical Industries (NAFFCON)
                            etc.
                        </p>
                    </div>
                </div>

                <div className='about-text-2'>
                    <div className='about-title'>
                        We specialise in Fire Protection Engineering + Safety
                    </div>
                    <div className='about-flex'>
                        <div className='img-left'>
                            <img src={aboutfire} alt='extinguiser'></img>
                        </div>
                        <div className='text-right'>
                            <p>
                                We deal fully on Fire Fighting/Equipment, such
                                as, Fire Extinguisher of all types and classes
                                Fire Trucks /Equipment, Fire Hose Reel, Reel
                                fire Fighting Foam & Powders, Foam Equipment
                                Sprinkler System, CO2 Total Flooding Systems,
                                Fire Detection System (Smoke, Heat, Flame,
                                Explosion Sensors), Fire Hydrant Equipment, FM
                                200, Argon, lnergen, Fog Water Fire Fighting
                                Systems, Dry Powder Fire Fighting Systems,
                                Portable and Trolley units.
                                <br />
                                <br />
                                We are fully committed to our responsibilities
                                as regards the applications of the requirements
                                of Health, Safety, Environment and Security in
                                the execution of all kinds of our operations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='our-mission'>
                <div className='our-mission-content'>
                    <div className='mission-title'>Our Mission</div>
                    <div className='mission-body'>
                        <ul>
                            <li>
                                Deliver premium and valuable quality
                                professional services to our clients throughout
                                the nation
                            </li>
                            <li>
                                Provide safety protection & security to life &
                                property
                            </li>
                            <li>
                                Create an organisation & a working environment
                                that works fully with all teams to attain set
                                goals
                            </li>
                            <li>
                                Continually generate & set the pace & drive for
                                the industry's practices & standards via cutting
                                edge research, new technology & product sourcing
                            </li>
                            <li>
                                Create a mutual relationship between our
                                organisation and our partner to progressively
                                build a safer world
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='mission-text'>
                <div className='mission-text-flex'>
                    <div className='left-text'>
                        <p>
                            At Chrisason Fire our quality-accredited and
                            certified fire detection and prevention company, we
                            provide design, installation and servicing of spark
                            detection, gas suppression, deluge, minifog, foam
                            and powder systems as well as VESDA and aspirating
                            systems. so our markets are wide and vary from wood
                            manufacturers, mills, recycling plants and power
                            stations to pharmaceutical, automotive manufacturers
                            and prisons. Being so specialised we must work to BS
                            and VDS (German) standards to guarantee high
                            standards and quality of work.
                            <br />
                            <br />
                            Specialist fire safety systems require extensive
                            knowledge and expertise. And with a team that has
                            over 30 years experience we offer close consultation
                            and tailored solutions in their design,
                            installation, maintenance and routine servicing.
                            From critical installations, such as banks and IT
                            rooms, through to general fire alarm fitting we
                            adopt the same level of professionalism and have all
                            relevant accreditations – giving you a complete
                            service from initial guidance and advice through to
                            final installation. As a design and build house you
                            can also be assured that we have expertise in all
                            recognised fire prevention systems including inert
                            gas, chemical gas and toxic as well as VESDA systems
                            (Very Early Warning System) enabling us to always
                            find the most suitable and cost-effective result for
                            you.
                        </p>
                    </div>
                    <div className='right-text'>
                        <p>
                            Designing, building, installing and maintaining a
                            fire system is all about the knowledge and expertise
                            of the individuals carrying out the work. It takes
                            many years of experience to be able to properly
                            evaluate the requirements of an organisation,
                            however large or small, and be able to tailor the
                            most suitable solution. At Chrisason Fire we have a
                            team with many years of time-served experience under
                            their belts. Having worked within the fire system
                            installation profession for decades we have dealt
                            with all major systems and manufacturers and seen
                            how new techniques have evolved over the years.
                            <br />
                            <br />
                            We have also seen how health and safety legislation
                            has dramatically affected the way businesses need to
                            look at their fire prevention systems in order to
                            remain compliant, as well as safe. To bring that
                            expertise to you we adopt a very straightforward,
                            pragmatic approach. When you first contact us, one
                            of our highly qualified team will visit your
                            premises for an initial discussion about your needs
                            and the reasons for installing a new or upgraded
                            fire system. Is it because you have recognised a
                            need to apply greater protection to your business?
                            Are you concerned about compliance with the law? Are
                            you looking for a more cost-effective solution to
                            the one in place currently? Chrisason Fire can help!
                        </p>
                    </div>
                </div>
            </div>

            <div className='more-about'>
                <div className='more-about-title'>More About Us</div>
                <div className='more-about-flex'>
                    <div className='more-left-text'>
                        <p className='text-title'>History</p>
                        <p>
                            Traditionally in the business of importing security
                            and fire protection equipment and installations the
                            history of the company dates back to 1987. CHRISTIAN
                            R. IYIRE the actual Chairman of the board of the
                            company, started with his associated foreign
                            partners - Lindsey Jones (UK) to import fire
                            extinguishers and security equipment to the country.
                            <br />
                            <br />
                            Chrisason quickly grew with the analysis of fire
                            risks and study of the required protection, followed
                            by engineering, installation, tests and maintenance
                            of the equipment and necessary systems for a
                            reliable security and fire protection system.
                        </p>
                    </div>
                    <div className='more-right-text'>
                        <p className='text-title'>Our Latest Breakthrough</p>
                        <p>
                            Today Chrisason Fire leads the nation providing
                            first class fire protection and security equipment
                            to State Governments, International Oil Companies,
                            Universities and other organisations. Growing from
                            humble beginnings, we have maintained the same
                            approachable but quality service that has helped us
                            build a formidable client base.
                            <br />
                            <br />
                            Through our three decades of expertising in the
                            safety industry, we have affiliation with major
                            Security and fire equipment manufacturers overseas
                            from where we obtain our technical support such as,
                            Angus FIRE ARMOUR Ltd, (UK), CHUBB FIRE (UK),
                            PYRENE, BOC GAS, WILLIAMSONS (UK), BROOKS EQUIPMENT
                            INC. (USA), NOHA (NORWAY) & COFFCO (INDIA) to
                            mention but a few.
                        </p>
                    </div>
                </div>
            </div>

            <div className='csr-main'>
                <div className='csr-content'>
                    <div className='csr-title'>
                        <h1>Corporate Social Responsibility</h1>
                    </div>
                </div>
            </div>

            <div className='csr-text'>
                <div className='csr-left-text'>
                    <p>
                        Corporate Social Responsibility is strongly connected
                        with the principles of Sustainability; an organisation
                        should make decisions based not only on financial
                        factors, but also on the social and environmental
                        consequences. Therefore it is the core corporate
                        responsibility of our Company to practice its corporate
                        values through commitment to grow in a socially and
                        environmentally responsible way, while meeting the
                        interests of its stakeholders.
                        <br />
                        <br />
                        We at Chrisason Fire Protection Limited, believe that
                        reaching out to underserved communities is part of our
                        CFPL values. We believe in transcending business
                        interests and grappling with the "quality of life"
                        challenges that underserved communities face and working
                        towards making a meaningful difference to them.
                    </p>
                </div>
                <div className='csr-right-text'>
                    <p>
                        Our mission is to improve the quality of human life by
                        enabling people to do more, feel better and live longer.
                        We intend to provide resources in terms of money,
                        medicines, time and equipment to nonprofit organisations
                        to focus on programs that are 'innovative, sustainable
                        and bring real benefits to those most in need'. Our
                        philosophy is to target support to selected programs
                        that are innovative, sustainable and which produce
                        tangible results.
                        <br />
                        <br />
                        We intend to lend a helping hand to the underprivileged
                        in our society through the support of women, children
                        and the aged in the areas of Health, Education, Public
                        Sanitation etc. Implementing this philosophy in spirit,
                        we shall make a positive contribution to the communities
                        in which we operate, and invest in health and education
                        programs and partnerships that aim to bring sustainable
                        improvements to these people.
                    </p>
                </div>
            </div>

            <div className='careers-main'>
                <div className='careers-img'>
                    <img src={careers} alt=''></img>
                </div>
            </div>
            <div className='careers-text'>
                <div className='light-text'>
                    <p>
                        As the demand for our services grows, so our demand for
                        fire protection engineers continues to grow. We are very
                        forused in providing excellent training and development
                        for our team members, increasing their career
                        opportunities and offerring them a chance to grow. We
                        recruite the best technicians and train them up to be
                        build experience and develop them to become engineers.
                        Our fire protection engineers job roles vary from
                        analysing existing protection measures to designing
                        up-to-date fire protection systems.
                    </p>
                </div>
                <div className='bold-text'>
                    <b>
                        Fire protection is a well-paying career with a variety
                        of adaptability including: government, consulting
                        engineering firms, the petrochemical industry, the
                        entertainment industry, insurance companies, federal
                        agencies, healthcare facilities, code enforcement
                        agencies, and many other areas.
                    </b>
                </div>
            </div>
            <div className='careers-black'>
                <div className='careers-black-left'>
                    <p>Fire Engineer Technician</p>
                    <br /> <br />
                    <p>
                        To join as a technician, we require responsibility,
                        strict attention to detail, and good communication
                        skills embedded well in your personality. If you're up
                        for the challenge, please forward your CV & Cover letter
                        to info@chrisasonfire.com and a member of our team will
                        get back to you
                    </p>
                </div>
                <div className='careers-black-right'>
                    <p>Prospective Application</p> <br /> <br />
                    <p>
                        Please forward your CV & Cover letter to
                        info@chrisasonfire.com and a member of our team will get
                        back to you should a position come up that suits your
                        experience & skills.
                    </p>
                </div>
            </div>

            <div className='slider-main'>
                <div className='slider-title'>
                    <h1>Our Commitment to Customers</h1>
                </div>
                <div className='slider-context'>
                    <div className='img-slider'>
                        <CarouselProvider
                            className='company-slide'
                            isIntrinsicHeight={true}
                            dragEnabled={true}
                            touchEnabled={true}
                            totalSlides={3}
                            interval={3000}
                            isPlaying={true}
                            infinite={true}>
                            <Slider>
                                <Slide index={0}>
                                    <p>
                                        "Corporate social responsibility is a
                                        hard-edged business decision. Not
                                        because it is a nice thing to do or
                                        because people are forcing us to do
                                        it... because it is good for our
                                        business"
                                    </p>
                                    <br />
                                    <br />
                                    <b className='quote-author'>
                                        Niall Fitzerald <br />
                                        Former CEO. Unilever
                                    </b>
                                </Slide>
                                <Slide index={1}>
                                    <p>
                                        "Corporate social responsibility is a
                                        hard-edged business decision. Not
                                        because it is a nice thing to do or
                                        because people are forcing us to do
                                        it... because it is good for our
                                        business"
                                    </p>
                                    <br />
                                    <br />
                                    <b className='quote-author'>
                                        Niall Fitzerald <br />
                                        Former CEO. Unilever
                                    </b>
                                </Slide>
                                <Slide index={2}>
                                    <p>
                                        "Corporate social responsibility is a
                                        hard-edged business decision. Not
                                        because it is a nice thing to do or
                                        because people are forcing us to do
                                        it... because it is good for our
                                        business"
                                    </p>
                                    <br />
                                    <br />
                                    <b className='quote-author'>
                                        Niall Fitzerald <br />
                                        Former CEO. Unilever
                                    </b>
                                </Slide>
                            </Slider>
                        </CarouselProvider>
                    </div>
                </div>
            </div>
        </main>
    );
}
