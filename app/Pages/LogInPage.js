import {useEffect} from 'react'
import {
   Container,
   Row
} from 'react-bootstrap'

import ModalAlertSpinner from '../components/modals/ModalAlertSpinner'
import Login from '../components/Login'
import WebFont from 'webfontloader'

const LogInPage = () => {

   useEffect(()=>{
      WebFont.load({
         google:{
            families:['Droid Sans']
         }
      })
   },[])

   return (
      <Container 
         style={{fontFamily:'Droid Sans'}}
      >
         <ModalAlertSpinner
            message={`Conectando al servidor de login.Por favor espere`}
         />
         <Row>
         </Row>
         <Row>
            <Login
            />
         </Row>
         <Row>
         </Row>
      </Container>
   )
}

export default LogInPage
