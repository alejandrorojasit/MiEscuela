import Header from '../Components/header.jsx'
import Menu from '../Components/menu.jsx'
import Footer from '../Components/footer.jsx'

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
