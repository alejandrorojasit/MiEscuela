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
            families:['Lato']
         }
      })
   },[])

   return (
      <Container 
         style={{fontFamily:'Lato'}}
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
