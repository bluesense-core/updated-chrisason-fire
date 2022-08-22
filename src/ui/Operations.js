import React from 'react';
import './operations.css';
import orimg from '../images/orimg.png';
import servicing from '../images/servicing.png';
import fabrication from '../images/fabrication.png';
import procurement from '../images/procurement.png';
import installation from '../images/installation.png';
import fireprotect from '../images/fireprotect.png';
import no1 from '../images/no1.svg';
import nation from '../images/nation.svg';
import free from '../images/free.svg';
import quality from '../images/quality.svg';
import trust from '../images/trust.svg';
import safe from '../images/safe.svg';
import fireengine from '../images/fireengine.png';
import global from '../images/global.svg';
import work from '../images/work.svg';
import rnd from '../images/rnd.svg';
import qa from '../images/qa.svg';
import report from '../images/report.svg';
import time from '../images/time.svg';
import firesafety from '../images/firesafety.png';

export default function Operations() {
    return (
        <main>
            <div className='or-title'>
                <h1 className='fw-bold'>Chrisason Operations & Research</h1>
            </div>

            <div className='or-section lh-sm'>
                <div className='left-section'>
                    <p>
                        Chrisason works closely with the NFPA Foundation on
                        research now in its second quarter century of service,
                        the Fire Protection Research Foundation continues to
                        identify and facilitate research initiatives important
                        to the fire protection engineering community. Activity
                        at the Foundation remains high, with multiple projects
                        of direct interest to SFPE members.
                        <br />
                        <br />
                        The Fire Protection Research Foundation is an
                        independent charitable organization established in 1982
                        with a mission to plan, manage and communicate research
                        in support of the NFPA mission. The NFPA mission, in
                        turn, is to reduce the worldwide burden of fire and
                        other hazards.
                    </p>
                </div>
                <div className='middle-section'>
                    <img src={orimg} alt=''></img>
                </div>
                <div className='right-section'>
                    <p>
                        Over the past five years, the Foundation has developed
                        active research programs in areas corresponding with
                        major NFPA technical committee projects. These are: i.
                        Detection and signaling; ii. iElectrical safety; iii.
                        Fire suppression; iv. Firefighter protective clothing
                        and equipment; v. Firefighting tactics; vi. Hazardous
                        materials/commodity storage; and vii. Transportation.
                        <br />
                        <br />
                        These projects cover a range of topics, from research
                        supported by the U.S. Department of Homeland Security. A
                        complete list of existing projects and recent reports is
                        available at www.nfpa.org/foundation.
                    </p>
                </div>
            </div>
            <div className='grid-sec'>
                <div className='or-grid'>
                    <div className='or-context lh-sm'>
                        <div className='or-img'>
                            <img src={servicing} alt=''></img>
                        </div>
                        <div className='or-text lh-sm'>
                            <p className='ptitle mb-0'>Servicing</p>
                            <p className='psubtitle mb-0'>Fire Systems</p>
                            <p className='mb-0'>
                                Chrisason Fire are specialist at fabricating
                                fire protection extinguishers and parts that may
                                not be in the market.
                            </p>
                        </div>
                    </div>

                    <div className='or-context lh-sm'>
                        <div className='or-img'>
                            <img src={fabrication} alt=''></img>
                        </div>
                        <div className='or-text'>
                            <p className='ptitle mb-0'>Fabrication</p>
                            <p className='psubtitle mb-0'>Fire Units</p>
                            <p className='mb-0'>
                                Chrisason Fire Engineers are experts at
                                servicing fire protection systems, fire
                                suppression systems, hosereels, fire alarms,
                                etc.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='or-grid'>
                    <div className='or-context lh-sm'>
                        <div className='or-img'>
                            <img src={procurement} alt=''></img>
                        </div>
                        <div className='or-text'>
                            <p className='ptitle mb-0'>Procurement</p>
                            <p className='psubtitle mb-0'>Fire Installments</p>
                            <p className='mb-0'>
                                We at Chrisason help our clients procure
                                equipment and machinery that help provide a safe
                                and secure environment for clientele.
                            </p>
                        </div>
                    </div>

                    <div className='or-context lh-sm'>
                        <div className='or-img'>
                            <img src={installation} alt=''></img>
                        </div>
                        <div className='or-text'>
                            <p className='ptitle mb-0'>Installation</p>
                            <p className='psubtitle mb-0'>Fire Equipments</p>
                            <p className='mb-3'>
                                With over 30years of experience we have become
                                experts at installing a variety of fire
                                protection equipment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='fire-img'>
                <img src={fireprotect} alt='Homepage'></img>
                <div className='fire-text'>
                    <h1>Fire Protection</h1>
                    <p className='lh-sm'>
                        With over 35Years expertising in the fire protection
                        industry, we are well positioned to
                        <br /> secure and protect your organisation's hard
                        earned asset. Call us today for a free consult.
                    </p>
                </div>
            </div>

            <div className='fire-card-section lh-sm'>
                <div className='fire-cards-grid'>
                    <div className='fire-card'>
                        <div className='fire-card-icon'>
                            <img src={no1} alt=''></img>
                        </div>
                        <div className='fire-card-head'>
                            <p className='mb-0'>Nigeria’s #1</p>
                        </div>
                        <div className='fire-card-body'>
                            <p>
                                Chrisason Fire is the country's top fire
                                protection company. The company was started in
                                1987 with the goal of just ensuring the Nation
                                was well equipped with fire safety equipment to
                                ensure the protection of life and property
                                around the country. Now the company boasts of a
                                lot more fire engineering expertise and
                                experience from almost 30years in service to
                                Nigerians.
                            </p>
                        </div>
                    </div>

                    <div className='fire-card'>
                        <div className='fire-card-icon'>
                            <img src={nation} alt=''></img>
                        </div>
                        <div className='fire-card-head'>
                            <p className='mb-0'>Nigeria’s #1</p>
                        </div>
                        <div className='fire-card-body'>
                            <p>
                                Chrisason Fire is the country's top fire
                                protection company. The company was started in
                                1987 with the goal of just ensuring the Nation
                                was well equipped with fire safety equipment to
                                ensure the protection of life and property
                                around the country. Now the company boasts of a
                                lot more fire engineering expertise and
                                experience from almost 30years in service to
                                Nigerians.
                            </p>
                        </div>
                    </div>

                    <div className='fire-card'>
                        <div className='fire-card-icon'>
                            <img src={quality} alt=''></img>
                        </div>
                        <div className='fire-card-head'>
                            <p className='mb-0'>Nigeria’s #1</p>
                        </div>
                        <div className='fire-card-body'>
                            <p>
                                Chrisason Fire is the country's top fire
                                protection company. The company was started in
                                1987 with the goal of just ensuring the Nation
                                was well equipped with fire safety equipment to
                                ensure the protection of life and property
                                around the country. Now the company boasts of a
                                lot more fire engineering expertise and
                                experience from almost 30years in service to
                                Nigerians.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='fire-cards-grid'>
                    <div className='fire-card'>
                        <div className='fire-card-icon'>
                            <img src={trust} alt=''></img>
                        </div>
                        <div className='fire-card-head'>
                            <p className='mb-0'>Nigeria’s #1</p>
                        </div>
                        <div className='fire-card-body'>
                            <p>
                                Chrisason Fire is the country's top fire
                                protection company. The company was started in
                                1987 with the goal of just ensuring the Nation
                                was well equipped with fire safety equipment to
                                ensure the protection of life and property
                                around the country. Now the company boasts of a
                                lot more fire engineering expertise and
                                experience from almost 30years in service to
                                Nigerians.
                            </p>
                        </div>
                    </div>

                    <div className='fire-card'>
                        <div className='fire-card-icon'>
                            <img src={safe} alt=''></img>
                        </div>
                        <div className='fire-card-head'>
                            <p className='mb-0'>Nigeria’s #1</p>
                        </div>
                        <div className='fire-card-body'>
                            <p>
                                Chrisason Fire is the country's top fire
                                protection company. The company was started in
                                1987 with the goal of just ensuring the Nation
                                was well equipped with fire safety equipment to
                                ensure the protection of life and property
                                around the country. Now the company boasts of a
                                lot more fire engineering expertise and
                                experience from almost 30years in service to
                                Nigerians.
                            </p>
                        </div>
                    </div>

                    <div className='fire-card'>
                        <div className='fire-card-icon'>
                            <img src={free} alt=''></img>
                        </div>
                        <div className='fire-card-head'>
                            <p className='mb-0'>Nigeria’s #1</p>
                        </div>
                        <div className='fire-card-body'>
                            <p>
                                Chrisason Fire is the country's top fire
                                protection company. The company was started in
                                1987 with the goal of just ensuring the Nation
                                was well equipped with fire safety equipment to
                                ensure the protection of life and property
                                around the country. Now the company boasts of a
                                lot more fire engineering expertise and
                                experience from almost 30years in service to
                                Nigerians.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile view section */}
            <div className='fire-cards-grid-mobile lh-sm'>
                <div className='fire-card'>
                    <div className='fire-card-icon'>
                        <img src={no1} alt=''></img>
                    </div>
                    <div className='fire-card-head'>
                        <p className='mb-0'>Nigeria’s #1</p>
                    </div>
                    <div className='fire-card-body'>
                        <p>
                            Chrisason Fire is the country's top fire protection
                            company. The company was started in 1987 with the
                            goal of just ensuring the Nation was well equipped
                            with fire safety equipment to ensure the protection
                            of life and property around the country. Now the
                            company boasts of a lot more fire engineering
                            expertise and experience from almost 30years in
                            service to Nigerians.
                        </p>
                    </div>
                </div>

                <div className='fire-card'>
                    <div className='fire-card-icon'>
                        <img src={nation} alt=''></img>
                    </div>
                    <div className='fire-card-head'>
                        <p className='mb-0'>Nigeria’s #1</p>
                    </div>
                    <div className='fire-card-body'>
                        <p>
                            Chrisason Fire is the country's top fire protection
                            company. The company was started in 1987 with the
                            goal of just ensuring the Nation was well equipped
                            with fire safety equipment to ensure the protection
                            of life and property around the country. Now the
                            company boasts of a lot more fire engineering
                            expertise and experience from almost 30years in
                            service to Nigerians.
                        </p>
                    </div>
                </div>
            </div>

            <div className='fire-cards-grid-mobile lh-sm'>
                <div className='fire-card'>
                    <div className='fire-card-icon'>
                        <img src={quality} alt=''></img>
                    </div>
                    <div className='fire-card-head'>
                        <p className='mb-0'>Nigeria’s #1</p>
                    </div>
                    <div className='fire-card-body'>
                        <p>
                            Chrisason Fire is the country's top fire protection
                            company. The company was started in 1987 with the
                            goal of just ensuring the Nation was well equipped
                            with fire safety equipment to ensure the protection
                            of life and property around the country. Now the
                            company boasts of a lot more fire engineering
                            expertise and experience from almost 30years in
                            service to Nigerians.
                        </p>
                    </div>
                </div>

                <div className='fire-card'>
                    <div className='fire-card-icon'>
                        <img src={trust} alt=''></img>
                    </div>
                    <div className='fire-card-head'>
                        <p className='mb-0'>Nigeria’s #1</p>
                    </div>
                    <div className='fire-card-body'>
                        <p>
                            Chrisason Fire is the country's top fire protection
                            company. The company was started in 1987 with the
                            goal of just ensuring the Nation was well equipped
                            with fire safety equipment to ensure the protection
                            of life and property around the country. Now the
                            company boasts of a lot more fire engineering
                            expertise and experience from almost 30years in
                            service to Nigerians.
                        </p>
                    </div>
                </div>
            </div>

            <div className='fire-cards-grid-mobile lh-sm'>
                <div className='fire-card lh-sm'>
                    <div className='fire-card-icon'>
                        <img src={safe} alt=''></img>
                    </div>
                    <div className='fire-card-head'>
                        <p className='mb-0'>Nigeria’s #1</p>
                    </div>
                    <div className='fire-card-body'>
                        <p className='lh-sm'>
                            Chrisason Fire is the country's top fire protection
                            company. The company was started in 1987 with the
                            goal of just ensuring the Nation was well equipped
                            with fire safety equipment to ensure the protection
                            of life and property around the country. Now the
                            company boasts of a lot more fire engineering
                            expertise and experience from almost 30years in
                            service to Nigerians.
                        </p>
                    </div>
                </div>

                <div className='fire-card'>
                    <div className='fire-card-icon'>
                        <img src={free} alt=''></img>
                    </div>
                    <div className='fire-card-head'>
                        <p className='mb-0'>Nigeria’s #1</p>
                    </div>
                    <div className='fire-card-body'>
                        <p className='lh-sm'>
                            Chrisason Fire is the country's top fire protection
                            company. The company was started in 1987 with the
                            goal of just ensuring the Nation was well equipped
                            with fire safety equipment to ensure the protection
                            of life and property around the country. Now the
                            company boasts of a lot more fire engineering
                            expertise and experience from almost 30years in
                            service to Nigerians.
                        </p>
                    </div>
                </div>
            </div>

            <div className='fire-engine-img'>
                <img src={fireengine} alt='Homepage'></img>
                <div className='fire-engine-text'>
                    <h1>Fire Engineering</h1>
                    <p className='lh-sm'>
                        Oil & Gas companies all over the globe have trusted us
                        to <br />
                        secure their vessels and refineries for over three
                        decades.. why shouldn't you?
                    </p>
                </div>
            </div>

            <div className='fire-engine-card-section lh-sm'>
                <div className='fire-engine-cards-grid'>
                    <div className='fire-engine-card'>
                        <div className='fire-engine-card-icon'>
                            <img src={global} alt=''></img>
                        </div>
                        <div className='fire-engine-card-head'>
                            <p className='mb-0'>Global Clientele</p>
                        </div>
                        <div className='fire-engine-card-body'>
                            <p>
                                Chrisason Fire has built a concrete reputation
                                that exceeds Nigeria and has become a trusted
                                brand for international organisations operating
                                in Nigeria.
                            </p>
                        </div>
                    </div>

                    <div className='fire-engine-card'>
                        <div className='fire-engine-card-icon'>
                            <img src={work} alt=''></img>
                        </div>
                        <div className='fire-engine-card-head'>
                            <p className='mb-0'>Work Guarantee</p>
                        </div>
                        <div className='fire-engine-card-body'>
                            <p>
                                Throughout our organisation, we have instilled
                                in every memeber of our team - the habit of a
                                strong work ethic. We consistently deliver time
                                & time again.
                            </p>
                        </div>
                    </div>

                    <div className='fire-engine-card'>
                        <div className='fire-engine-card-icon'>
                            <img src={time} alt=''></img>
                        </div>
                        <div className='fire-engine-card-head'>
                            <p className='mb-0'>Time Milestone</p>
                        </div>
                        <div className='fire-engine-card-body'>
                            <p>
                                We have a very professional workforce that is
                                very focused and experienced. We will always
                                endeavour to meet deadlines even when it will
                                cost us financially.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='fire-engine-cards-grid'>
                    <div className='fire-engine-card'>
                        <div className='fire-engine-card-icon'>
                            <img src={report} alt=''></img>
                        </div>
                        <div className='fire-engine-card-head'>
                            <p className='mb-0'>Client Support</p>
                        </div>
                        <div className='fire-engine-card-body'>
                            <p>
                                Like every good company would say - our clients
                                are the backbone of our organisation. In this
                                stead, we always go the extra mile to ensure you
                                are completely satisfied with us.
                            </p>
                        </div>
                    </div>

                    <div className='fire-engine-card'>
                        <div className='fire-engine-card-icon'>
                            <img src={rnd} alt=''></img>
                        </div>
                        <div className='fire-engine-card-head'>
                            <p className='mb-0'>Research & Development</p>
                        </div>
                        <div className='fire-engine-card-body'>
                            <p>
                                Focusing more of our expenses on research &
                                development, we ensure you get the latest safety
                                technologies to protect & safeguard your
                                investments.
                            </p>
                        </div>
                    </div>

                    <div className='fire-engine-card'>
                        <div className='fire-engine-card-icon'>
                            <img src={qa} alt=''></img>
                        </div>
                        <div className='fire-engine-card-head'>
                            <p className='mb-0'>Quality Assured</p>
                        </div>
                        <div className='fire-engine-card-body'>
                            <p>
                                CSafety is a serious issue. To this end - it is
                                imperative that your safety consultants and
                                engineers pay close attention to detail and have
                                established a reputation for assured quality
                                like we have.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile view section */}

            <div className='fire-engine-card-grid-mobile lh-sm'>
                <div className='fire-engine-card'>
                    <div className='fire-engine-card-icon'>
                        <img src={global} alt=''></img>
                    </div>
                    <div className='fire-engine-card-head'>
                        <p className='mb-0'>Global Clientele</p>
                    </div>
                    <div className='fire-engine-card-body'>
                        <p>
                            Chrisason Fire has built a concrete reputation that
                            exceeds Nigeria and has become a trusted brand for
                            international organisations operating in Nigeria.
                        </p>
                    </div>
                </div>

                <div className='fire-engine-card'>
                    <div className='fire-engine-card-icon'>
                        <img src={work} alt=''></img>
                    </div>
                    <div className='fire-engine-card-head'>
                        <p className='mb-0'>Work Guarantee</p>
                    </div>
                    <div className='fire-engine-card-body'>
                        <p>
                            Throughout our organisation, we have instilled in
                            every memeber of our team - the habit of a strong
                            work ethic. We consistently deliver time & time
                            again.
                        </p>
                    </div>
                </div>
            </div>

            <div className='fire-engine-card-grid-mobile'>
                <div className='fire-engine-card'>
                    <div className='fire-engine-card-icon'>
                        <img src={time} alt=''></img>
                    </div>
                    <div className='fire-engine-card-head'>
                        <p className='mb-0'>Time Milestone</p>
                    </div>
                    <div className='fire-engine-card-body'>
                        <p>
                            We have a very professional workforce that is very
                            focused and experienced. We will always endeavour to
                            meet deadlines even when it will cost us
                            financially.
                        </p>
                    </div>
                </div>

                <div className='fire-engine-card'>
                    <div className='fire-engine-card-icon'>
                        <img src={report} alt=''></img>
                    </div>
                    <div className='fire-engine-card-head'>
                        <p className='mb-0'>Client Support</p>
                    </div>
                    <div className='fire-engine-card-body'>
                        <p>
                            Like every good company would say - our clients are
                            the backbone of our organisation. In this stead, we
                            always go the extra mile to ensure you are
                            completely satisfied with us.
                        </p>
                    </div>
                </div>
            </div>

            <div className='fire-engine-card-grid-mobile'>
                <div className='fire-engine-card'>
                    <div className='fire-engine-card-icon'>
                        <img src={rnd} alt=''></img>
                    </div>
                    <div className='fire-engine-card-head'>
                        <p className='mb-0'>Research & Development</p>
                    </div>
                    <div className='fire-engine-card-body'>
                        <p>
                            Focusing more of our expenses on research &
                            development, we ensure you get the latest safety
                            technologies to protect & safeguard your
                            investments.
                        </p>
                    </div>
                </div>

                <div className='fire-engine-card'>
                    <div className='fire-engine-card-icon'>
                        <img src={qa} alt=''></img>
                    </div>
                    <div className='fire-engine-card-head'>
                        <p className='mb-0'>Quality Assured</p>
                    </div>
                    <div className='fire-engine-card-body'>
                        <p>
                            CSafety is a serious issue. To this end - it is
                            imperative that your safety consultants and
                            engineers pay close attention to detail and have
                            established a reputation for assured quality like we
                            have.
                        </p>
                    </div>
                </div>
            </div>

            <div className='extra-text lh-sm'>
                <div className='left-extra-text'>
                    <div className='extra-head mb-0'>
                        We go the extra mile...
                    </div>
                    <div className='extra-body mb-0'>
                        Through preventative work, Chrisason Fire engineers and
                        technicians can help you protect your employees and
                        assets from fire damage. Our fire protection engineers
                        will go the extra mile to ensure that all your safety
                        needs and concerns are met and exceeded.
                    </div>
                </div>

                <div className='right-extra-text'>
                    <div className='extra-head mb-0'>
                        Never settle for less than the best..
                    </div>
                    <div className='extra-body mb-0'>
                        Our fire engineers have been trained in newest and best
                        fire prevention techniques to assist in building,
                        installing and maintaining fire protection equipment.
                        Our experience range from the oil industry, nuclear
                        power plants, aerospace environment and terrorism
                        preventative measures.
                    </div>
                </div>
            </div>

            <div className='safety-img'>
                <img src={firesafety} alt='Homepage'></img>
                <div className='safety-text'>
                    <h1>Fire Safety Training</h1>
                </div>
            </div>

            <div className='safety-context lh-sm'>
                <div className='safety-lt'>
                    Our fire safety training courses offer comprehensive,
                    accredited training to individuals, managers, and
                    organisations. We offer fire safety courses in basic fire
                    safety training, fire risk assessment, the principles of
                    fire safety for the workplace, fire warden (fire marshal)
                    training, and fire risk assessment and management training.
                    <br />
                    <br />
                    Today’s most exceptional organisations take the safety of
                    the people and assets very seriously. In this stead, they
                    invite experts to train, equip and inform their team on how
                    to stay safe and protect company assets in the event of a
                    fire outbreak.
                    <br />
                    <br />
                    Chrisason Fire Protection offers a host of fire training
                    workshops to help organisations understand how to fight
                    small fires, know when to evacuate and safely protect
                    assets. It is also a legal requirement for certain members
                    of staff to be trained in fire safety procedures in the
                    workplace.
                    <br />
                    <br />
                    Our Training includes: safety measures to proactively
                    practice in the workplace to prevent fire, what action they
                    should take on the discovery of a fire, know the difference
                    between different fire classes, which extinguisher to use
                    for which fire and what the evacuation procedure is.
                </div>
            </div>
            <div className='safety-content-black lh-sm'>
                <div className='scb-left'>
                    <div className='scb-title mb-0'>Safety First</div>
                    <div className='scb-body'>
                        Our fire safety training courses offer comprehensive,
                        accredited training to individuals, managers, and
                        organisations. We offer fire safety courses in basic
                        fire safety training, fire risk assessment, the
                        principles of fire safety for the workplace, fire warden
                        (fire marshal) training, and fire risk assessment and
                        management training.
                        <br />
                        <br />
                        Today’s most exceptional organisations take the safety
                        of the people and assets very seriously. In this stead,
                        they invite experts to train, equip and inform their
                        team on how to stay safe and protect company assets in
                        the event of a fire outbreak.
                        <br />
                        <br />
                        Chrisason Fire Protection offers a host of fire training
                        workshops to help organisations understand how to fight
                        small fires, know when to evacuate and safely protect
                        assets. It is also a legal requirement for certain
                        members of staff to be trained in fire safety procedures
                        in the workplace.
                        <br />
                        <br />
                        Our Training includes: safety measures to proactively
                        practice in the workplace to prevent fire, what action
                        they should take on the discovery of a fire, know the
                        difference between different fire classes, which
                        extinguisher to use for which fire and what the
                        evacuation procedure is.
                    </div>
                </div>

                <div className='scb-right'>
                    <div className='scb-title mb-0'>Zero Fatalities</div>
                    <div className='scb-body'>
                        Zero Fatalities in over 30years.. is no coincidence. We
                        are devoted to high standards of health and safety,
                        recognising our duty and legal responsibilities for
                        securing the health, safety and welfare of all its
                        employees, sub-contractors working on our behalf and
                        others affected by our activities. We strive to achieve
                        continuous improvements in health and safety
                        performance.
                        <br />
                        <br />
                        In addition to Fire Safety Training, Chrisason Fire
                        Protection offers training workshops in
                        <ul>
                            <li>Active shooter/Hostile event response</li>
                            <li>Alternative Fuel Vehicles Safety Training</li>
                            <li>Building and life safety</li>
                            <li>Electrical</li>
                            <li>Emergency response</li>
                            <li>Fire protection systems</li>
                            <li>Health care</li>
                            <li>Wildfire hazards and mitigation</li>
                            <li>Hot work</li>
                            <li>Industrial hazards</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
