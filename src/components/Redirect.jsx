import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Redirect = () => {
    const navigate = useNavigate()

    useEffect(()=>{
        const query = window.location.search
        axios.get(`http://localhost:5000/auth/google/callback${query}`)
            .then(res=>{
                console.log(res)
                localStorage.setItem("token",res.data.access_token)
                navigate('/home')
            })
            .catch(err=>console.log(err))
    },[navigate])

    return (
        <>
        <div className='middle'><h1>REDIRECTING</h1></div>
        </>
    )
}

export default Redirect