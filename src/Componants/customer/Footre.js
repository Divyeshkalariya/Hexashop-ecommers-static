import React, { Fragment, useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from "../../assets/images/homepage/footer/white-logo.png";
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Footre() {

  const [footer, setFooter] = useState([])

  useEffect(() => {
    axios.get(' http://localhost:2602/Footer')
      .then(res => setFooter(res.data))
  }, [])

  return (
    <Fragment>
      {footer && footer.map((item) => {
        return (

          <Container fluid={true} id='footer' className='py-sm-5 py-md-5 py-lg-5' key={item.id}>
            <Container className='mx-auto'>
              <Row>
                <Col size={12} md={6} lg={3}>
                  <Link to="/home">
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
                    <Link to="/help" className='text-white text-decoration-none'>Help</Link>
                  </p>
                  <p className='mt-3'>
                    <Link to="/Faqs" className='text-white text-decoration-none'>FAQ's</Link>
                  </p>
                  <p className='mt-3'>
                    <Link to="/Tracking" className='text-white text-decoration-none'>Tracking ID</Link>
                  </p>
                </Col>
                <Col size={12} md={6} lg={3}>
                  <h4 className='text-white'>Useful Links</h4>
                  <p className='mt-3'>
                    <Link to="/home#home" className='text-white text-decoration-none'>Home</Link>
                  </p>
                  <p className='mt-3'>
                    <Link to="/Aboutus" className='text-white text-decoration-none'>About</Link>
                  </p>
                  <p className='mt-3'>
                    <Link to="/contactus" className='text-white text-decoration-none'>Contact us</Link>
                  </p>
                </Col>
                <Col size={12} md={6} lg={3}>
                  <h4 className='text-white'>Shopping & Categories</h4>
                  <p className='mt-3'>
                    <Link to="/products#men" className='text-white text-decoration-none'>Men's Shopping</Link>
                  </p>
                  <p className='mt-3'>
                    <Link to="/Products#women" className='text-white text-decoration-none'>Women's Shopping</Link>
                  </p>
                  <p className='mt-3'>
                    <Link to="/Products#kid" className='text-white text-decoration-none'>Kid's Shopping</Link>
                  </p>
                </Col>
              </Row>
              <Col size={12}>
                <hr className='hrline bg-white rounded-5' />
              </Col>


              <Col size={12} className='text-center'>
                <p className='text-white' >Copyright &#169; 2021 - {item.year} Hexashop Co., Ltd. All Rights Reserved. </p>
                <div className='icons'>
                  <span><Link to="/" className='fa fa-facebook-f text-decoration-none p-2 fs-4'></Link></span>
                  <span><Link to="/" className='fa fa-twitter text-decoration-none p-2 fs-4'></Link></span>
                  <span><Link to="/" className='fa fa-linkedin text-decoration-none p-2 fs-4'></Link></span>
                  <span><Link to="/" className='fa fa-behance text-decoration-none p-2 fs-4'></Link></span>
                </div>
              </Col>
            </Container>
          </Container>
        )
      })}

    </Fragment>
  )
}
