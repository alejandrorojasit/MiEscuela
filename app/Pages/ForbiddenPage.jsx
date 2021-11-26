import Header from '../Components/Header.jsx'
import Menu from '../Components/Menu.jsx'
import Footer from '../Components/Footer.jsx'

import {
   Container,
   Col,
   Row
} from 'react-bootstrap'

const ForbiddenPage = () => {
   return(
      <Container 
         fluid
      >
         <Row>
               <Header/>
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
