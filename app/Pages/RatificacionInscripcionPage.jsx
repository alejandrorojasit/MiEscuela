import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'
import {
   Container,
   Col,
   Row
} from 'react-bootstrap'
import Menu from '../Components/Menu.jsx'
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







