import Header from '../Components/header.jsx'
import Footer from '../Components/footer.jsx'
import {
   Container,
   Col,
   Row
} from 'react-bootstrap'
import Menu from '../Components/menu.jsx'
import Ratificacion from '../Components/Ratificacion.jsx'

const RatificacionInscripcionPage = () => {
   return (
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
            <Ratificacion/>
         </Row>
      </Container>

   )
}

export default RatificacionInscripcionPage







