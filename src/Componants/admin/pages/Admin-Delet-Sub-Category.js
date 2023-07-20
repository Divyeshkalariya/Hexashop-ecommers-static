import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';


export default function AdminDeletSubCategory() {

    // desctructuring of use effects and usestate
    const [subcategory, setSubCategory] = useState([]);
    const Navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        // api delete data using axios.delete() method
        axios.delete(`http://localhost:2602/AddSubcategories/${id}`)
            .then((response) => {
                setSubCategory(response.data)
            });

        //  pass sweet alert messages
        swal('Subcategory Deleted')

        // redirect page
        Navigate("/admin-login/admin-manage-subcategory");
    }, []);

    return (
        <div></div>
    )
}
