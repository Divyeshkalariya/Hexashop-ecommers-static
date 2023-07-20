import React, { Fragment, useState } from 'react';
import { Badge, Button, Col, Container, Modal, Nav, Navbar, NavDropdown, Row, } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import brandlogo from './assets/images/navbar/brand-logo.png';
import Topbar from './Componants/customer/pages/Topbar';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
// import image from "../../../assets/images/homepage/home-section/baner-right-image-men.jpg";


export default function Layout() {

    // colorchange navbar on scroll
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    // SCROLLTOP ARROW
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


    //HEMBURGER MENU 
    const togglemenu = () => {
        const menutoggle = document.querySelector('.menutoggle');
        menutoggle.classList.toggle('active');
    }


    // CART MODAL
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <Fragment>
            <Topbar />
            <Navbar expand="lg" className={colorChange ? 'navbar colorChange' : 'navbar'} id='navigation'>
                <Container>
                    <Navbar.Brand>
                        <Link to="/home" onClick={scrollToTop}>
                            <img src={brandlogo} alt='Brand-logo' className='img-fluid' />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle className='p-0 border border-0'>
                        <div className="menutoggle" onClick={togglemenu}></div>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
                            <Link to="/home#home">Home</Link>
                            <Link to="/home#mens">Men's</Link>
                            <Link to="home#womens">Women's</Link>
                            <Link to="home#kids">kid's</Link>
                            <NavDropdown title="Pages" id="navbarScrollingDropdown">
                                <NavDropdown.Item>
                                    <Link to="/aboutus">About us</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/products">Products</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="home#export">Explore</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/Contactus">Contact us</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Link to="/Account">Account</Link>
                        </Nav>
                    <Button className='rounded-0 bg-transparent border-0' onClick={handleShow}>
                        <i className="fa fa-shopping-cart fs-3 text-danger"></i>
                            <Badge className='translate-middle bg-success rounded-circle'>0</Badge>
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />




              {/* CART MODAL START */}
              <Container id='cartmodal'>
                <Modal size="lg" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>MY CART</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container fluid="true">
                            <Row>
                                <Col size={6}>
                                    {/* <img src={image} alt="product-name" className='img-fluid' /> */}
                                </Col>
                                <Col size={6}>
                                    <h4>Mens Cloths</h4>
                                    <p>Best Mens cloths ever we have best collection for men </p>
                                    <h5>Price : $ 140</h5>
                                </Col>
                            </Row>
                        </Container>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-warning" className='rounded-0'>
                            Check Out
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </Fragment>
    );
}
