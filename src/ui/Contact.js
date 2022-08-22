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
import { FaCaretRight } from 'react-icons/fa';
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
        <main id='contact'>
            <section className='contact-map'>
                <div className='mapouter'>
                    <div className='gmap_canvas'>
                        <iframe
                            width='100%'
                            height='400'
                            id='gmap_canvas'
                            src='https://maps.google.com/maps?q=98%20Ikwerre%20Road.%20Port%20Harcourt.%20Rivers%20State.%20Nigeria.&t=&z=13&ie=UTF8&iwloc=&output=embed'
                            frameborder='0'
                            scrolling='no'
                            marginheight='0'
                            marginwidth='0'></iframe>
                    </div>
                </div>
            </section>

            <section className='contact-form pb-5'>
                <Container className='px-5'>
                    <h2>Connect with us</h2>
                    <Form
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}>
                        <Row className='flex-md-row flex-column'>
                            <Col>
                                <FloatingLabel label='Name' className='mb-3'>
                                    <Form.Control
                                        type='text'
                                        placeholder='Name'
                                        required
                                    />
                                    <Form.Control.Feedback type='invalid'>
                                        Name is required!
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                                <FloatingLabel label='Email' className='mb-3'>
                                    <Form.Control
                                        type='email'
                                        placeholder='Email'
                                        required
                                    />
                                    <Form.Control.Feedback type='invalid'>
                                        Email is required!
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                                <FloatingLabel label='Phone' className='mb-3'>
                                    <Form.Control
                                        type='tel'
                                        placeholder='Phone'
                                        required
                                    />
                                    <Form.Control.Feedback type='invalid'>
                                        Phone is required!
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Col>
                            <Col className='d-flex flex-column'>
                                <FloatingLabel
                                    controlId='floatingTextarea'
                                    label='Message'
                                    className='mb-3'>
                                    <Form.Control
                                        as='textarea'
                                        placeholder='Message'
                                        required
                                    />
                                    <Form.Control.Feedback type='invalid'>
                                        Kindly input your message here
                                    </Form.Control.Feedback>
                                </FloatingLabel>

                                <div className='align-self-end'>
                                    <Button
                                        type='submit'
                                        className=' mt-3 py-2 px-4'>
                                        Submit{' '}
                                        <FaCaretRight className='button-icon' />{' '}
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </section>

            <section className='contact-details pb-5'>
                <Container className='px-5'>
                    <h2>Find us</h2>
                    <p>
                        HQ: Chrisason Fire Protection Limited. <br /> 98 Ikwerre
                        Road. Port Harcourt. <br /> Rivers State. Nigeria.{' '}
                        <br /> E: info@chrisasonfire.com <br />
                        M: +234 (0) 806 578 4 615 <br /> ​M: +234 (0) 803 335 6
                        183
                    </p>
                </Container>
            </section>
        </main>
    );
}
