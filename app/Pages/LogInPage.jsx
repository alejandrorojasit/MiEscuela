import Header from '../Components/header.jsx'
import Footer from '../Components/footer.jsx'

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
            <Header/>
         </Row>
         <Row>
            <Login/>
         </Row>
         <Row>
            <Footer/>
         </Row>
      </Container>
   )
}

export default LogInPage
