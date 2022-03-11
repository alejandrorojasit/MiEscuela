import Header from '../Components/Header'
import Footer from '../Components/Footer'
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
