import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';


export default function AdminDeletCity() {

    const [city, setCity] = useState([]);
    const Navigate = useNavigate('');
    const{id} = useParams();

    useEffect(() => {
        axios.delete(`http://localhost:2602/AddCity/${id}`)
            .then((res) => {
                setCity(res.data)
            });
            swal('City Deleted')
            Navigate('/admin-login/admin-manage-city')
    },[])

    return (
        <div></div>
    )
}
