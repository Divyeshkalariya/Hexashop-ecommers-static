import React, { useRef } from 'react';
import { Container, Col, Form, Button } from 'react-bootstrap';
import AdminHeader from '../Admin-Header';
import AdminSidebar from '../Admin-Sidebar';
import AdminFooter from '../Admin-Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminManageFooter = () => {

    const year = useRef("")
    const Navigate = useNavigate();

    const UpdateFppter = () => {

        const insert = {
            year: year.current.value,
        }

        axios.post("http://localhost:2602/Footer", insert)
            .then(() => {
                alert("Year Update Successfully")
                Navigate('/admin-login/admin-manage-footer')
            });
    }

    return (
        <>
            <Container fluid="true">
                <Col className='admin-layout-left'>
                    {/* sidebar */}
                    <AdminSidebar />
                </Col>
                <Col className='admin-layout-right'>
                    {/* header */}
                    <AdminHeader />

                    <Container fluid="true" id="admin-content">
                        {/* manage footer */}
                        <Container fluid="true" id='manage-footer'>
                            <Col>
                                <h1 className='text-center my-3'>Manage Footer</h1>
                                <hr className='border border-2 border-info w-25 mx-auto' />
                            </Col>

                            <Form className='p-5 m-5 shadow w-50 mx-auto'>
                                <label className='mb-2'>Manage Year</label> <br />
                                <input type='text'
                                    placeholder='Enter Year'
                                    minLength={3}
                                    maxLength={4}
                                    required
                                    className='form-control'
                                    ref={year}
                                /><br />
                                <Button type='button' onClick={UpdateFppter}>Update</Button>
                            </Form>


                            {/* footer */}
                            <AdminFooter />
                        </Container>
                    </Container>
                </Col>
            </Container>

        </>
    )
}

export default AdminManageFooter;



