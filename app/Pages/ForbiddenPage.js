import Header from '../Components/Header'
import Menu from '../Components/Menu'
import Footer from '../Components/Footer'

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
