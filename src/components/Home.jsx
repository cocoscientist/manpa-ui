import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const HomePage = () => {
    const navigate = useNavigate()
    const [loggedUser, setLoggedUser] = useState(null)
    const [redirect, setRedirect] = useState(null)
    
    useEffect(()=>{
        if(loggedUser==null){
            axios.get('http://localhost:5000/auth/google/authorize')
            .then(res=>setRedirect(res.data.authorization_url))
        }
    },[loggedUser])

    useEffect(()=>{
        const query = window.location.search
        axios.get(`http://localhost:5000/auth/google/callback${query}`)
            .then(res=>{
                console.log(res)
                setLoggedUser(res.data)
            })
            .catch(err=>console.log(err))
    },[navigate])

    return (
        <>
        {loggedUser?<h1>LOGGED IN</h1>:<div className='middle'><h1>COMING SOON</h1><a href={redirect}>LOGIN WITH GOOGLE</a></div>}
        </>
    )
}

export default HomePage