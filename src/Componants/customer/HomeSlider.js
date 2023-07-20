import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

const HomeSlider = () => {

    // SLIDER
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    //FATCH DATA IN SLIDER
    const [slide, setSlide] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:2602/HomeSlider")
            .then(response => setSlide(response.data))
            .catch(err => console.log(err));
    }, [])


    return (
        <div>
        <Slider {...settings}>
        {slide.map((item) => {
            return(
                <div key={item.id} id="slider" className=' position-relative'>
                    <div className='slide-container position-absolute w-100 h-100'>
                        <img src={item.imageurl} className='img-fluid d-block w-100 h-100' />
                    </div>
                    <div className='slide-container position-absolute h-100' data-aos="fade-left" data-aos-duration="1000">
                        <h1>{item.slidetitle}</h1>
                        <p>{item.slidesubtitle}</p>
                    </div>
                </div>
            )
        })}
        </Slider>
      </div>
    )
}

export default HomeSlider
