import Header from '../Components/header.jsx'
import Footer from '../Components/footer.jsx'
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
            <Header/>
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
