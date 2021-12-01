import {
   Container,
   Row
} from 'react-bootstrap'

import Header from '../Components/Header.jsx'
import Menu from '../Components/Menu.jsx'

import { colors } from '../Helpers/styleColors.js'



const HomePage = () => {
   return (
      <Container 
         fluid
         style={{color:colors.darken,background:colors.background}} 
      >
         <Row>
            <Header/>
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
