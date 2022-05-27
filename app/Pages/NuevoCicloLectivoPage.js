import { useEffect } from 'react'
import {
   Container,
   Row
} from 'react-bootstrap'

import Header from '../components/Header'
import Menu from '../components/Menu'
import NuevoCicloLectivo from '../components/NuevoCicloLectivo'
import WebFont from 'webfontloader'

import { colors } from '../helpers/styleColors.js'

const NuevoCicloLectivoPage = () => {

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
            <NuevoCicloLectivo/>
         </Row>
      </Container>
   )
}

export default NuevoCicloLectivoPage
