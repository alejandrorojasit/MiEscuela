import {useState,useEffect} from 'react'
import {
   Container,
   Row
} from 'react-bootstrap'

import ModalAlertSpinner from '../Components/ModalAlertSpinner'
import Login from '../Components/Login'
import WebFont from 'webfontloader'

const LogInPage = () => {

   useEffect(()=>{
      WebFont.load({
         google:{
            families:['Lato']
         }
      })
   },[])

   const [showModalAlertSpinner,setShowModalAlertSpinner] = useState(false)

   return (
      <Container 
         style={{fontFamily:'Lato'}}
      >
         <ModalAlertSpinner
            message={`Conectando al servidor de login.Por favor espere`}
            stateShow={showModalAlertSpinner}
         />
         <Row>
         </Row>
         <Row>
            <Login
               setShowModalAlertSpinner={setShowModalAlertSpinner}
            />
         </Row>
         <Row>
         </Row>
      </Container>
   )
}

export default LogInPage
