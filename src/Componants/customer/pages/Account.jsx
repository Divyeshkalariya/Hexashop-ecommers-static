import React, { Fragment, useState } from 'react';
import Footre from '../Footre';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Account() {

    // SCROLL TOP ARROW JS
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    window.addEventListener('scroll', toggleVisible);


    const SandAccountData = () => {
        Swal.fire({
            icon: 'success',
            title: 'Account',
            text: 'Create Successfully',
        });
        setTimeout(() => {
            window.location = "/Account"
        }, 2000);
    }

    return (
        <Fragment>

            <Container id="account" >
                <h1 className='py-4 text-center'>Create Account</h1>

                <Row className='pb-5'>
                    <Col sm={12} md={12} lg={12} className='col-10 mx-auto'>
                        <Form className='w-75 mx-auto has-validation'
                        >
                            <Row>
                                <Col className='col-12 col-md-6 col-lg-6' >
                                    <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                                        <Form.Control
                                            type="text" placeholder="Username"
                                            name="username"
                                        />
                                    </FloatingLabel>
                                </Col>

                                <Col className='col-12 col-md-6 col-lg-6'>
                                    <FloatingLabel controlId="floatingDate" label="Date-Of-Birth" className="mb-3">
                                        <Form.Control type="date"
                                            name="dateofbirth"
                                        />
                                    </FloatingLabel>
                                </Col>

                                <Col className='col-12 col-md-6 col-lg-6'>
                                    <select
                                        type="text"
                                        className='form-control form-select mb-3'
                                    >
                                        <option>- Select State -</option>
                                        <option>Gujarat</option>
                                        <option>Rajesthan</option>
                                        <option>Delhi</option>
                                    </select>
                                </Col>

                                <Col className='col-12 col-md-6 col-lg-6'>
                                    <select
                                        type="text"
                                        className='form-control form-select mb-3'
                                    >
                                        <option>- Select City -</option>
                                        <option>Rajkot</option>
                                        <option>Junagadh</option>
                                        <option>Nathdwar</option>
                                        <option>Ahmedabad</option>
                                        <option>Delhi</option>
                                    </select>
                                </Col>

                                <Col className='col-12'>
                                    <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
                                        <Form.Control
                                            type="email" placeholder="Email"
                                            name='email'
                                        />
                                    </FloatingLabel>
                                </Col>

                                <Col className='col-12 col-md-6 col-lg-6'>
                                    <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                                        <Form.Control
                                            type="password" placeholder="Password"
                                            name='password'
                                        />
                                    </FloatingLabel>
                                </Col>

                                <Col className='col-12 col-md-6 col-lg-6'>
                                    <FloatingLabel controlId="floatingPassword" label="Confirm Password" className="mb-3">
                                        <Form.Control type="password" placeholder="Confirm Password"
                                            name="confirmpassword"
                                        />
                                    </FloatingLabel>
                                </Col>

                                <Col className='col-12 col-md-6 col-lg-6'>
                                    <FloatingLabel controlId="floatingGener" label="Gender" className="mb-3">
                                        <Form.Select type="text" placeholder="Confirm Password"
                                            name="gender"
                                        >
                                            <option value="select">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>

                                <Col className='col-12 col-md-6 col-lg-6'>
                                    <Button type='button' className='w-100 p-3' onClick={SandAccountData}>Create Account</Button>
                                </Col>
                            </Row>
                            <p className='text-center mt-3'>Already have account <Link to="/login" className='text-primary'>Login Here?</Link></p>
                        </Form>
                    </Col>
                </Row>
            </Container>

            {/* footer */}
            <Footre />

            {/* scroll top arrow */}
            <button href="#header" onClick={scrollToTop} className="scroll-top bg-dark" data-aos="zoom-in" data-aos-duration="1000"> <i className="fa fa-angle-up"></i></button>

        </Fragment>
    )
}

