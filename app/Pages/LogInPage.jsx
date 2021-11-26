import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'

import {
   Container,
   Row
} from 'react-bootstrap'

import Login from '../Components/Login.jsx'

const LogInPage = () => {
   return (
      <Container 
         fluid
      >
         <Row>
         </Row>
         <Row>
            <Login/>
         </Row>
         <Row>
         </Row>
      </Container>
   )
}

export default LogInPage
