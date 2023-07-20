import React, { Fragment } from 'react'
import Pagebanner from '../Pagebanner';
import { Col, Container } from 'react-bootstrap';
import Menproductslider from '../Menproductslider';
import Womenproductslider from '../Womenproductslider';
import Kidsproductslider from '../Kidsproductslider';
import Footre from '../Footre';

export default function Products() {
  return (
    <Fragment>

      {/* pagebanner */}
      <Pagebanner headline="Check Our Products" />

      {/* men section */}
      <Container fluid="true" className='py-3' id='men'>
        <Col className='product-head text-center py-3'>
          <h1>Men's Products</h1>
          <p>"Being perfectly well-dressed gives one a tranquility that no religion can bestow."</p>
        </Col>
        {/* menproduct */}
        <Menproductslider />
      </Container>


      {/* women section */}
      <Container fluid="true" className='py-3' id='women'>
        <Col className='product-head text-center py-3'>
          <h1>Women's Products</h1>
          <p>"Being perfectly well-dressed gives one a tranquility that no religion can bestow."</p>
        </Col>
        {/* womenproduct */}
        <Womenproductslider/>
      </Container>


      {/* Kids section */}
      <Container fluid="true" className='py-3' id='kid'>
        <Col className='product-head text-center py-3'>
          <h1>Kids's Products</h1>
          <p>"Being perfectly well-dressed gives one a tranquility that no religion can bestow."</p>
        </Col>
        {/* kidsproduct */}
        <Kidsproductslider/>
      </Container>


      {/* footer */}
      <Footre/>

    </Fragment>
  )
}
