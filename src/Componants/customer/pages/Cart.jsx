import React, { useState } from 'react'
import Footre from '../Footre';
import Pagebanner from '../Pagebanner';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars-2';
import $ from "jquery";

export default function Catr() {

  // SCROLL TOP ARROW JS
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


  {
    $('.quantity button').on('click', function () {
      var button = $(this);
      var oldValue = button.parent().parent().find('input').val();
      if (button.hasClass('btn-plus')) {
        var newVal = parseFloat(oldValue) + 1;
      } else {
        if (oldValue > 0) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 0;
        }
      }
      button.parent().parent().find('input').val(newVal);
    });
  }

  return (
    <div>
      {/* pagebanner */}
      <Pagebanner headline="Cart" />

      {/* cart */}
      <Container fluid="true" id='cart'>
        <Row className='px-3 py-3 py-md-5 py-lg-5'>
          <Col sm={11} md={7} lg={7} className='col-12 mx-auto carttable p-0'>
            <Scrollbars style={{ width: "100%", height: "100%" }}>
              <table className='table table-striped table-bordered'>
                <thead align="center" className="tablehead">
                  <tr>
                    <th className='bg-dark text-white'>Products</th>
                    <th className='bg-dark text-white'>Price(&#8377;)</th>
                    <th className='bg-dark text-white'>Photo</th>
                    <th className='bg-dark text-white'>Quantity</th>
                    <th className='bg-dark text-white'>Total(&#8377;)</th>
                    <th className='bg-dark text-white'>Remove</th>
                  </tr>
                </thead>

                <tbody align="center">

                  <tr>
                    <td>Classic Spring</td>
                    <td>3499</td>
                    <td><img src="https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="product image" style={{ width: "50px", height: "70px" }} /></td>
                    <td>
                      <InputGroup className='quantity'>
                        <Button className='btn btn-sm btn-primary btn-minus rounded-0 py-1 d-flex justify-content-center align-items-center' variant='primary'>
                          <i className="fa fa-minus"></i>
                        </Button>
                        <Form.Control
                          value="1"
                          className='rounded-0 text-center qty'
                          readOnly
                          minLength="0"
                        />
                        <button className="btn btn-sm btn-primary btn-plus rounded-0 py-1 d-flex justify-content-center align-items-center ">
                          <i className="fa fa-plus"></i>
                        </button>
                      </InputGroup>
                    </td>
                    <td>3499</td>
                    <td><i className='fa fa-trash text-danger fs-4' ></i></td>
                  </tr>
                  <tr>
                    <td>Popsuger</td>
                    <td>1599</td>
                    <td><img src="https://media1.popsugar-assets.com/files/thumbor/UPEB-LvSoc7hr_gJkASisJ8m9ow/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/05/19/829/n/1922564/e11061fd0ec3ed21_151989639/i/Youre-girl-all-your-friends-come-when-new-trend-pops-up.jpg" alt="product image" style={{ width: "50px", height: "70px" }} /></td>
                    <td>
                      <InputGroup className='quantity'>
                        <Button variant='primary' className='btn btn-sm btn-primary btn-minus rounded-0 py-1 d-flex justify-content-center align-items-center'>
                          <i className="fa fa-minus"></i>
                        </Button>
                        <Form.Control
                          value="1"
                          className='rounded-0 text-center qty'
                          readOnly
                          minLength="0"
                        />
                        <button className="btn btn-sm btn-primary btn-plus rounded-0 py-1 d-flex justify-content-center align-items-center">
                          <i className="fa fa-plus"></i>
                        </button>
                      </InputGroup>
                    </td>
                    <td>1599</td>
                    <td><i className='fa fa-trash text-danger fs-4' ></i></td>
                  </tr>
                  <tr>
                    <td>Boys-Traditional</td>
                    <td>1299</td>
                    <td><img src="https://ik.imagekit.io/bhsa3gea8yj/products/tr:w-1200/products-2018/Nov-2021/Handloom-Silk-Kurta-Pajama-In-Light-Brown-Colour-BK2710911-A.jpg" alt="product image" style={{ width: "50px", height: "70px" }} /></td>
                    <td>
                      <InputGroup className='quantity'>
                        <Button className='btn btn-sm btn-primary btn-minus rounded-0 py-1 d-flex justify-content-center align-items-center' variant='primary'>
                          <i className="fa fa-minus"></i>
                        </Button>
                        <Form.Control
                          value="1"
                          className='rounded-0 text-center qty'
                          readOnly
                          minLength="0"
                        />
                        <button className="btn btn-sm btn-primary btn-plus rounded-0 py-1 d-flex justify-content-center align-items-center">
                          <i className="fa fa-plus"></i>
                        </button>
                      </InputGroup>
                    </td>
                    <td>1299</td>
                    <td><i className='fa fa-trash text-danger fs-4' ></i></td>
                  </tr>
                  <tr>
                    <td>Kids Watch</td>
                    <td>999</td>
                    <td><img src="https://m.media-amazon.com/images/I/71DMUQgia5L._UY500_.jpg" style={{ width: "50px", height: "70px" }} /></td>
                    <td>
                      <InputGroup className='quantity'>
                        <Button className='btn btn-sm btn-primary btn-minus rounded-0 py-1 d-flex justify-content-center align-items-center' variant='primary'>
                          <i className="fa fa-minus"></i>
                        </Button>
                        <Form.Control
                          value="1"
                          className='rounded-0 text-center qty'
                          readOnly
                          minLength="0"
                        />
                        <button className="btn btn-sm btn-primary btn-plus rounded-0 py-1 d-flex justify-content-center align-items-center">
                          <i className="fa fa-plus"></i>
                        </button>
                      </InputGroup>
                    </td>
                    <td>999</td>
                    <td><i className='fa fa-trash text-danger fs-4' ></i></td>
                  </tr>

                  <tr>
                    <td>leather Belt</td>
                    <td>799</td>
                    <td><img src="https://m.media-amazon.com/images/I/61KOrK1kdpL._UX522_.jpg" style={{ width: "50px", height: "70px" }} /></td>
                    <td>
                      <InputGroup className='quantity'>
                        <Button className='btn btn-sm btn-primary btn-minus rounded-0 py-1 d-flex justify-content-center align-items-center' variant='primary'>
                          <i className="fa fa-minus"></i>
                        </Button>
                        <Form.Control
                          value="1"
                          className='rounded-0 text-center qty'
                          readOnly
                          minLength="0"
                        />
                        <button className="btn btn-sm btn-primary btn-plus rounded-0 py-1 d-flex justify-content-center align-items-center">
                          <i className="fa fa-plus"></i>
                        </button>
                      </InputGroup>
                    </td>
                    <td>1,899</td>
                    <td><i className='fa fa-trash text-danger fs-4' ></i></td>
                  </tr>

                </tbody>
              </table>
            </Scrollbars>
          </Col>
          <Col sm={11} md={4} lg={4} className='col-12 mx-auto h-100'>
            <div className='mt-3 mt-md-0 mt-lg-0'>
              <div className='pb-3 added'>
                <h3><span className='text-primary'>5</span> Products Added In Cart</h3>
              </div>
              <InputGroup className="mb-3 mb-sm-3 mb-md-5 mb-lg-5 border border-black">
                <Form.Control
                  placeholder="Cupone Code"
                  className='rounded-0 py-3 py-sm-2 py-md-3 py-lg-3 border border-0'
                />
                <Button variant="warning" id="button-addon2" className='rounded-0 border border-bottom-0 border-top-0 border-start-1 border-end-0 border-black'>
                  Apply Cupone
                </Button>
              </InputGroup>
            </div>
            <div className='border border-black'>
              <h4 className='bg-dark text-white p-3 m-0'>Cart Summary</h4>
              <InputGroup className="m-0">
                <Form.Control
                  defaultValue="Subtotal"
                  className='rounded-0 py-3 border border-bottom-1 border-top-0 border-start-0 border-end-0 border-black text-center'
                />
                <Form.Control
                  value="Rs. 9,295"
                  readOnly
                  className='rounded-0 py-3 border border-bottom-1 border-top-0 border-start-0 border-end-0 border-black text-center'
                />
              </InputGroup>

              <InputGroup className="m-0">
                <Form.Control
                  defaultValue="Shipping"
                  className='rounded-0 py-3 border border-bottom-1 border-top-0 border-start-0 border-end-0 border-black text-center'
                />
                <Form.Control
                  defaultValue="Rs. 00"
                  className='rounded-0 py-3 border border-bottom-1 border-top-0 border-start-0 border-end-0 border-black text-center'
                />
              </InputGroup>
              <div>
                <Button variant='warning' className='w-100 rounded-0 py-2 fs-5' href='/checkout'>
                  CheckOut
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* footer */}
      <Footre />

      {/* scroll top arrow */}
      <button href="#header" onClick={scrollToTop} className="scroll-top bg-dark" data-aos="zoom-in" data-aos-duration="1000"> <i className="fa fa-angle-up"></i></button>


    </div>
  )
}
