import {
   Container,
   Row
} from 'react-bootstrap'

import Header from '../components/Header'
import Menu from '../components/Menu'
import Matricula from '../components/Matricula'

const MatriculaPage = () => {
   
   return (
      <Container 
         style={{fontFamily:'Droid Sans'}}
         fluid
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
