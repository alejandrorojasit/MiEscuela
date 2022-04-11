import { useEffect } from 'react'
import {
   Container,
   Row
} from 'react-bootstrap'

import Menu from '../Components/Menu'
import WebFont from 'webfontloader'
import NuevoIngresoForm from '../Components/NuevoIngresoForm'

const NuevoIngresoPage = () => {
   
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
            <NuevoIngresoForm/>
         </Row>
      </Container>
   )
}

export default NuevoIngresoPage
