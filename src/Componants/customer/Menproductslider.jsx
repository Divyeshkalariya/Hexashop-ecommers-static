import React, { Fragment} from 'react'
import { Col, Container } from 'react-bootstrap';
import Slider from "react-slick";


export default function Menproductslider() {

    // SLICK SLIDER 
    const settings = {
        // dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <Fragment>
            <Container data-aos="fade-up" data-aos-duration="1000">
                <Container>
                    <Col className='mx-auto'>
                        <Slider {...settings} className='slider-main'>
                            <Col className='p-2 product-outer'>
                                <Col className='product-card '>
                                    <img src="https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D&w=1000&q=80" className='img-fluid' />
                                </Col>
                                <Col className='product-icons'>
                                    <ul className='d-flex justify-content-center w-75 mx-auto'>
                                        <li className='iconbox'>
                                            <i className="fa fa-eye" aria-hidden="true"></i>
                                        </li>
                                        <li className='iconbox' >
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li className='iconbox' >
                                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                        </li>
                                    </ul>
                                    <Col className=''>
                                        <Col className='d-flex justify-content-between mt-4'>
                                            <h4 className='product-subheading'>Classic Spring</h4>
                                            <span className='mt-1 product-starts'>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star '></i>
                                            </span>
                                        </Col>
                                        <Col>
                                            <h3 className='product-price'> &#8377; 3499</h3>
                                        </Col>
                                    </Col>
                                </Col>
                            </Col>
                            <Col className='p-2 product-outer'>
                                <Col className='product-card '>
                                    <img src='https://www.universityoffashion.com/blog/wp-content/uploads/2021/07/A-look-from-Brionis-Spring-2022-Collection.-Photo-Credit-Brioni.-scaled.jpg' className='img-fluid' />
                                </Col>
                                <Col className='product-icons'>
                                    <ul className='d-flex justify-content-center w-75 mx-auto'>
                                        <li className='iconbox'>
                                            <i className="fa fa-eye" aria-hidden="true"></i>
                                        </li>
                                        <li className='iconbox' >
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li className='iconbox' >
                                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                        </li>
                                    </ul>
                                    <Col className=''>
                                        <Col className='d-flex justify-content-between mt-4'>
                                            <h4 className='product-subheading'>Classic Stome</h4>
                                            <span className='mt-1 product-starts'>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star '></i>
                                            </span>
                                        </Col>
                                        <Col>
                                            <h3 className='product-price'> &#8377; 1900</h3>
                                        </Col>
                                    </Col>
                                </Col>
                            </Col>
                            <Col className='p-2 product-outer'>
                                <Col className='product-card '>
                                    <img src="https://img.freepik.com/free-photo/man-portrait_1296-626.jpg?w=2000" className='img-fluid' />
                                </Col>
                                <Col className='product-icons'>
                                    <ul className='d-flex justify-content-center w-75 mx-auto'>
                                        <li className='iconbox'>
                                            <i className="fa fa-eye" aria-hidden="true"></i>
                                        </li>
                                        <li className='iconbox' >
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li className='iconbox' >
                                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                        </li>
                                    </ul>
                                    <Col className=''>
                                        <Col className='d-flex justify-content-between mt-4'>
                                            <h4 className='product-subheading'>Air Force 1 X</h4>
                                            <span className='mt-1 product-starts'>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star '></i>
                                            </span>
                                        </Col>
                                        <Col>
                                            <h3 className='product-price'> &#8377; 2499</h3>
                                        </Col>
                                    </Col>
                                </Col>
                            </Col>
                            <Col className='p-2 product-outer'>
                                <Col className='product-card '>
                                    <img src="https://i.pinimg.com/736x/66/1e/39/661e39d2aac31147c75efe1515fe8d61.jpg" className='img-fluid' />
                                </Col>
                                <Col className='product-icons'>
                                    <ul className='d-flex justify-content-center w-75 mx-auto'>
                                        <li className='iconbox'>
                                            <i className="fa fa-eye" aria-hidden="true"></i>
                                        </li>
                                        <li className='iconbox' >
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li className='iconbox' >
                                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                        </li>
                                    </ul>
                                    <Col className=''>
                                        <Col className='d-flex justify-content-between mt-4'>
                                            <h4 className='product-subheading'>Love Nani ' 20"</h4>
                                            <span className='mt-1 product-starts'>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star '></i>
                                            </span>
                                        </Col>
                                        <Col>
                                            <h3 className='product-price'> &#8377; 999</h3>
                                        </Col>
                                    </Col>
                                </Col>
                            </Col>
                            <Col className='p-2 product-outer'>
                                <Col className='product-card '>
                                    <img src="https://i.pinimg.com/736x/63/bc/04/63bc04d4c8bbc36c9fa60fca15001b36.jpg" className='img-fluid' />
                                </Col>
                                <Col className='product-icons'>
                                    <ul className='d-flex justify-content-center w-75 mx-auto'>
                                        <li className='iconbox'>
                                            <i className="fa fa-eye" aria-hidden="true"></i>
                                        </li>
                                        <li className='iconbox' >
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li className='iconbox' >
                                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                        </li>
                                    </ul>
                                    <Col className=''>
                                        <Col className='d-flex justify-content-between mt-4'>
                                            <h4 className='product-subheading'>Lost Stack</h4>
                                            <span className='mt-1 product-starts'>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star '></i>
                                            </span>
                                        </Col>
                                        <Col>
                                            <h3 className='product-price'> &#8377; 1299</h3>
                                        </Col>
                                    </Col>
                                </Col>
                            </Col>
                            <Col className='p-2 product-outer'>
                                <Col className='product-card '>
                                    <img src="https://www.tiptopgents.com/wp-content/uploads/2022/06/picsart_22-06-23_13-17-03-2948685519744956187826.webp" className='img-fluid' />
                                </Col>
                                <Col className='product-icons'>
                                    <ul className='d-flex justify-content-center w-75 mx-auto'>
                                        <li className='iconbox'>
                                            <i className="fa fa-eye" aria-hidden="true"></i>
                                        </li>
                                        <li className='iconbox' >
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li className='iconbox' >
                                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                        </li>
                                    </ul>
                                    <Col className=''>
                                        <Col className='d-flex justify-content-between mt-4'>
                                            <h4 className='product-subheading'>Classy Style</h4>
                                            <span className='mt-1 product-starts'>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star '></i>
                                            </span>
                                        </Col>
                                        <Col>
                                            <h3 className='product-price'> &#8377; 1799</h3>
                                        </Col>
                                    </Col>
                                </Col>
                            </Col>
                        </Slider>
                    </Col>
                </Container>
            </Container>
        </Fragment>
    )
}

