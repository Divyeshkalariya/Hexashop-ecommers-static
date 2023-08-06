import React from 'react';
import Slider from 'react-slick';

const HomeSlider = () => {

    // SLIDER
    const settings = {
        // dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div>
            <Slider {...settings}>
                        <div id="slider" className=' position-relative'>
                            <div className='slide-container position-absolute w-100 h-100'>
                                <img src="https://ithinkbigger.com/wp-content/uploads/2022/03/eCommerce-Website-Components-photo.jpg" className='img-fluid d-block w-100 h-100' />
                            </div>
                            <div className='slide-container position-absolute h-100 w-100' data-aos="fade-left" data-aos-duration="1000">
                                <h1 className='text-center'>Hurry Up</h1>
                                <p className='text-center'>Get Upto 50% Off On All Products</p>
                            </div>
                        </div>
                        <div id="slider" className=' position-relative'>
                            <div className='slide-container position-absolute w-100 h-100'>
                                <img src="https://cdn.shopify.com/s/files/1/0582/0406/1873/files/Apparel-01-min.jpg?v=1638470669" className='img-fluid d-block w-100 h-100' />
                            </div>
                            <div className='slide-container position-absolute h-100 w-100' data-aos="fade-left" data-aos-duration="1000">
                                <h1 className='text-center'>Best Mens Clothsp</h1>
                                <p className='text-center'>Get Best Deals And Offers</p>
                            </div>
                        </div>
                        <div id="slider" className=' position-relative'>
                            <div className='slide-container position-absolute w-100 h-100'>
                                <img src="https://media-exp2.licdn.com/dms/image/C4E1BAQGU5aBOkBnOKQ/company-background_10000/0/1570667445517?e=2147483647&v=beta&t=4zTBTAcEJK0o9lljORVaUXfy03UBuD4xmBQUZySaBIM" className='img-fluid d-block w-100 h-100' />
                            </div>
                            <div className='slide-container position-absolute h-100 w-100' data-aos="fade-left" data-aos-duration="1000">
                                <h1 className='text-center'>Best Womens Collection</h1>
                                <p className='text-center'>Get Best Womens Collection And Offers</p>
                            </div>
                        </div>
                        <div id="slider" className=' position-relative'>
                            <div className='slide-container position-absolute w-100 h-100'>
                                <img src="https://www.baero.com/fileadmin/Retail%20Lighting/Bilder/Stage/baero_anwendungsbereiche_fashionundtextil_stage.jpg" className='img-fluid d-block w-100 h-100' />
                            </div>
                            <div className='slide-container position-absolute h-100 w-100' data-aos="fade-left" data-aos-duration="1000">
                                <h1 className='text-center'>Best Kids Cloths</h1>
                                <p className='text-center'>Get Best Offers On Kids Cloths, Sale Start Soon</p>
                            </div>
                        </div>
            </Slider>
        </div>
    )
}

export default HomeSlider;
