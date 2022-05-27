import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

import {
   Container,
   Col,
   Row
} from 'react-bootstrap'

const ForbiddenPage = () => {
   return(
      <Container 
      >
         <Row>
         </Row>
         <Row>
            <Menu/>
         </Row>
         <Row>
            <h1>
               Ud no tiene autorizacion para esta pagina
            </h1>
         </Row>
         <Row>
            <Footer/>
         </Row>
      </Container>
         
   )
}

export default ForbiddenPage
