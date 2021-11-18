import {useState }from 'react'

import useAuth from '../Context/Store/useAuth.jsx'

import LoginForm from './LoginForm.jsx'

const LogIn = () => { 

   const context = useAuth()
   const [usuario,setUsuario] = useState('')
   const [password,setPassword] = useState('')

   return ( 
      <LoginForm
         context={context}
         usuario={usuario}
         password={password}
         setUsuario={setUsuario}
         setPassword={setPassword}
      />

   )
}

export default LogIn
