import {
   Button,
   Row,
   Col,
} from 'react-bootstrap'

const TabObservaciones = ({
   dataAlumno
}) => { 

      return ( 
         <>
                  <Row>
                     <Col
                        className='mt-2 d-flex justify-content-center'
                     >
                        <Button
                           variant='outline-primary'
                           size='sm'
                        >Añadir Observacion</Button> 
                     </Col> 
                  </Row>
                  <Row>
                     <Col
                        className='mt-2 border'
                     >
                        {dataAlumno.observaciones?.map((dataMap) => 
                        <p
                           key={dataMap === "" ? Math.random() : dataMap}
                        >{dataMap}</p>
                        )} 
                     </Col>

                  </Row>
         </>
                )
}

export default TabObservaciones
