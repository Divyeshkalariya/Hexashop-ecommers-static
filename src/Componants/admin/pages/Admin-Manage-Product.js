import React, { Fragment, useState, useEffect } from 'react';
import { Container, Col, Table } from 'react-bootstrap';
import AdminHeader from '../Admin-Header';
import AdminSidebar from '../Admin-Sidebar';
import AdminFooter from '../Admin-Footer';
import axios from 'axios';

export default function AdminManageProduct() {

  const [ product, setProduct ] = useState([])

  useEffect(() => {
      axios.get("http://localhost:2602/AddProducts")
          .then((response) => {
            setProduct(response.data)
          });
  }, []);

  return (
    <Fragment>
      <Container fluid="true">
        <Col className='admin-layout-left'>
          {/* sidebar */}
          <AdminSidebar />
        </Col>
        <Col className='admin-layout-right'>
          {/* header */}
          <AdminHeader />

          <Container fluid="true" id='admin-content'>
            {/* manage products */}
            <Container fluid="true" id='manage-product'>
              <Col>
                <h1 className='text-center my-3'>Manage Products</h1>
                <hr className='border border-2 border-info w-25 mx-auto' />
              </Col>
              <Container className='mb-4'>
                <Table className='datatable text-center'> 
                  <thead className='datatable-head'>
                    <tr align="center">
                      <th>CATEGORY</th>
                      <th>SUB-CATEGORY</th>
                      <th>PRODUCT NAME</th>
                      <th>PRODUCT PHOTO</th>
                      <th>QTY</th>
                      <th>PRICE</th>
                      <th>OFFER PRICE</th>
                      <th>ADD DATE</th>
                      <th>DESCRIPTION</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody className='datatable-head'>
                    { product.map((item) => {
                      return(
                        <tr key={item.id}>
                          <td>{item.addcategoriename}</td>
                          <td>{item.addsubcategoriename}</td>
                          <td>{item.productname}</td>
                          <td>{item.productimg}</td>
                          <td>{item.productqut}</td>
                          <td>{item.productprice}</td>
                          <td>{item.productoffer}</td>
                          <td>{item.productaddedate}</td>
                          <td>{item.productdescriptions}</td>
                        </tr>
                      )
                    })}
                  </tbody>

                </Table>
              </Container>
            </Container>

            {/* footer */}
            <AdminFooter />
          </Container>
        </Col>
      </Container>
    </Fragment>
  )
}
