import { useEffect } from 'react'
import {
   Container,
   Row
} from 'react-bootstrap'

import Header from '../Components/Header'
import Menu from '../Components/Menu'
import NuevoCicloLectivo from '../Components/NuevoCicloLectivo'
import WebFont from 'webfontloader'

import { colors } from '../Helpers/styleColors.js'

const NuevoCicloLectivoPage = () => {

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
            <NuevoCicloLectivo/>
         </Row>
      </Container>
   )
}

export default NuevoCicloLectivoPage
