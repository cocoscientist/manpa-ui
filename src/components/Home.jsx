import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'

const HomePage = () => {
    const [queryParameters] = useSearchParams()
    const [loggedUser, setLoggedUser] = useState(null)
    const [redirect, setRedirect] = useState(null)
    
    useEffect(()=>{
        if(loggedUser==null){
            axios.get('http://localhost:5000/auth/google/authorize')
            .then(res=>setRedirect(res.data.authorization_url))
        }
    },[loggedUser])

    useEffect(()=>{
        let state = queryParameters.get("state")
        let code = queryParameters.get("code")
        let scope = queryParameters.get("scope")
        if(code){
            axios.get('http://localhost:5000/auth/google/callback',{
                params:{state:state,code:code,scope:scope}
            })
            .then(res=>{
                console.log(res)
                setLoggedUser(res.data)
            })
        }
    },[queryParameters])

    return (
        <>
        {loggedUser?<h1>LOGGED IN</h1>:<div className='middle'><h1>COMING SOON</h1><a href={redirect}>LOGIN WITH GOOGLE</a></div>}
        </>
    )
}

export default HomePage