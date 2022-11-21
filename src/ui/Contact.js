import React, { useState } from 'react';
import {
    Container,
    Col,
    FloatingLabel,
    Form,
    Row,
    Button,
} from 'react-bootstrap';
import './contact.css';
import ContactImg from '../images/contact-img.png';
import { FaCaretRight, FaTelegram, FaTelegramPlane } from 'react-icons/fa';
export default function Contact() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <main id='contact' className='"position-relative'>
            <section className='contact-map "position-relative'>
                <div class='mapouter'>
                    <div class='gmap_canvas'>
                        <iframe
                            width='100%'
                            height='300'
                            id='gmap_canvas'
                            src='https://maps.google.com/maps?q=12%20Omerelu%20Street.%20GRA%20Phase%20II.%20Port%20Harcourt.%20Rivers%20State.%20Nigeria.&t=&z=13&ie=UTF8&iwloc=&output=embed'
                            frameborder='0'
                            scrolling='no'
                            marginheight='0'
                            marginwidth='0'></iframe>
                    </div>
                </div>
            </section>
            <section className='position-relative'>
                <Container className='d-flex flex-md-row flex-column justify-content-center align-items-md-start align-items-center'>
                    <div className='banner d-flex flex-column justify-content-between'>
                        <p>Find Us</p>
                        <div className='bg-border'></div>
                    </div>

                    <div className='ms-3 pt-3'>
                        <div className='contact-details'>
                            <p className='touch'>Get in touch..</p>

                            <p className='mb-1'>
                                <strong>
                                    HQ: Chrisason Fire Protection Limited.
                                </strong>
                            </p>
                            <p className='mb-1'>
                                12 Omerelu Street. GRA Phase II. Port Harcourt.
                            </p>
                            <p className='mb-1'>Rivers State. Nigeria.</p>
                            <p className='mb-1'>E: info@chrisasonfire.com</p>
                            <p className='mb-1'>​M: +234 (0) 803 335 6 183</p>
                            <p className='mb-1'>M: +234 (0) 806 578 4 615</p>
                        </div>

                        <div className='contact-form  py-3'>
                            <Form
                                noValidate
                                validated={validated}
                                onSubmit={handleSubmit}>
                                <Row className='flex-md-row flex-column'>
                                    <Col>
                                        <Form.Group className='mb-2'>
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                size='lg'
                                                type='text'
                                                required
                                            />
                                            <Form.Control.Feedback type='invalid'>
                                                Name is required!
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className='mb-2'>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                size='lg'
                                                type='email'
                                                required
                                            />
                                            <Form.Control.Feedback type='invalid'>
                                                Email is required!
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Phone</Form.Label>
                                            <Form.Control
                                                size='lg'
                                                type='tel'
                                                required
                                            />
                                            <Form.Control.Feedback type='invalid'>
                                                Phone is required!
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col className='d-flex flex-column'>
                                        <Form.Group>
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control
                                                as='textarea'
                                                required
                                            />
                                            <Form.Control.Feedback type='invalid'>
                                                Kindly input your message here
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <div className='align-self-end'>
                                            <Button
                                                type='submit'
                                                className=' mt-3 '>
                                                <FaTelegramPlane className='button-icon' />{' '}
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
