import React, { Fragment, useEffect, useState } from 'react'
import Pagebanner from '../Pagebanner'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

// aboutus section
import aboutus from "../../../assets/images/aboutuspage/aboutus-section/about-left-image.jpg";

// our brands section
import Slider from "react-slick";

// contact section
import Aboutcontact from '../Aboutcontact';

// footer section
import Footre from '../Footre';


export default function Aboutus() {

  // SCROLL TOP ARROW
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
    window.scrollTo(0, 0);
  };
  window.addEventListener('scroll', toggleVisible);


  // OUR BRAND SLIDER 
  var settings = {

    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    pauseOnHover: false,
    slidesToShow: 3,
    autoplay: true,
    lazyLoad: true,
    autoplaySpeed: 3000,
    speed: 1000,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }


  return (
    <Fragment>

      {/* pagebanner section*/}
      <Pagebanner headline="About Our Company" />

      {/* aboutus section */}
      <Container fluid="true" id='aboutus' className='pt-5 pb-lg-5'>
        <Container>
          <Row>
            <Col size={12} md={6} lg={6} className='px-4 px-md-0 px-lg-0' data-aos="fade-right" data-aos-duration="1000">
              <img src={aboutus} alt="about us" className='img-fluid' />
            </Col>
            <Col sm={12} md={6} lg={6} className='aboutus-right p-4  pt-md-0 pe-md-4 pe-lg-5 p-sm-4 ps-lg-5'>
              <h1 data-aos="fade-up" data-aos-duration="1000">About Us & Our Skills</h1>
              <p className='mt-3 mt-lg-3 mt-sm-1 text-justify' data-aos="fade-up" data-aos-duration="1000">A product is something made in a factory; a brand is something that is bought by the customer. </p>
              <Row className='mt-3 mt-sm-1' data-aos="fade-up" data-aos-duration="1000">
                <Col className='col-1 mt-2 mt-lg-2 mt-sm-1 '>
                  <i className="fa fa-quote-left fs-1"></i>
                </Col>
                <Col className='col-11'>
                  <p className='ps-3'>If you believe your product or service can fulfill a true need, it’s your moral obligation to sell it.</p>
                </Col>
              </Row>
              <p className='mt-3 mt-lg-2 mt-sm-1' data-aos="fade-up" data-aos-duration="1000">My feeling about work is it’s much more about the experience of doing is than the end product. Sometimes things t0hat are really great and make lots of money are miserable to make, and vice versa.</p>
              <Col className='dots'></Col>
              <ul className='social-icons mt-3 mt-md-2' >
                <li className='rounded-circle' data-aos="zoom-in" data-aos-duration="1000"><Link to="/" className='fa fa-facebook-f text-decoration-none fs-4 text-white m-0 p-0'></Link></li>
                <li className='rounded-circle' data-aos="zoom-in" data-aos-duration="1000"><Link to="/" className='fa fa-twitter text-decoration-none fs-4 text-white'></Link></li>
                <li className='rounded-circle' data-aos="zoom-in" data-aos-duration="1000"><Link to="/" className='fa fa-linkedin text-decoration-none fs-4 text-white'></Link></li>
                <li className='rounded-circle' data-aos="zoom-in" data-aos-duration="1000"><Link to="/" className='fa fa-behance text-decoration-none fs-4 text-white'></Link></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* ourteam section */}
      <Container id='ourteam' fluid="true" className='py-5'>
        <Container>
          <Col size={12} className='ourteam-head text-center'>
            <h1>Our Amazing Team</h1>
            <p>"Talent wins games, but teamwork and intelligence win championships"</p>
          </Col>
        </Container>
        <Row className='container mx-auto mt-5 mt-md-5 mt-lg-5'>


          <Col size={12} md={4} lg={4} data-aos="fade-up" data-aos-duration="1000">
            <Col className='ourteam-card position-relative'>
              <Col className='ourteam-front position-absolute' >
                <img src="https://images.unsplash.com/photo-1659333092645-0da4df62daa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&w=1000&q=80" alt="team member-1" className='img-fluid' />
              </Col>
              <Col className='ourteam-back position-absolute d-flex justify-content-center align-items-center'>
                <ul className='ourteam-social w-100 d-flex justify-content-evenly'>
                  <li className='rounded-circle'><Link to="/" className='fa fa-facebook-f text-decoration-none text-white m-0 p-0'></Link></li>
                  <li className='rounded-circle'><Link to="/" className='fa fa-twitter text-decoration-none  text-white'></Link></li>
                  <li className='rounded-circle'><Link to="/" className='fa fa-linkedin text-decoration-none text-white'></Link></li>
                  <li className='rounded-circle'><Link to="/" className='fa fa-behance text-decoration-none  text-white'></Link></li>
                </ul>
              </Col>
            </Col>
            <Col className='ourteam-info text-center mt-3'>
              <h3>Jiya Sinoya</h3>
              <p>Marketing Head</p>
            </Col>
          </Col>
          <Col size={12} md={4} lg={4} data-aos="fade-up" data-aos-duration="1000">
            <Col className='ourteam-card position-relative'>
              <Col className='ourteam-front position-absolute' >
                <img src="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-842811.jpg&fm=jpg" alt="team member-1" className='img-fluid' />
              </Col>
              <Col className='ourteam-back position-absolute d-flex justify-content-center align-items-center'>
                <ul className='ourteam-social w-100 d-flex justify-content-evenly'>
                  <li className='rounded-circle'><Link to="/" className='fa fa-facebook-f text-decoration-none text-white m-0 p-0'></Link></li>
                  <li className='rounded-circle'><Link to="/" className='fa fa-twitter text-decoration-none  text-white'></Link></li>
                  <li className='rounded-circle'><Link to="/" className='fa fa-linkedin text-decoration-none text-white'></Link></li>
                  <li className='rounded-circle'><Link to="/" className='fa fa-behance text-decoration-none  text-white'></Link></li>
                </ul>
              </Col>
            </Col>
            <Col className='ourteam-info text-center mt-3'>
              <h3>Rembo Diza</h3>
              <p>Creatore</p>
            </Col>
          </Col>
          <Col size={12} md={4} lg={4} data-aos="fade-up" data-aos-duration="1000">
            <Col className='ourteam-card position-relative'>
              <Col className='ourteam-front position-absolute' >
                <img src="https://burst.shopifycdn.com/photos/bearded-young-man.jpg?width=1200&format=pjpg&exif=1&iptc=1" alt="team member-1" className='img-fluid' />
              </Col>
              <Col className='ourteam-back position-absolute d-flex justify-content-center align-items-center'>
                <ul className='ourteam-social w-100 d-flex justify-content-evenly'>
                  <li className='rounded-circle'><Link to="/" className='fa fa-facebook-f text-decoration-none text-white m-0 p-0'></Link></li>
                  <li className='rounded-circle'><Link to="/" className='fa fa-twitter text-decoration-none  text-white'></Link></li>
                  <li className='rounded-circle'><Link to="/" className='fa fa-linkedin text-decoration-none text-white'></Link></li>
                  <li className='rounded-circle'><Link to="/" className='fa fa-behance text-decoration-none  text-white'></Link></li>
                </ul>
              </Col>
            </Col>
            <Col className='ourteam-info text-center mt-3'>
              <h3>Jemmy Roy</h3>
              <p>Producion Head</p>
            </Col>
          </Col>

        </Row>
      </Container>


      {/* ourservice */}
      <Container fluid="true" id='ourservice' className='py-lg-5'>
        <Container>
          <Col className='ourservice text-center mt-4'>
            <h1>Our Services</h1>
            <p> "Great acts are made up of small deeds."</p>
          </Col>
          <Row className='mt-lg-5 servicecard-row pb-4'>
            <Col md={5} lg={5} className='col-7 mt-4 mt-lg-0 mx-auto text-center servicecard-head shadow  p-4' data-aos="fade-up" data-aos-duration="1000">
              <i className='fa fa-shopping-basket fs-1'></i>
              <h2 className='mt-lg-3'>Free Shipping</h2>
              <p className='px-lg-3' >Save money online with free shipping - Browse through our free coupons, coupen codes, and cashback offers from popular brands and leading stores in India.</p>
            </Col>
            <Col md={5} lg={5} className='col-7 mt-4 mt-lg-0 mx-auto text-center servicecard-head shadow  p-4' data-aos="fade-up" data-aos-duration="1000">
              <i className='fa fa-credit-card fs-1'></i>
              <h2 className='mt-lg-3'>Secure Payments</h2>
              <p className='px-lg-3' >try to pay by Credit-card or Debit-card via a secure payment method, and talk to the owner over the phone.</p>
            </Col>
            <Col md={5} lg={5} className='col-7 mt-4 mt-lg-5 mx-auto text-center servicecard-head shadow  p-4' data-aos="fade-up" data-aos-duration="1000">
              <sub><i className='fa fa-truck fs-3'></i></sub><i className='fa fa-map-pin fs-1'></i>
              <h2 className='mt-lg-3'>Tracking</h2>
              <p className='px-lg-3' >We allow the customer to know; whether the item has left the warehouse, where it is within the delivery process, and the estimated delivery date and time.</p>
            </Col>
            <Col md={5} lg={5} className='col-7 mt-4 mt-lg-5 mx-auto text-center servicecard-head shadow  p-4' data-aos="fade-up" data-aos-duration="1000">
              <i className='fa fa-cogs fs-1'></i>
              <h2 className='mt-lg-3'>24 x 7 Support</h2>
              <p className='px-lg-3' >These system enable customer service ans support terms to contact technicians and send them to service a product a when needed.</p>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* our brands */}
      <Container fluid="true" id='ourbrands' className=''>
        <Container>
          <Col className='ourservice text-center mt-4'>
            <h1>Our Brands</h1>
            <p>"Look the best version of yourself"</p>
          </Col>
          <Row className='mt-lg-5 servicecard-row pb-5'>

            <Col>
              <Slider {...settings}>

                <Col className='slidebox' data-aos="zoom-in-down" data-aos-duration="1000">
                  <img src="https://assets.turbologo.com/blog/en/2019/10/19084949/chanel-logo-illustration-958x575.jpg" alt="chanel" className='img-fluid h-100 mx-auto' />
                </Col>
                <Col className='slidebox' data-aos="zoom-in-down" data-aos-duration="1000">
                  <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30143359/2_big1.png" alt="adidas" className='img-fluid h-100 mx-auto' />
                </Col>
                <Col className='slidebox' data-aos="zoom-in-down" data-aos-duration="1000">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKsfNjArDCu_twsJ4Uy_53s2Ex4C_Bc1R01w&usqp=CAU" alt="tommy hilfiger" className='img-fluid h-100 mx-auto' />
                </Col>
                <Col className='slidebox' data-aos="zoom-in-down" data-aos-duration="1000">
                  <img src="https://assets.turbologo.com/blog/en/2020/01/19084715/georgio-armani-logo.png" alt="giorgio armani" className='img-fluid h-100 mx-auto' />
                </Col>
                <Col className='slidebox' data-aos="zoom-in-down" data-aos-duration="1000">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmAZ3ibGPIIefPGBsIWPnnQV_BxhNT4mWRsEaKlrjblfG4e_zL0oCgeQHzewz8tFInu2U&usqp=CAU" alt="boos" className='img-fluid h-100 mx-auto' />
                </Col>
                <Col className='slidebox' data-aos="zoom-in-down" data-aos-duration="1000">
                  <img src="https://2.bp.blogspot.com/-NxanX5aQYl4/ULcnuIOQ9JI/AAAAAAAABCc/d3h_JbhSSzA/s1600/d_g_logo.jpg" alt="dolce & gabbana" className='img-fluid h-100 mx-auto' />
                </Col>
                <Col className='slidebox' data-aos="zoom-in-down" data-aos-duration="1000">
                  <img src="https://assets.turbologo.ru/blog/ru/2021/11/12082225/Levis_logo.png" alt="Lavi's" className='img-fluid h-100 mx-auto' />
                </Col>
                <Col className='slidebox' data-aos="zoom-in-down" data-aos-duration="1000">
                  <img src="https://images-cdn.ubuy.co.in/6351dcb31b0725417f0531d8-u-s-polo-assn-girls-39-school.jpg" alt="us polo" className='img-fluid h-100 mx-auto' />
                </Col>
                <Col className='slidebox' data-aos="zoom-in-down" data-aos-duration="1000">
                  <img src="https://businesstalkmagazine.com/wp-content/uploads/2022/05/Allen-Solly.jpg" alt="allen solly" className='img-fluid h-100 mx-auto' />
                </Col>
                <Col className='slidebox' data-aos="zoom-in-down" data-aos-duration="1000">
                  <img src="https://images-platform.99static.com/PEg4SNAR9Tf5hkfr62D4RVw2a-Q=/500x500/top/smart/99designs-contests-attachments/45/45279/attachment_45279240" alt="louis philippe" className='img-fluid h-100 mx-auto' />
                </Col>
                <Col className='slidebox' data-aos="zoom-in-down" data-aos-duration="1000">
                  <img src="https://www.logolynx.com/images/logolynx/74/7476d45ced6a8a7cb5b4ae7f61cf8016.jpeg" alt="H & M" className='img-fluid h-100 mx-auto' />
                </Col>
                <Col className='slidebox' data-aos="zoom-in-down" data-aos-duration="1000">
                  <img src="https://wallpapercave.com/wp/wp2013016.png" alt="calvin klein" className='img-fluid h-100 mx-auto' />
                </Col>

              </Slider>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Contact section */}
      <Aboutcontact />

      {/* footer */}
      <Footre />


      {/* scroll top arrow */}
      <button href="#header" onClick={scrollToTop} className="scroll-top bg-dark" data-aos="zoom-in" data-aos-duration="1000"> <i className="fa fa-angle-up"></i></button>


    </Fragment>
  )
}
