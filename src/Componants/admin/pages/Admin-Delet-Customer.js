import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';


export default function AdminDeletCustomer() {

    // desctructuring of use effects and usestate
    const [customer, setCustomer] = useState([]);
    const Navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        // api delete data using axios.delete() method
        axios.delete(`http://localhost:2602/Accountdata/${id}`)
            .then((response) => {
                setCustomer(response.data)
            });

        //  pass sweet alert messages
        swal('Customer Deleted')

        // redirect page
        Navigate("/admin-login/admin-manage-customer");
    }, []);

    return (
        <div></div>
    )
}
