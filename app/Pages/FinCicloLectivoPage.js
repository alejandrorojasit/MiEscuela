import { useEffect } from 'react'
import {
   Container,
   Row,
} from 'react-bootstrap'

import Menu from '../components/Menu'
import WebFont from 'webfontloader'
import FinCicloLectivo from '../components/FinCiloLectivo'

const FinCicloLectivoPage = () => {

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
            <FinCicloLectivo/>
         </Row>
      </Container>
   )
}

export default FinCicloLectivoPage
