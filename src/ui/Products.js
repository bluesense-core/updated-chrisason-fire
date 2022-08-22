import React from 'react';
import './products.css';
import products from '../images/products.png';
import hose from '../images/hose.png';
import waterhose from '../images/waterhose.png';
import firechem from '../images/firechem.png';
import foam from '../images/foam.png';
import monitor from '../images/monitor.png';
import fits from '../images/fits.png';
import pumps from '../images/pumps.png';
import extin from '../images/extin.png';
import systems from '../images/systems.png';
import chops from '../images/chops.png';
import gears from '../images/gears.png';
import more from '../images/more.png';
import fabri from '../images/fabri.png';
import pro1 from '../images/process1.svg';
import pro2 from '../images/process2.svg';
import pro3 from '../images/process3.svg';
import pro4 from '../images/process4.svg';
import refurbish from '../images/refurbish.png';
import yellow from '../images/yellow.png';
import red from '../images/red.png';
import fire from '../images/fire.png';

export default function Products() {
    return (
        <main className='lh-sm'>
            <div className='products-img'>
                <img src={products} alt='Homepage'></img>
                <div className='products-text'>
                    <h1>Our Products</h1>
                    <p>
                        We have committed our entire existence to quality safety
                        engineering..
                    </p>
                </div>
                <div className='products-foot'>
                    <p>
                        We have a proven track record of over 30years in the
                        Fire Protection Industry with clients including
                        Government bodies, International Oil Companies & <br />
                        professionally certified engineers that would build and
                        install our British standard certified products.
                        Ensuring quality engineering for all our clients.
                    </p>
                </div>
            </div>

            {/*---------------------------------cards section -------------------------------------*/}
            <div className='whole-flex'>
                <div className='product-card-flex'>
                    <div className='product-card'>
                        <div className='pc-img'>
                            <img src={hose} alt=''></img>
                        </div>
                        <div className='pc-text'>
                            <b>Fire Hose</b>
                            <p>
                                We specialise in Angus Hosereels. The world’s
                                original and best maintenance-free fire hose,
                                exceeds BS 6391:2009 Type 3 and Kitemarked. A
                                strong, lightweight covered hose combining high
                                performance with affordability.
                            </p>
                        </div>
                    </div>

                    <div className='product-card'>
                        <div className='pc-img'>
                            <img src={waterhose} alt=''></img>
                        </div>
                        <div className='pc-text'>
                            <b>Water Delivery Hose</b>
                            <p>
                                Hi-Vol large-diameter hose offers an efficient
                                means of delivering critical water supplies
                                during an emergency when water resources are
                                limited or non-existent. Hivolite is constructed
                                from specially formulated high grade synthetic
                                rubber, extruded through an all-synthetic woven
                                jacket, to provide maximum resistance to
                                abrasion, UV and weathering.
                            </p>
                        </div>
                    </div>

                    <div className='product-card'>
                        <div className='pc-img'>
                            <img src={firechem} alt=''></img>
                        </div>
                        <div className='pc-text'>
                            <b>Fire Fighting Chemicals</b>
                            <p>
                                Chrisason Fire only uses Angus Fire foams. Angus
                                Fire maintains its position at the forefront of
                                firefighting foam technology through continuous
                                investment in research and development. You can
                                rely on Chrisason Fire to provide foams of the
                                highest firefighting performance with low
                                environmental impact.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='product-card-flex'>
                    <div className='product-card'>
                        <div className='pc-img'>
                            <img src={foam} alt=''></img>
                            <div className='pc-text'>
                                <b>Foam Equipment</b>
                                <p>
                                    Rapid and affordable fire protection for
                                    sites where flammable and hazardous liquids
                                    are stored or processed. Ideal for rapid
                                    deployment of foam to flammable liquid fires
                                    and chemical spills. A full range of fixed
                                    foam system equipment, including the Polaris
                                    range of water-powered foam induction
                                    motors.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='product-card'>
                        <div className='pc-img'>
                            <img src={monitor} alt=''></img>
                            <div className='pc-text'>
                                <b>Monitors</b>
                                <p>
                                    We have three types of Monitors: Portable,
                                    Mobile & Fixed. Portable: Lightweight
                                    monitors for quick and easy deployment with
                                    excellent stability in use and easy storage.
                                    Mobile: Trailer-mounted monitors are ideal
                                    for proteting locations inadequately covered
                                    by fixed monitors and provide a highly
                                    flexible addition to any fire service
                                    armoury of equipment. Fixed: We stock lever
                                    operated, oscillating and remote control
                                    monitors
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='product-card'>
                        <div className='pc-img'>
                            <img src={fits} alt=''></img>
                            <div className='pc-text'>
                                <b>Fire Fittings</b>
                                <p>
                                    We have three types of fitting: The Osprey,
                                    The Harrier & The Falcon The Osprey
                                    Selectable Flow Water and Foam Nozzle
                                    provides a range of flow combinations
                                    without having to leave the area of the
                                    incident to change nozzle. Flow rate from
                                    360 - 750 l/min @ 7 Bar Harrier: 115 - 475
                                    l/min @ 7 Bar Falcon: 360 - 950 litre/min @
                                    7 Bar
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='product-card-flex'>
                    <div className='product-card'>
                        <div className='pc-img'>
                            <img src={pumps} alt=''></img>
                        </div>
                        <div className='pc-text'>
                            <b>Portable Pumps</b>
                            <p>
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
                        </div>
                    </div>
                    <div className='product-card'>
                        <div className='pc-img'>
                            <img src={extin} alt=''></img>
                        </div>
                        <div className='pc-text'>
                            <b>Fire Extinguisher</b>
                            <p>
                                We stock two major types of extinguishers:
                                Portable & Mobile. Portable: Our range of
                                portable fire extinguishers is BSI Kitemark
                                approved to the European Standard EN3. Mobile:
                                Our comprehensive selection of mobile fire
                                extinguishes is ideal for a wide range of
                                industrial applications.
                            </p>
                        </div>
                    </div>
                    <div className='product-card'>
                        <div className='pc-img'>
                            <img src={systems} alt=''></img>
                        </div>
                        <div className='pc-text'>
                            <b>Fire Engineering Systems</b>
                            <p>
                                Our fire system application solutions range
                                from: Offshore platfroms; Helidecks, helipads,
                                hangers; Floating production & transport; Docks
                                & Jetties; Petrochemical plants; Tank storage
                                farms & Liquefied Natural Gas (LNG).
                            </p>
                        </div>
                    </div>
                </div>

                <div className='product-card-flex'>
                    <div className='product-card'>
                        <div className='pc-img'>
                            <img src={chops} alt=''></img>
                        </div>
                        <div className='pc-text'>
                            <b>Fire Engines & Choppers</b>
                            <p>
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
                        </div>
                    </div>
                    <div className='product-card'>
                        <div className='pc-img'>
                            <img src={gears} alt=''></img>
                        </div>
                        <div className='pc-text'>
                            <b>Fire Fighting Gears</b>
                            <p>
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
                        </div>
                    </div>
                    <div className='product-card'>
                        <div className='pc-img'>
                            <img src={more} alt=''></img>
                        </div>
                        <div className='pc-text'>
                            <b>& Much More</b>
                            <p>
                                Looked through our website and still cannot find
                                what you are looking for? Get in touch with our
                                team. You can find our details on our contact
                                page. Even if we do not have what you are after,
                                we could direct you to one of our partners or a
                                likeminded competitor who may be able to better
                                meet your needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='fabrication-img'>
                <img src={fabri} alt='Homepage'></img>
                <div className='fabrication-text'>
                    <h1>Chrisason Fabrication</h1>
                </div>
            </div>

            <div className='fabrication-paragraph'>
                <p>
                    Chrisason Fire is certified BAFE SP103 - The Inspection,
                    Testing, Refurbishing and Refilling of Portable Fire
                    Extinguishers and Containers in conjunction with Fire
                    Extinguishing Equipment.
                    <br />
                    <br />
                    We test and refurbish all portable and wheeled fire
                    extinguisher. Our team of expert fire technicians are
                    experienced in overhauling all portable and wheeled fire
                    extinguishers, hosereels and other fire prevention
                    equipement.
                    <br />
                    <br />
                    Fire extinguishers require stringent maintenance to ensure
                    they will work when needed, and are more importantly, safe.
                    Fire extinguishers are pressurised vessels that can explode
                    when corroded or damaged, and have been know to cause
                    serious injury and even fatal.
                </p>
            </div>

            <div className='fabrication-grid'>
                <div className='fabrication1'>
                    <div className='fabrication-procss-img'>
                        <img src={pro4} alt='25%'></img>
                    </div>
                    <div className='fabrication-title'>Frequent Clients</div>
                    <div className='fabrication-body'></div>
                </div>

                <div className='fabrication2'>
                    <div className='fabrication-procss-img'>
                        <img src={pro3} alt='25%'></img>
                    </div>
                    <div className='fabrication-title'>
                        Key Global Parrtners
                    </div>
                    <div className='fabrication-body'></div>
                </div>

                <div className='fabrication3'>
                    <div className='fabrication-procss-img'>
                        <img src={pro2} alt='25%'></img>
                    </div>
                    <div className='fabrication-title'>Referrals</div>
                    <div className='fabrication-body'></div>
                </div>

                <div className='fabrication4'>
                    <div className='fabrication-procss-img'>
                        <img src={pro1} alt='25%'></img>
                    </div>
                    <div className='fabrication-title'>Major Complaints</div>
                    <div className='fabrication-body'></div>
                </div>
            </div>

            <div className='refurbishment-img'>
                <img src={refurbish} alt='Homepage'></img>
                <div className='refurbishment-text'>
                    <h1>Chrisason Refurbishment Process</h1>
                </div>
            </div>

            <div className='refurbish-card-grid'>
                <div className='refurbish-card'>
                    <div className='refurbish-card-img'>
                        <img src={yellow} alt=''></img>
                    </div>
                    <div className='refurbish-card-text'>
                        <p className='ptitle mb-0'>Safety Equipment</p>
                        <p>
                            Our workshops have been fitted with the newest and
                            most modern fire equipment and tools to help our
                            engineers and technicians refurbish, service and
                            maintain your fire protection equipment to the
                            highest standards.
                        </p>
                    </div>
                </div>

                <div className='refurbish-card'>
                    <div className='refurbish-card-img'>
                        <img src={red} alt=''></img>
                    </div>
                    <div className='refurbish-card-text'>
                        <p className='ptitle mb-0'>Refabrication</p>
                        <p>
                            Chrisason is one of the few fire protection
                            organisations in Nigeria to be certified with both
                            BSI and BAFE. These certifications allows us to
                            guarantee you a quality fabrication and
                            refurbishment process should you chose to do
                            business with us.
                        </p>
                    </div>
                </div>

                <div className='refurbish-card'>
                    <div className='refurbish-card-img'>
                        <img src={fire} alt=''></img>
                    </div>
                    <div className='refurbish-card-text'>
                        <p className='ptitle mb-0'>Fire Products</p>
                        <p>
                            Chrisason is one of the few fire protection
                            organisations in Nigeria to be certified with both
                            BSI and BAFE. These certifications allows us to
                            guarantee you a quality fabrication and
                            refurbishment process should you chose to do
                            business with us.
                        </p>
                    </div>
                </div>
            </div>

            <div className='hse-title'>
                <h1 className='fw-bold'>HSE Policy</h1>
                <p>Call us for a free consult</p>
            </div>
            <div className='hse-policy'>
                <div className='hse-policy-paragraph'>
                    <div className='hse-policy-head'>
                        <p className='mb-0'>Chrisason Fire Safety Policy</p>
                    </div>
                    <div className='hse-policy-text'>
                        <p>
                            Chrisason Fire actively seeks to create and maintain
                            a working environment safe from the risks of fire,
                            in compliance with the Regulatory Reform (Fire
                            Safety) Order 2005 and The Management of Health and
                            Safety at Work Regulations 1999.
                            <br />
                            <br />
                            Chrisason Fire will ensure, so far as is reasonably
                            practicable, the health, safety and welfare with
                            regard to fire, of all its employees, contractors
                            and visitors and any others on our premises. We also
                            acknowledge our responsibility to protect our
                            clienteles' buildings and assets from the threat of
                            the accidental outbreak of fire and the risk of
                            serious disruption to our property or our
                            clienteles'.
                            <br />
                            <br />
                            The Fire Safety Plan and Procedures in our Health
                            and Safety Policy - CFPL will:
                        </p>
                        <ol>
                            <li>
                                Provide information, instruction, training, and
                                supervision to enable all employees to carry out
                                their duties effectively and safely following
                                health and safety guidelines
                            </li>
                            <li>Provide safe equipment and systems of work</li>
                            <li>
                                Carry out meaningful fire risk assessments for
                                all areas and implement appropriate remedial
                                actions
                            </li>
                            <li>
                                Be proactive in fire prevention and reactive in
                                fire and near miss investigation
                            </li>
                        </ol>
                        <p>
                            Our Health and Safety Officer is responsible for
                            ensuring that the fire strategy is implemented and
                            that responsibilities are assigned, accepted, and
                            fulfilled at all levels. Our Health and Safety
                            Committee will support the implementation of the
                            Fire Safety Plan.
                            <br />
                            <br />
                            All staff are required to take reasonable steps to
                            ensure that they do not place themselves or others
                            at risk of harm. They have the responsibility for
                            ensuring that they are familiar with and understand
                            the content of any relevant documents that relate to
                            fire safety for the company and must co-operate
                            fully with Chrisason in complying with all
                            procedures and measures to protect the safety and
                            well being of all.
                            <br />
                            <br />
                            Good relationships and effective communication will
                            be maintained with all staff to ensure that fire
                            safety issues which are raised may be resolved
                            through meaningful discussion. Fire Safety will be a
                            standing agenda item at regular management meetings.
                            All long-term visitors to the premises will be
                            briefed on Chrisason's evacuation and fire safety
                            procedures.
                            <br />
                            <br />
                            Problems relating to fire safety at Chrisason must
                            be reported to the Health and Safety Office, at the
                            earliest opportunity, so that remedial action may be
                            taken.
                        </p>
                    </div>
                </div>
            </div>

            <div className='hse-black'>
                <div className='hse-left'>
                    <div className='hse-left-head'>
                        <p className='mb-0'>UL Standards Guarantee</p>
                    </div>
                    <div className='hse-left-body'>
                        <p>
                            Chrisason Fire is one of the few fire protection
                            organisations in Nigeria that meets and exceeds the
                            stringent standards of theUK refurbishment
                            processes. Our processes have been inspected and
                            endorsed by a few quality certifying organisations
                            from the UK. This gives our clientele the added
                            assurance that we take quality and safety very
                            seriously.
                        </p>
                    </div>
                </div>
                <div className='hse-right'>
                    <div className='hse-right-head'>
                        <p className='mb-0'>Why Clients Chose us</p>
                    </div>
                    <div className='hse-right-body'>
                        <p>
                            Consistently delivering professional teams to
                            support clients onsite projeccts and always
                            supplying quality products to clientele is why our
                            clients believe in us.
                        </p>
                    </div>
                    <div className='hse-right-head'>
                        <br />
                        <p className='mb-0'>Our Product Policy</p>
                    </div>
                    <div className='hse-right-body'>
                        <p>
                            We believe in our employees. We also believe in our
                            products. This is what lets us assure you that if
                            for any reason you are unhappy with our products or
                            services, we will be happy tto refund you the
                            charge.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
