import { useEffect } from 'react'
import {
   Container,
   Row
} from 'react-bootstrap'

import Header from '../Components/Header'
import Menu from '../Components/Menu'
import WebFont from 'webfontloader'

import { colors } from '../Helpers/styleColors.js'

const HomePage = () => {

   useEffect(()=>{
      WebFont.load({
         google:{
            families:['Lato']
         }
      })
   },[])

   return (
      <Container 
      >
         <Row>
         </Row>
         <Row>
            <Menu/>
         </Row>
         <Row> 
         </Row>
      </Container>
   )
}

export default HomePage
