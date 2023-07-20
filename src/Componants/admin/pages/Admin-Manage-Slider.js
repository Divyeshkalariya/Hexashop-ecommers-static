import React, { useState, useEffect, Fragment, useRef } from 'react';
import AdminHeader from '../Admin-Header';
import AdminSidebar from '../Admin-Sidebar';
import AdminFooter from '../Admin-Footer';
import { Col, Container, Table } from 'react-bootstrap';
import axios from 'axios';

export default function AdminManageSlider() {

  // DISPLAY DATA FROM API
  const [manageslider, setManageSlider] = useState([])
  const displayslide = () => {
    axios.get("http://localhost:2602/HomeSlider")
      .then(res => {
        setManageSlider(res.data)
      })
  }

  useEffect(() => {
    displayslide();
  }, [])

  // DELET DATA FROM API
  const DeletSlide = (id) => {
    axios.delete(`http://localhost:2602/HomeSlider/${id}`)
      .then((response) => {
        console.warn(response)
        displayslide();
      })
  }

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
            <Container fluid="true" id='manage-slider'>
              <Col>
                <h1 className='text-center mt-5'>Manage Slider</h1>
                <hr className='border border-2 border-info w-25 mx-auto' />
              </Col>
              <Container className='mb-4 mt-5' id='add-category'>
                <Table className='text-center'>
                  <thead>
                    <tr className='bg-dark text-white' align="center">
                      <th className='bg-dark text-white'>NAME</th>
                      <th className='bg-dark text-white'>SLIDE IMAGE</th>
                      <th className='bg-dark text-white'>SLIDE TITLE</th>
                      <th className='bg-dark text-white'>SLIDE SUB-TITLE</th>
                      <th className='bg-dark text-white'>ACTION</th>
                    </tr>
                  </thead>
                  <tbody align="center">
                    {manageslider.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td> <img src={item.imageurl} alt='slide-images' height={50} width={100} /></td>
                          <td>{item.slidetitle}</td>
                          <td>{item.slidesubtitle}</td>
                          <td>
                            <i className='fa fa-pencil text-info fs-5'></i>
                            &nbsp; <span className='fw-bold'>||</span> &nbsp;
                            <i className='fa fa-trash text-danger fs-5' onClick={() => DeletSlide(item.id)}></i>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>

                </Table>
              </Container>
            </Container>

            {/* footer */}
            <div className='slider-footer'>
              <AdminFooter />
            </div>
          </Container>
        </Col>
      </Container>
    </Fragment>
  )
}
