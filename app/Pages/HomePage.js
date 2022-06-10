import { useEffect } from 'react'
import {
   Container,
   Row,
} from 'react-bootstrap'

import Menu from '../components/Menu'
import WebFont from 'webfontloader'
import ChartsPannelHomePage from '../components/pannels/ChartsPannelHomePage'

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
         fluid
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
