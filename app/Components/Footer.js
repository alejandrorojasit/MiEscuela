import {
   Container,
   Row,
   Col
} from 'react-bootstrap'

const style = {
   footer: {
      backgroundColor: '#007f43',
      position: 'fixed',
      bottom: 0,
   }
}
const Footer = () => {
   return (
      <Container 
         style={style.footer} 
         fluid
      >
         <Row>
            <Col
            >
               <h5>E.P.A. Nº 9 "Dr. Horacio de la Mota"</h5>
            </Col>
            <Col>
            </Col>
            <Col 
               className='d-inline-flex'
            >
            </Col>
         </Row>
      </Container>
   )
}

export default Footer
