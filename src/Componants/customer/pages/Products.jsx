import React, { Fragment } from 'react'
import Pagebanner from '../Pagebanner';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Footre from '../Footre';


export default function Products() {

  return (
    <Fragment>
      {/* pagebanner */}
      <Pagebanner headline="Check Our Products" />

      <Container id='products'>
        {/* mens product start */}
        <Container fluid="true" className='mb-5' id='mens-products'>
          <Col className='product-head d-flex justify-content-between p-0 mt-4'>
            <div className='col-12 text-center'>
              <h1>Men's Cloths</h1>
              <p>Best mens collection for all sesons. must visit.</p>
            </div>
          </Col>
          <Row>
            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >Classic Spring</h4>
                <h5>Rs.
                  <span className='text-success' > 3,499</span>
                  <sub><del className='text-danger' >6,999</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>

            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://www.universityoffashion.com/blog/wp-content/uploads/2021/07/A-look-from-Brionis-Spring-2022-Collection.-Photo-Credit-Brioni.-scaled.jpg" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >Classic Stome</h4>
                <h5>Rs.
                  <span className='text-success' > 1,900</span>
                  <sub><del className='text-danger' >3,799</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>

            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://img.freepik.com/free-photo/man-portrait_1296-626.jpg?w=2000" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >Air Force 1 X</h4>
                <h5>Rs.
                  <span className='text-success' > 2,499</span>
                  <sub><del className='text-danger' >4,599</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>

            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://i.pinimg.com/736x/66/1e/39/661e39d2aac31147c75efe1515fe8d61.jpg" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >Love Nani ' 20</h4>
                <h5>Rs.
                  <span className='text-success' > 999</span>
                  <sub><del className='text-danger' >1,899</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>

            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://i.pinimg.com/736x/63/bc/04/63bc04d4c8bbc36c9fa60fca15001b36.jpg" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >Lost Stack</h4>
                <h5>Rs.
                  <span className='text-success' > 1,299</span>
                  <sub><del className='text-danger' >2,299</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>

            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://www.tiptopgents.com/wp-content/uploads/2022/06/picsart_22-06-23_13-17-03-2948685519744956187826.webp" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >Classy Style</h4>
                <h5>Rs.
                  <span className='text-success' > 1,799</span>
                  <sub><del className='text-danger' >2,999</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>
            
            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/t/t/l/l-bk-502-flossy-original-imagpnjh5uxxwnpp.jpeg?q=70" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >Halidi Kurta</h4>
                <h5>Rs.
                  <span className='text-success' > 1,099</span>
                  <sub><del className='text-danger' >1,999</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>

            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://rukminim2.flixcart.com/image/832/832/kvgzyq80/thermal/q/s/q/85-ambwhnul-mel-gry-p-alfa-original-imag8db6duhd4kca.jpeg?q=70" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >Jackets</h4>
                <h5>Rs.
                  <span className='text-success' > 999</span>
                  <sub><del className='text-danger' >2,999</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>
          </Row>
        </Container>
        {/* mens product end */}

        {/* womens product start */}
        <Container fluid="true" className='mb-5' id='womens-products'>
          <Col className='product-head d-flex justify-content-between p-0'>
            <div className='col-12 text-center'>
              <h1>Women's Cloths</h1>
              <p>Best womens collection for all sesons. must visit.</p>
            </div>
          </Col>
          <Row>
            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://media1.popsugar-assets.com/files/thumbor/UPEB-LvSoc7hr_gJkASisJ8m9ow/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/05/19/829/n/1922564/e11061fd0ec3ed21_151989639/i/Youre-girl-all-your-friends-come-when-new-trend-pops-up.jpg" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >Popsuger</h4>
                <h5>Rs.
                  <span className='text-success' > 1,599</span>
                  <sub><del className='text-danger' >2,999</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>

            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://i.pinimg.com/736x/b5/d1/8c/b5d18c8da3a752a13160218bd3e942ed.jpg" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >Trousers</h4>
                <h5>Rs.
                  <span className='text-success' > 999</span>
                  <sub><del className='text-danger' >1,999</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>

            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://i.pinimg.com/474x/a4/56/ac/a456ac8c451bfe86478d2bab9c821331.jpg" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >Salwar-suti</h4>
                <h5>Rs.
                  <span className='text-success' > 1,599</span>
                  <sub><del className='text-danger' >2,999</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>

            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://media1.popsugar-assets.com/files/thumbor/AxpC_IMxOXTSOdhghlHoxJQlR3A/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/05/28/849/n/1922564/6e2d079f47c0f709_imaxtree/i/Master-Basics-First.jpg" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >Jeans-Tshirt</h4>
                <h5>Rs.
                  <span className='text-success' > 899</span>
                  <sub><del className='text-danger' >1,999</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>

            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://publish.purewow.net/wp-content/uploads/sites/2/2022/05/june-outfit-ideas-2022-all-black-outfit.jpg" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >Chic Outfit</h4>
                <h5>Rs.
                  <span className='text-success' > 1,299</span>
                  <sub><del className='text-danger' >2,599</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>

            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/jumpsuit/x/i/6/s-bvjs1007-belavine-original-imagmw98v2ehs4ne.jpeg?q=70" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >Jumpsuti</h4>
                <h5>Rs.
                  <span className='text-success' > 1,399</span>
                  <sub><del className='text-danger' >2,699</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>

            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://rukminim2.flixcart.com/image/832/832/k2gh30w0/sweater/y/g/8/xl-tta1000130-tokyo-talkies-original-imafhswygvxejebb.jpeg?q=70" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >Sweater</h4>
                <h5>Rs.
                  <span className='text-success' > 1,599</span>
                  <sub><del className='text-danger' >1,799</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>

            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://rukminim2.flixcart.com/image/832/832/kxrvi4w0/shopsy-gown/o/a/c/s-full-sleeve-stitched-u75-ekta-original-imaga5ehg39psegq.jpeg?q=70" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >One-peace</h4>
                <h5>Rs. 
                  <span className='text-success' > 1,299</span>
                  <sub><del className='text-danger' >1,999</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>
          </Row>
        </Container>
        {/* womens product end */}

        {/* kids product start */}
        <Container fluid="true" className='mb-5' id='kids-products'>
          <Col className='product-head d-flex justify-content-between p-0'>
            <div className='text-center w-100'>
              <h1>Kids's Cloths</h1>
              <p>Best kids collection for all sesons. must visit.</p>
            </div>
          </Col>
          <Row>
            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://images.kapsonsonline.com/kopl/images/GAS%20KIDS/410317150_0001/410317150_0001_1.jpg" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >Casual</h4>
                <h5>Rs.
                  <span className='text-success' > 899</span>
                  <sub><del className='text-danger' >1,799</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>

            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://ik.imagekit.io/bhsa3gea8yj/products/tr:w-1200/products-2018/Nov-2021/Handloom-Silk-Kurta-Pajama-In-Light-Brown-Colour-BK2710911-A.jpg" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >Boys-Traditional</h4>
                <h5>Rs.
                  <span className='text-success' > 1,299</span>
                  <sub><del className='text-danger' >2,199</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>

            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://images.squarespace-cdn.com/content/v1/559c4026e4b0b05c516049a2/1652107082005-75O9TI9SFX1E7C0ROCDA/DSC_3949.jpg" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >Summer-ware</h4>
                <h5>Rs.
                  <span className='text-success' > 599</span>
                  <sub><del className='text-danger' >1,299</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>

            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/11638777094448.jpg" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >Winter-ware</h4>
                <h5>Rs.
                  <span className='text-success' > 499</span>
                  <sub><del className='text-danger' >799</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>

            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://asset1.cxnmarksandspencer.com/is/image/mands/SD_04_T87_3031V_E0_X_EC_0?wid=1024&qlt=80" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >Kids-Shorts</h4>
                <h5>Rs.
                  <span className='text-success' > 299</span>
                  <sub><del className='text-danger' >599</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>

            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://i.pinimg.com/236x/63/9b/e1/639be1b614c3eeb24b1f67e24ed92e0b.jpg" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >Girls-Traditional</h4>
                <h5>Rs.
                  <span className='text-success' > 999</span>
                  <sub><del className='text-danger' >1,999</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>

            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://rukminim2.flixcart.com/image/832/832/l27wtjk0/kids-ethnic-set/m/x/c/4-5-years-prb-744-red-26-prabhuratan-original-imagdmfvy3fn6kmt.jpeg?q=70" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >Sliveless-Blazzer</h4>
                <h5>Rs.
                  <span className='text-success' > 1,099</span>
                  <sub><del className='text-danger' >1,799</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>

            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/y/u/x/3-4-years-no-hw-hkg1801-honeybell-original-imaggjwnchj73tdz.jpeg?q=70" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >Girls Jackets</h4>
                <h5>Rs.
                  <span className='text-success' > 1,309</span>
                  <sub><del className='text-danger' >2,199</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>
          </Row>
        </Container>
        {/* kids product end */}

        {/* Accessories start */}
        <Container fluid="true" className='mb-5' id='accessories'>
          <Col className='product-head d-flex justify-content-between p-0'>
            <div className='text-center w-100'>
              <h1>Accessories</h1>
              <p>Best accessories collection for all. must visit.</p>
            </div>
          </Col>
          <Row>
            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://superstyles.co.in/wp-content/uploads/2023/03/RX041-2.jpg" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >Men Watch</h4>
                <h5>Rs.
                  <span className='text-success' > 5,999</span>
                  <sub><del className='text-danger' >9,999</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>

            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://m.media-amazon.com/images/I/611I0f+I+MS._UX466_.jpg" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >Women Watch</h4>
                <h5>Rs.
                  <span className='text-success' > 8,999</span>
                  <sub><del className='text-danger' >4,999</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>

            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://m.media-amazon.com/images/I/71DMUQgia5L._UY500_.jpg" className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >Kids Watch</h4>
                <h5>Rs.
                  <span className='text-success' > 599</span>
                  <sub><del className='text-danger' >999</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>

            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/m/v/f/-original-imagkghdzgudguvd.jpeg?q=70" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >SmartaWatch</h4>
                <h5>Rs.
                  <span className='text-success' > 2,459</span>
                  <sub><del className='text-danger' >3,899</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>

            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://www.colosseinglasses.com/cdn/shop/products/colossein_sunglasses_7_460x.jpg?v=1644393492" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >Mens Sunglass</h4>
                <h5>Rs.
                  <span className='text-success' > 799</span>
                  <sub><del className='text-danger' >1,599</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>

            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://m.media-amazon.com/images/I/51L1jouHzvL._UX679_.jpg" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >Womens Sunglass</h4>
                <h5>Rs.
                  <span className='text-success' > 499</span>
                  <sub><del className='text-danger' >999</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>

            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTTv60c0YA07PgeuodL9oYGpmuVa46QOf5UakTqfexOytXHvQCiK13BRSU3JQOjqNm0Gjx_opwvBHHSPap6mdd7-Elw0nvtUVsScFWEbjU&usqp=CAE" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >leather Belt</h4>
                <h5>Rs.
                  <span className='text-success' > 799</span>
                  <sub><del className='text-danger' >1,599</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>

            <Col sm={6} md={4} lg={3} className='col-12 p-2 productbox'
              data-aos="zoom-in-down" data-aos-duration="1000"
            >
              <Col className='p-4 shadow position-relative detailsbox'>
                <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/hand-messenger-bag/e/f/w/-original-imagg7fsy22tggn4.jpeg?q=70" alt='product-image' className='img-fluid mx-auto w-100' />
                <h4 className='mt-2 name' >Maroon Satchel</h4>
                <h5>Rs.
                  <span className='text-success' > 499</span>
                  <sub><del className='text-danger' >999</del></sub>
                </h5>
                <div className='detailsbutton position-absolute bottom-0'>
                  <Button type='button' className=' mt-1 rounded-0 bg-transparent border border-2 border-primary border-start-0 border-end-0 text-black-50 p-1 px-2 w-50' href='/product-details'>Details</Button>
                </div>
              </Col>
            </Col>

          </Row>
        </Container>
        {/* Accessories end */}

      </Container>
      {/* footer */}
      < Footre />

    </Fragment>
  )
}
