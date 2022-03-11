import {useState }from 'react'

import useAuth from '../Context/Store/useAuth'

import LoginForm from './LoginForm'

const Login = ({setShowModalAlertSpinner}) => { 

   const context = useAuth()
   const [usuario,setUsuario] = useState('')
   const [password,setPassword] = useState('')

   return ( 
      <>
         <LoginForm
            context={context}
            usuario={usuario}
            password={password}
            setUsuario={setUsuario}
            setPassword={setPassword}
            setShowModalAlertSpinner={setShowModalAlertSpinner}
         />
      </>

   )
}

export default Login
