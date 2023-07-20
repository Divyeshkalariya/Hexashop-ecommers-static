import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';


export default function AdminDeletSlider() {

    const [slider, setSlider] = useState([]);
    const Navigate = useNavigate('');
    const{id} = useParams();

    useEffect(() => {
        axios.delete(`http://localhost:2602/HomeSlider/${id}`)
            .then((res) => {
                setSlider(res.data)
            });
            swal('Slide Deleted')
            Navigate('/admin-login/admin-manage-slider')
    },[])

    return (
        <div></div>
    )
}
