import { useEffect } from 'react'
import {
   Container,
   Row
} from 'react-bootstrap'

import Menu from '../Components/Menu'
import WebFont from 'webfontloader'
import NuevaDenominacionForm from '../Components/NuevaDenominacionForm'

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
