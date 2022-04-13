import { useEffect } from 'react'
import {
   Container,
   Row,
   Button
} from 'react-bootstrap'

import Header from '../Components/Header'
import Menu from '../Components/Menu'
import WebFont from 'webfontloader'
import ChartsPannelHomePage from '../Components/ChartsPannelHomePage'

import { colors } from '../Helpers/styleColors.js'

const HomePage = () => {

   useEffect(()=>{
      WebFont.load({
         google:{
            families:['Droid Sans']
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
            <ChartsPannelHomePage/>
         </Row>
      </Container>
   )
}

export default HomePage
