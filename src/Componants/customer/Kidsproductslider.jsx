import React, { Fragment } from 'react'
import { Container, Col } from 'react-bootstrap';
import Slider from "react-slick";


export default function Kidsproductslider() {

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
                                    <img src="https://images.kapsonsonline.com/kopl/images/GAS%20KIDS/410317150_0001/410317150_0001_1.jpg" alt="Kids product" className='img-fluid' />
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
                                            <h4 className='product-subheading'>Casual</h4>
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
                                    <img src="https://ik.imagekit.io/bhsa3gea8yj/products/tr:w-1200/products-2018/Nov-2021/Handloom-Silk-Kurta-Pajama-In-Light-Brown-Colour-BK2710911-A.jpg" alt="Kids product" className='img-fluid' />
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
                                            <h4 className='product-subheading'>Boys-Traditional</h4>
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
                                    <img src="https://images.squarespace-cdn.com/content/v1/559c4026e4b0b05c516049a2/1652107082005-75O9TI9SFX1E7C0ROCDA/DSC_3949.jpg" alt="Kids product" className='img-fluid' />
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
                                            <h4 className='product-subheading'>Summer-ware</h4>
                                            <span className='mt-1 product-starts'>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star '></i>
                                            </span>
                                        </Col>
                                        <Col>
                                            <h3 className='product-price'>&#8377; 599</h3>
                                        </Col>
                                    </Col>
                                </Col>
                            </Col>
                            <Col className='p-2 product-outer'>
                                <Col className='product-card '>
                                    <img src="https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/11638777094448.jpg" alt="Kids product" className='img-fluid' />
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
                                            <h4 className='product-subheading'>Winter-ware</h4>
                                            <span className='mt-1 product-starts'>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star '></i>
                                            </span>
                                        </Col>
                                        <Col>
                                            <h3 className='product-price'>&#8377; 799</h3>
                                        </Col>
                                    </Col>
                                </Col>
                            </Col>
                            <Col className='p-2 product-outer'>
                                <Col className='product-card '>
                                    <img src="https://asset1.cxnmarksandspencer.com/is/image/mands/SD_04_T87_3031V_E0_X_EC_0?wid=1024&qlt=80" alt="Kids product" className='img-fluid' />
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
                                            <h4 className='product-subheading'>Kid's shorts</h4>
                                            <span className='mt-1 product-starts'>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star me-1'></i>
                                                <i className='fa fa-star '></i>
                                            </span>
                                        </Col>
                                        <Col>
                                            <h3 className='product-price'>&#8377; 299</h3>
                                        </Col>
                                    </Col>
                                </Col>
                            </Col>
                            <Col className='p-2 product-outer'>
                                <Col className='product-card '>
                                    <img src="https://i.pinimg.com/236x/63/9b/e1/639be1b614c3eeb24b1f67e24ed92e0b.jpg" alt="Kids product" className='img-fluid' />
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
                                            <h4 className='product-subheading'>Girls-Traditional</h4>
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
                        </Slider>
                    </Col>
                </Container>
            </Container>
        </Fragment>
    )
}

