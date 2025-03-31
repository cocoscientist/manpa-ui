import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const HomePage = () => {
    const navigate = useNavigate()
    const [loggedUser, setLoggedUser] = useState(null)
    const [redirect, setRedirect] = useState(null)
    
    useEffect(()=>{
        if(loggedUser==null){
            axios.get('https://www.manpa.co.in/auth/google/authorize')
            .then(res=>setRedirect(res.data.authorization_url))
        }
    },[loggedUser])

    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(token!==undefined && token!==null){
            axios.get('https://www.manpa.co.in/authenticated-route',{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res=>{
                console.log(res.data)
                setLoggedUser(res.data.message)
            })
        }
    },[navigate])

    return (
        <>
        <div className='middle'>
        {loggedUser?<h1>{loggedUser}</h1>:<><h1>COMING SOON</h1><a href={redirect}>LOGIN WITH GOOGLE</a></>}
        </div>
        </>
    )
}

export default HomePage