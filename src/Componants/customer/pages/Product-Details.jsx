import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Footre from '../Footre';
import Pagebanner from '../Pagebanner';
import Swal from 'sweetalert2';


export default function ProductDetails() {

    const AddToCart = () => {
            Swal.fire({
                icon: 'success',
                title: 'Product',
                text: 'Added In Cart',
            });
            setTimeout(() => {
                window.location="/Cart"
            }, 2000);
    }

    return (
        <div>
            {/* pagebanner */}
            <Pagebanner headline="Product Details" />

            {/* product details section */}
            <Container id='product-details' className='p-5'>

                <Row className='productdetails'>
                    <Col sm={6} md={6} lg={6} className="col-12 d-flex justify-content-center">
                        <img src="https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D&w=1000&q=80" className='img-fluid' />
                    </Col>
                    <Col sm={6} md={6} lg={6} className="col-12 details-right">
                        <h1>Mens</h1>
                        <div className='mt-2'>
                            <i className='fa fa-star text-warning fs-4'></i>
                            <i className='fa fa-star text-warning fs-4 ms-1'></i>
                            <i className='fa fa-star text-warning fs-4 ms-1'></i>
                            <i className='fa fa-star text-warning fs-4 ms-1'></i>
                            <i className='fa fa-star text-warning fs-4 ms-1'></i>
                        </div>
                        <div className='mt-2'>
                            <b>Size : </b>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioS" value="optionS" />
                                <label className="form-check-label" htmlFor="inlineRadioS">S</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioM" value="optionM" />
                                <label className="form-check-label" htmlFor="inlineRadioM">M</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioL" value="optionL" />
                                <label className="form-check-label" htmlFor="inlineRadioL">L</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioXL" value="optionXL" />
                                <label className="form-check-label" htmlFor="inlineRadioXL">XL</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioXXL" value="optionXXL" />
                                <label className="form-check-label" htmlFor="inlineRadioXXL">XXL</label>
                            </div>
                        </div>
                        <h3 className='mt-2'>Rs. 3499</h3>

                        <p>best cloths for men Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore labore, recusandae reprehenderit voluptate reiciendis qui ipsa consectetur illo animi corporis repellat rerum. Deserunt debitis, non pariatur cupiditate magnam consectetur atque?</p>

                        <Button variant='outline-success' className='rounded-0' onClick={AddToCart}>Add To Cart</Button>
                    </Col>
                </Row>

            </Container>

            {/* footer */}
            <Footre />

        </div>
    )
}
