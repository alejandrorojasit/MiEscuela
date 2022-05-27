import Header from '../components/Header'
import Footer from '../components/Footer'
import {
   Container, 
   Row
} from 'react-bootstrap'

const NotFoundPage = () => {
   return (
      <Container 
         fluid
      >
         <Row>
         </Row>
         <Row>
            <h1>Not Found Page</h1>
         </Row>
         <Row>
            <Footer/>
         </Row>
      </Container>
   )
}

export default NotFoundPage
