import {
   Button,
   Row,
   Col,
} from 'react-bootstrap'

const TabObservaciones = ({
   dataAlumno,
   setShowModalEditObservaciones,
   showModalEditObservaciones,
}) => { 
   console.log(dataAlumno.observaciones)
      return ( 
         <>
                  <Row>
                     <Col
                        className='mt-2 d-flex justify-content-center'
                     >
                        <Button
                           variant='outline-primary'
                           size='sm'
                           onClick={() => setShowModalEditObservaciones(true)}
                        >Añadir Observacion</Button> 
                     </Col> 
                  </Row>
                  <Row>
                     <Col
                        className='mt-2 border'
                     >
                     </Col>

                  </Row>
         </>
                )
}

export default TabObservaciones
