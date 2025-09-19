import React, { useState } from 'react'
import {getAuth , signInWithPopup , GoogleAuthProvider, signInWithEmailAndPassword} from 'firebase/auth'
import {app} from '../Firebase'
import { useNavigate } from 'react-router-dom'
import { GithubAuthProvider } from 'firebase/auth/web-extension'

const login = () => {
  const [email,setEmail] = useState('')
     const [password,setPassword] = useState('')
     const navigate = useNavigate();
     const submitHandler = (e)=>{
         e.preventDefault();
         const auth = getAuth(app)
         signInWithEmailAndPassword(auth,email,password)
         //navigate('/login')
         .then(userData=>{
             console.log(userData.user)
         })
         .catch(err=>{
             console.log(err)
         })
         console.log(email,password)
     }

     const loginwithGoogle = ()=>{
        const auth = getAuth(app)
        const provider = new GoogleAuthProvider
        signInWithPopup(auth,provider)
        .then(result=>{
            console.log(result)
        })
        .catch(err=>{
            console.log(err)
        })
     }

     const loginwithGithub = ()=>{
        const auth = getAuth(app)
        const provider = new GithubAuthProvider
        signInWithPopup(auth,provider)
        .then(result=>{
            console.log(result)
        })
        .catch(err=>{
            console.log(err)
        })
     }

   return (
     <div>
     <h1>Login</h1>
       <form onSubmit={submitHandler}>
         <input onChange={(e)=>{setEmail(e.target.value)}} type='text' placeholder='enter your name'/>
         <input onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='enter your password'/>
         <button>login</button>
         <br/>
         <br/>

         <button type= 'submit' onClick={loginwithGoogle}>Login with Google</button>
         <button type= 'submit' onClick={loginwithGithub}>Login with Github</button>
     
         
       </form>
    </div>

       
   )
}

export default login
