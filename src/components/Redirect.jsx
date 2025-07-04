import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { CircularProgress } from '@mui/material'

const Redirect = () => {
    const navigate = useNavigate()

    return (
        <div style={{ backgroundColor: '#FFDF92', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress size={60} sx={{color:'#9c27b0'}}></CircularProgress>
        </div>
    )
}

export default Redirect