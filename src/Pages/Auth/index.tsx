import React, {Component} from 'react'
import { useParams } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';
import Api from '../../services/api'

const Auth =() =>{
    const { param } = useParams();
    const { login } = useAuth()

    Api.get(`user/auth-user/${param}`)
        .then(()=>{
            login()
        })
        .catch()
    

return(
    <button onClick={()=> console.log(param)}>Click aeeeeee</button>
)

}

export default Auth