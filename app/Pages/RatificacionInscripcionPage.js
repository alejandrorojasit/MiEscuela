import {
   Container,
   Row
} from 'react-bootstrap'
import Menu from '../components/Menu'
import Ratificacion from '../components/Ratificacion'

const RatificacionInscripcionPage = () => {
   return (
      <Container 
         style={{fontFamily:'Droid Sans'}}
      >
         <Row>
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







