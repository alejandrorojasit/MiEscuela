import {useEffect} from 'react'
import {
   Container,
   Row
} from 'react-bootstrap'

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
         fluid
      >
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
