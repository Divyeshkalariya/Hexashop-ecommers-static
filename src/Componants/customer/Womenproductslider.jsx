import React, { Fragment} from 'react'
import { Col, Container } from 'react-bootstrap';
import Slider from "react-slick";

export default function Womenproductslider() {

    // slick slider 
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
                                    <img src="https://media1.popsugar-assets.com/files/thumbor/UPEB-LvSoc7hr_gJkASisJ8m9ow/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/05/19/829/n/1922564/e11061fd0ec3ed21_151989639/i/Youre-girl-all-your-friends-come-when-new-trend-pops-up.jpg" alt="Womens-feshion" className='img-fluid' />
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
                                            <i className="fa fa-shopping-cart" aria-hidden="true" ></i>
                                        </li>
                                    </ul>
                                    <Col className=''>
                                        <Col className='d-flex justify-content-between mt-4'>
                                            <h4 className='product-subheading'>Popsuger</h4>
                                            <span className='mt-1 product-starts'>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star '></i>
                                            </span>
                                        </Col>
                                        <Col>
                                            <h3 className='product-price'>&#8377; 1599</h3>
                                        </Col>
                                    </Col>
                                </Col>
                            </Col>
                            <Col className='p-2 product-outer'>
                                <Col className='product-card '>
                                    <img src="https://i.pinimg.com/736x/b5/d1/8c/b5d18c8da3a752a13160218bd3e942ed.jpg" alt="Womens-feshion" className='img-fluid' />
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
                                            <i className="fa fa-shopping-cart" aria-hidden="true" ></i>
                                        </li>
                                    </ul>
                                    <Col className=''>
                                        <Col className='d-flex justify-content-between mt-4'>
                                            <h4 className='product-subheading'>Trousers</h4>
                                            <span className='mt-1 product-starts'>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star '></i>
                                            </span>
                                        </Col>
                                        <Col>
                                            <h3 className='product-price'>&#8377; 999</h3>
                                        </Col>
                                    </Col>
                                </Col>
                            </Col>
                            <Col className='p-2 product-outer'>
                                <Col className='product-card '>
                                    <img src="https://i.pinimg.com/474x/a4/56/ac/a456ac8c451bfe86478d2bab9c821331.jpg" alt="Womens-feshion" className='img-fluid' />
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
                                            <i className="fa fa-shopping-cart" aria-hidden="true" ></i>
                                        </li>
                                    </ul>
                                    <Col className=''>
                                        <Col className='d-flex justify-content-between mt-4'>
                                            <h4 className='product-subheading'>Salwar-suti</h4>
                                            <span className='mt-1 product-starts'>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star '></i>
                                            </span>
                                        </Col>
                                        <Col>
                                            <h3 className='product-price'>&#8377; 1599</h3>
                                        </Col>
                                    </Col>
                                </Col>
                            </Col>
                            <Col className='p-2 product-outer'>
                                <Col className='product-card '>
                                    <img src="https://media1.popsugar-assets.com/files/thumbor/AxpC_IMxOXTSOdhghlHoxJQlR3A/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/05/28/849/n/1922564/6e2d079f47c0f709_imaxtree/i/Master-Basics-First.jpg" alt="Womens-feshion" className='img-fluid' />
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
                                            <i className="fa fa-shopping-cart" aria-hidden="true" ></i>
                                        </li>
                                    </ul>
                                    <Col className=''>
                                        <Col className='d-flex justify-content-between mt-4'>
                                            <h4 className='product-subheading'>Jeans-Tshirt</h4>
                                            <span className='mt-1 product-starts'>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star '></i>
                                            </span>
                                        </Col>
                                        <Col>
                                            <h3 className='product-price'>&#8377; 899</h3>
                                        </Col>
                                    </Col>
                                </Col>
                            </Col>
                            <Col className='p-2 product-outer'>
                                <Col className='product-card '>
                                    <img src="https://publish.purewow.net/wp-content/uploads/sites/2/2022/05/june-outfit-ideas-2022-all-black-outfit.jpg" alt="Womens-feshion" className='img-fluid' />
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
                                            <i className="fa fa-shopping-cart" aria-hidden="true" ></i>
                                        </li>
                                    </ul>
                                    <Col className=''>
                                        <Col className='d-flex justify-content-between mt-4'>
                                            <h4 className='product-subheading'>Chic Outfit</h4>
                                            <span className='mt-1 product-starts'>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star '></i>
                                            </span>
                                        </Col>
                                        <Col>
                                            <h3 className='product-price'>&#8377; 1299</h3>
                                        </Col>
                                    </Col>
                                </Col>
                            </Col>
                            <Col className='p-2 product-outer'>
                                <Col className='product-card '>
                                    <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/jumpsuit/x/i/6/s-bvjs1007-belavine-original-imagmw98v2ehs4ne.jpeg?q=70" alt="Womens-feshion" className='img-fluid' />
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
                                            <i className="fa fa-shopping-cart" aria-hidden="true" ></i>
                                        </li>
                                    </ul>
                                    <Col className=''>
                                        <Col className='d-flex justify-content-between mt-4'>
                                            <h4 className='product-subheading'>Jumpsuti</h4>
                                            <span className='mt-1 product-starts'>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star '></i>
                                            </span>
                                        </Col>
                                        <Col>
                                            <h3 className='product-price'>&#8377; 1399</h3>
                                        </Col>
                                    </Col>
                                </Col>
                            </Col>
                            <Col className='p-2 product-outer'>
                                <Col className='product-card '>
                                    <img src="https://rukminim2.flixcart.com/image/832/832/l4ln8nk0/ethnic-set/h/n/g/xxl-kurti-and-palazzo-set-river-of-cloth-original-imagfgtrr79nafk9.jpeg?q=70" alt="Womens-feshion" className='img-fluid' />
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
                                            <i className="fa fa-shopping-cart" aria-hidden="true" ></i>
                                        </li>
                                    </ul>
                                    <Col className=''>
                                        <Col className='d-flex justify-content-between mt-4'>
                                            <h4 className='product-subheading'>Kurta and Palazzo </h4>
                                            <span className='mt-1 product-starts'>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star '></i>
                                            </span>
                                        </Col>
                                        <Col>
                                            <h3 className='product-price'>&#8377; 775</h3>
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

