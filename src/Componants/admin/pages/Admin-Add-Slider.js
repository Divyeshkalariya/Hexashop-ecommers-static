import React , {Fragment , useRef} from 'react'
import { Col, Container, Form, Button } from 'react-bootstrap'
import AdminSidebar from '../Admin-Sidebar'
import AdminHeader from '../Admin-Header'
import AdminFooter from '../Admin-Footer'
import axios from 'axios'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'


export default function AdminAddSlider() {
  
  // ADD DATA IN API
  const imageurl = useRef('');
  const slidetitle = useRef('');
  const slidesubtitle = useRef('');
  const Navigate = useNavigate();

  const Addslide = () => {
    let insert = {
      imageurl : imageurl.current.vlaue,
      slidetitle : slidetitle.current.vlaue,    
      slidesubtitle : slidesubtitle.current.vlaue,   
    }
    axios.post("http://localhost:2602/HomeSlider" , insert)
      .then(() => {
        swal("Slide Added Successfully");
        Navigate('/admin-login/admin-manage-slider')
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
            {/* Add Slider */}
            <Container fluid="true" className='mb-5' id='add-slider' >
              <Col>
                <h1 className='text-center my-3 pt-2'>Add Slider</h1>
                <hr className='border border-2 border-info w-25 mx-auto' />
              </Col>
              <Container className='w-75 mb-4' id='add-category'>
                {/* <Form className='mt-lg-4'>
                  <Form.Group className='mt-3'>
                    <Form.Label >Slide Image</Form.Label>
                    <Form.Control 
                      type="url" 
                      className="p-2"  
                      placeholder="Enter Slide Image URL" 
                      required
                      ref={imageurl} 
                      />
                  </Form.Group>

                  <Form.Group className='mt-3'>
                    <Form.Label>Slide Title</Form.Label>
                    <Form.Control 
                      type="text" 
                      className=" p-2 " 
                      placeholder="Enter Slide Titel" 
                      required
                      ref={slidetitle}
                      />
                  </Form.Group>

                  <Form.Group className=" mt-3">
                    <Form.Label>Slide Subtitle</Form.Label>
                    <Form.Control 
                      type="text" 
                      className=" p-2 "  
                      placeholder="Enter Slide Subtitel" 
                      required
                      ref={slidesubtitle}
                      />
                  </Form.Group>

                  <Button type='button' variant='outline-primary ' className='px-3 mt-3 w-25' onClick={Addslide}>
                  Add Slide 
                  </Button>
              
                </Form> */}

                <Form>
                  <div className='mt-5'>
                    <label>Add Image</label>
                    <input type="url" placeholder='Enter Image URL' ref={imageurl} className='p-2 mt-1 form-control'/>
                  </div>
                  <div className='mt-3'>
                    <label>Add Title</label>
                    <input type="url" placeholder='Enter Slide Title' ref={slidetitle} className='p-2 mt-1 form-control'/>
                  </div>
                  <div className='mt-3'>
                    <label>Add SubTitle</label>
                    <input type="text" placeholder='Enter Slide Sub-Title' ref={slidesubtitle} className='p-2 mt-1 form-control'/>
                  </div>
                  <button type='button' className='w-25 mt-3 btn btn-outline-primary' onClick={Addslide}>Add Slide</button>
                </Form>

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
