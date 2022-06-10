import { useEffect } from 'react'
import {
   Container,
   Row
} from 'react-bootstrap'

import Menu from '../components/Menu'
import WebFont from 'webfontloader'
import NuevaDenominacionForm from '../components/forms/NuevaDenominacionForm'

const NuevaDenominacionPage = () => {
   
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
            <Menu/>
         </Row>
         <Row>
            <NuevaDenominacionForm/>
         </Row>
      </Container>
   )
}

export default NuevaDenominacionPage
