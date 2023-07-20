import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';


export default function AdminDeletState() {

    // desctructuring of use effects and usestate
    const [state, setState] = useState([]);
    const Navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        // api delete data using axios.delete() method
        axios.delete(`http://localhost:2602/AddState/${id}`)
            .then((response) => {
                setState(response.data)
            });

        //  pass sweet alert messages
        swal('State Deleted')

        // redirect page
        Navigate("/admin-login/admin-manage-state");
    }, []);

    return (
        <div></div>
    )
}
