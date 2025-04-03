import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'

const HomePage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [loggedUser, setLoggedUser] = useState(null)

    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(token!==undefined && token!==null){
            console.log("Token found")
            console.log(token)
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
        else {
            console.log("Token not found");
            setLoggedUser(null);
        }
    },[navigate, location.key])

    return (
        <>
        <div className='middle'>
        {loggedUser?<h1>{loggedUser}</h1>:<h1>COMING SOON</h1>}
        </div>
        </>
    )
}

export default HomePage