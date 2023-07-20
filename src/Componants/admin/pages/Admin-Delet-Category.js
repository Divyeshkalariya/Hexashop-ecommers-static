import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';


export default function AdminDeletCategory() {

    // desctructuring of use effects and usestate
    const [category, setCategory] = useState([]);
    const Navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        // api delete data using axios.delete() method
        axios.delete(`http://localhost:2602/AddCategories/${id}`)
            .then((response) => {
                setCategory(response.data)
            });
        //  pass sweet alert messages
        swal('category Deleted')

        // redirect page
        Navigate("/admin-login/admin-manage-category");
    }, []);

    return (
        <div></div>
    )
}
