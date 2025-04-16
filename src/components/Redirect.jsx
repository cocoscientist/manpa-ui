import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CircularProgress } from '@mui/material'

const Redirect = () => {
    const navigate = useNavigate()

    useEffect(()=>{
        const query = window.location.search
        axios.get(`https://www.manpa.co.in/auth/google/callback${query}`)
            .then(res=>{
                console.log(res)
                localStorage.setItem("token",res.data.access_token)
                navigate('/')
            })
            .catch(err=>console.log(err))
    },[navigate])

    return (
        <div style={{ backgroundColor: '#FFDF92', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress size={60} sx={{color:'#9c27b0'}}></CircularProgress>
        </div>
    )
}

export default Redirect