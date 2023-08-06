import React, { Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import logo from "../../assets/images/homepage/footer/white-logo.png";
import { Link, Outlet } from 'react-router-dom';



export default function Footre() {

  const scrolltop = () => {
    window.screenTop(0, 0)
  }

  return (
    <Fragment>
      <Container fluid={true} id='footer' className='pt-sm-5 pb-sm-2 pt-md-5 pt-md-2 pt-lg-5 pt-lg-2'>
        <Container className='mx-auto'>
          <Row>
            <Col size={12} md={6} lg={3}>
              <Link to="/Home">
                <img src={logo} alt='footer-logo' className='img-fluid' />
              </Link>
              <p className='mt-3 fw-lighter'>
                <Link to="/" className='text-white text-decoration-none'>16501 Collins Ave, Sunny Isles Becho, FL 33160, United State</Link>
              </p>
              <p className='mt-3'>
                <Link to="/" className='text-white text-decoration-none'>hexashop26@gmail.com</Link>
              </p>
              <p className='mt-3'>
                <Link to="/" className='text-white text-decoration-none'>010-020-0340</Link>
              </p>
            </Col>

            <Col size={12} md={6} lg={3}>
              <h4 className='text-white'>Help & Information</h4>
              <p className='mt-3'>
                <Link to="/help" className='text-white text-decoration-none' onClick={() => {
                  // window.location = "/Help"
                  window.screenTop(0, 0)
                }}>Help</Link>
              </p>
              <p className='mt-3'>
                <Link to="/faqs" className='text-white text-decoration-none' onClick={() => {
                  // window.location = "/Faqs"
                  window.screenTop(0, 0)
                }}>FAQ's</Link>
              </p>
              <p className='mt-3'>
                <Link to="/tracking" className='text-white text-decoration-none' onClick={() => {
                  // window.location = "/Tracking"
                  window.screenTop(0, 0)
                }}>Tracking ID</Link>
              </p>
              <p className='mt-3'>
                <Button variant='outline-warning' className='rounded-0 px-4' onClick={() => {
                  window.location = "/login"
                  window.screenTop(0, 0)
                }}>Login</Button>
              </p>
            </Col>

            <Col size={12} md={6} lg={3}>
              <h4 className='text-white'>Useful Links</h4>
              <p className='mt-3'>
                <Link to="/home" className='text-white text-decoration-none' onClick={() => {
                  // window.location = "/Home"
                  window.screenTop(0, 0)
                }}>Home</Link>
              </p>
              <p className='mt-3'>
                <Link to="/aboutus" className='text-white text-decoration-none' onClick={() => {
                  // window.location = "/Aboutus"
                  window.screenTop(0, 0)
                }}>About</Link>
              </p>
              <p className='mt-3'>
                <Link to="/contactus" className='text-white text-decoration-none' onClick={() => {
                  // window.location = "/Contactus"
                  window.screenTop(0, 0)
                }}>Contact us</Link>
              </p>
              <p className='mt-3'>
                <Button variant='outline-warning' className='rounded-0 px-4' onClick={() => {
                  window.location = "/account"
                  window.screenTop(0, 0)
                }}>Register</Button>
              </p>
            </Col>

            <Col size={12} md={6} lg={3}>
              <h4 className='text-white'>Shopping & Categories</h4>
              <p className='mt-3'>
                <Link to="/products" className='text-white text-decoration-none' onClick={() => {
                  // window.location = "/Products"
                  window.screenTop(0, 0)
                }}>Men's Shopping</Link>
              </p>
              <p className='mt-3'>
                <Link to="/products" className='text-white text-decoration-none' onClick={() => {
                  // window.location = "/Products"
                  window.screenTop(0, 0)
                }}>Women's Shopping</Link>
              </p>
              <p className='mt-3'>
                <Link to="/products" className='text-white text-decoration-none' onClick={() => {
                  // window.location = "/Products"
                  window.screenTop(0, 0)
                }}>Kid's Shopping</Link>
              </p>
            </Col>
            <Outlet />
          </Row>

          <Col size={12}>
            <hr className='hrline bg-white rounded-5' />
          </Col>

          <Col size={12} className='text-center'>
            <p className='text-white mb-1' >Copyright &#169; 2022 - 2023 Hexashop Co. Ltd. All Rights Reserved. </p>
            <div className='icons'>
              <span><Link to="/" className='fa fa-facebook-f text-decoration-none p-2 fs-4'></Link></span>
              <span><Link to="/" className='fa fa-twitter text-decoration-none p-2 fs-4'></Link></span>
              <span><Link to="/" className='fa fa-linkedin text-decoration-none p-2 fs-4'></Link></span>
              <span><Link to="/" className='fa fa-behance text-decoration-none p-2 fs-4'></Link></span>
            </div>
            <p className='text-white mt-1'>Design By : <b className='text-warning'>Divyesh Kalariya</b></p>
          </Col>
        </Container>
      </Container>
    </Fragment>
  )
}
