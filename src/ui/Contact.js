import React, { useRef, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './contact.css';
import ContactImg from '../images/contact-img.png';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [validated, setValidated] = useState(false);
    const formRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            emailjs
                .sendForm(
                    'service_ndabn9g',
                    'template_akjd8y5',
                    formRef.current,
                    'gFB4e8ztMi_R91bw4'
                )

                .then(
                    (result) => {
                        console.log(result.text);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }

        setValidated(true);
        formRef.current.reset();
    };
    return (
        // <main id='contact' className='"position-relative'>
        //     <section className='contact-map "position-relative'>
        //         <div class='mapouter'>
        //             <div class='gmap_canvas'>
        //                 <iframe
        //                     width='100%'
        //                     height='300'
        //                     id='gmap_canvas'
        //                     src='https://maps.google.com/maps?q=%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2012%20Omerelu%20Street.%20GRA%20Phase%20II.%20Port%20Harcourt.&t=&z=13&ie=UTF8&iwloc=&output=embed'
        //                     frameborder='0'
        //                     scrolling='no'
        //                     marginheight='0'
        //                     marginwidth='0'></iframe>
        //                 <a href='https://123movies-i.net'>123movies</a>
        //                 <br />
        //                 <a href='https://www.embedgooglemap.net'>
        //                     add google map to website
        //                 </a>
        //             </div>
        //         </div>
        //     </section>
        //     <section className='position-relative'>
        //         <Container className='d-flex flex-md-row flex-column justify-content-center align-items-md-start align-items-center'>
        //             <div className='banner d-flex flex-column justify-content-between'>
        //                 <p>Find Us</p>
        //                 <div className='bg-border'></div>
        //             </div>

        //             <div className='ms-3 pt-3'>
        //                 <div className='contact-details'>
        //                     <p className='touch'>Get in touch..</p>

        //                     <p className='mb-1'>
        //                         <strong>
        //                             HQ: Chrisason Fire Protection Limited.
        //                         </strong>
        //                     </p>
        //                     <p className='mb-1'>
        //                         12 Omerelu Street. GRA Phase II. Port Harcourt.
        //                     </p>
        //                     <p className='mb-1'>Rivers State. Nigeria.</p>
        //                     <p className='mb-1'>E: info@chrisasonfire.com</p>
        //                     <p className='mb-1'>​M: +234 (0) 803 335 6 183</p>
        //                     <p className='mb-1'>M: +234 (0) 806 578 4 615</p>
        //                 </div>

        //                 <div className='contact-form  py-3'>
        //                     <Form
        //                         noValidate
        //                         validated={validated}
        //                         onSubmit={handleSubmit}>
        //                         <Row className='flex-md-row flex-column'>
        //                             <Col>
        //                                 <Form.Group className='mb-2'>
        //                                     <Form.Label>Name</Form.Label>
        //                                     <Form.Control
        //                                         size='lg'
        //                                         type='text'
        //                                         required
        //                                     />
        //                                     <Form.Control.Feedback type='invalid'>
        //                                         Name is required!
        //                                     </Form.Control.Feedback>
        //                                 </Form.Group>
        //                                 <Form.Group className='mb-2'>
        //                                     <Form.Label>Email</Form.Label>
        //                                     <Form.Control
        //                                         size='lg'
        //                                         type='email'
        //                                         required
        //                                     />
        //                                     <Form.Control.Feedback type='invalid'>
        //                                         Email is required!
        //                                     </Form.Control.Feedback>
        //                                 </Form.Group>
        //                                 <Form.Group>
        //                                     <Form.Label>Phone</Form.Label>
        //                                     <Form.Control
        //                                         size='lg'
        //                                         type='tel'
        //                                         required
        //                                     />
        //                                     <Form.Control.Feedback type='invalid'>
        //                                         Phone is required!
        //                                     </Form.Control.Feedback>
        //                                 </Form.Group>
        //                             </Col>
        //                             <Col className='d-flex flex-column'>
        //                                 <Form.Group>
        //                                     <Form.Label>Message</Form.Label>
        //                                     <Form.Control
        //                                         as='textarea'
        //                                         required
        //                                     />
        //                                     <Form.Control.Feedback type='invalid'>
        //                                         Kindly input your message here
        //                                     </Form.Control.Feedback>
        //                                 </Form.Group>

        //                                 <div className='align-self-end'>
        //                                     <Button
        //                                         type='submit'
        //                                         className=' mt-3 '>
        //                                         <FaTelegramPlane className='button-icon' />{' '}
        //                                     </Button>
        //                                 </div>
        //                             </Col>
        //                         </Row>
        //                     </Form>
        //                 </div>
        //             </div>
        //         </Container>
        //     </section>
        // </main>

        <main>
            <section id='contact-map'>
                <div className='mapouter'>
                    <div className='gmap_canvas'>
                        <iframe
                            title='Chrisason Google Map'
                            width='100%'
                            height='408'
                            id='gmap_canvas'
                            src='https://maps.google.com/maps?q=12%20Omerelu%20Street.%20GRA%20Phase%20II.%20Port%20Harcourt.&t=&z=13&ie=UTF8&iwloc=&output=embed'
                            frameBorder='0'
                            scrolling='no'
                            marginHeight='0'
                            marginWidth='0'></iframe>
                    </div>
                </div>
            </section>

            <section id='contact-main' className='py-5'>
                <Container>
                    <h1>CONTACT US</h1>

                    <div className='contact-form pb-3 d-flex flex-lg-row flex-column justify-content-between mt-4'>
                        <div className='contact-info'>
                            <img
                                src={ContactImg}
                                className='contact-img'
                                alt=''
                            />

                            <div className='contact-details p-5'>
                                <div className='d-flex justify-content-start pb-1'>
                                    <FaMapMarkerAlt className='contact-icon me-3' />
                                    <p className='contact-text mb-4'>
                                        HQ: Chrisason Fire Protection Limited.
                                        <br />
                                        12 Omerelu Street. GRA Phase II.
                                        <br />
                                        Port Harcourt, Rivers State.
                                        <br />
                                        Nigeria.
                                        <br />
                                        <br />
                                        Lagos: 46 Raymond Njoku Street. Ikoyi.
                                        Lagos. Lagos State
                                        <br />
                                        <br />
                                        Abuja: 305B Hillside Building. Yakubu
                                        Gowon Way. Asokoro. Abuja FCT.
                                    </p>
                                </div>

                                <div className='d-flex justify-content-start pb-1'>
                                    <FaPhoneAlt className='contact-icon me-3' />
                                    <div>
                                        <p className='contact-text mb-1'>
                                            <a href='tel:+234 806 578 4615'>
                                                +234 806 578 4615
                                            </a>
                                        </p>

                                        <p className='contact-text'>
                                            <a href='tel:+234 803 335 6183'>
                                                +234 803 335 6183
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className='d-flex justify-content-start pb-1'>
                                    <FaEnvelope className='contact-icon me-3' />
                                    <p className='contact-text'>
                                        <a href='mailto:info@chrisasonfire.com'>
                                            info@chrisasonfire.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Form
                            ref={formRef}
                            noValidate
                            validated={validated}
                            onSubmit={handleSubmit}
                            className='px-5 py-5'>
                            <Form.Group className='mb-3'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type='text'
                                    className='py-2'
                                    required
                                    name='name'
                                />
                            </Form.Group>
                            <Form.Group className='mb-3'>
                                <Form.Label>Email</Form.Label>

                                <Form.Control
                                    type='email'
                                    className='py-2'
                                    required
                                    name='email'
                                />
                            </Form.Group>

                            <Form.Group className='mb-3'>
                                <Form.Label>Phone Number</Form.Label>

                                <Form.Control
                                    type='tel'
                                    className='py-2'
                                    required
                                    name='phone'
                                />
                            </Form.Group>

                            <Form.Group className='mb-3'>
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    as='textarea'
                                    rows={5}
                                    required
                                    name='message'
                                />
                            </Form.Group>

                            <Button
                                className='px-5 py-2 text-uppercase mt-2'
                                type='submit'>
                                SEND
                            </Button>
                        </Form>
                    </div>
                </Container>
            </section>
        </main>
    );
}
