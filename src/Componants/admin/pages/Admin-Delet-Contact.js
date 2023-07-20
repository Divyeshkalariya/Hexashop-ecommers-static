import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';


export default function AdminDeletContact() {

    // desctructuring of use effects and usestate
    const [contact, setContact] = useState([]);
    const Navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        // api delete data using axios.delete() method
        axios.delete(`http://localhost:2602/Contactusdata/${id}`)
            .then((response) => {
                setContact(response.data)
            });

        //  pass sweet alert messages
        swal('Contact Deleted')

        // redirect page
        Navigate("/admin-login/admin-manage-contact");
    }, []);

    return (
        <div></div>
    )
}
