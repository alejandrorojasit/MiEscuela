import {
   Container,
   Row
} from 'react-bootstrap'

import Header from '../Components/Header'
import Menu from '../Components/Menu'
import Matricula from '../Components/Matricula'

const MatriculaPage = () => {
   
   return (
      <Container 
      >
         <Row>
         </Row>
         <Row>
            <Menu/>
         </Row>
         <Row>
            <Matricula/>            
         </Row>
      </Container>
   )

}

export default MatriculaPage
