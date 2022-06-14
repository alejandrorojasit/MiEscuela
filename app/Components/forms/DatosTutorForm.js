import {
   Row,
   Col,
   FormControl,
   Container,

} from 'react-bootstrap'

const DatosTutor = ({
   dataAlumno,
   switchEdit,
   modalEditRef,
}) => { 

   return ( 
      <>
<Container
         className='border border-success p-3 mt-4'
      >
      <Row
         className='mt-2'
      >
         <Col
               >
            <h6>Apellido Tutor:</h6>
            <FormControl
               defaultValue={dataAlumno.apellidoTutor}
               aria-label='apellidoTutor'
               readOnly={switchEdit}
               ref={(element) => modalEditRef.current[25] = element}
            /> 
         </Col>
         <Col>
            <h6>Nombre Tutor:</h6>
            <FormControl
               defaultValue={dataAlumno.nombreTutor}
               aria-label='nombreTutor'
               readOnly={switchEdit}
               ref={(element) => modalEditRef.current[26] = element}
            /> 
         </Col>
         <Col>
            <h6>Relacion:</h6>
            <FormControl
               defaultValue={dataAlumno.relacionTutor}
               aria-label='relacionTutor'
               readOnly={switchEdit}
               ref={(element) => modalEditRef.current[29] = element}
            /> 
         </Col>
         <Col>
            <h6>DNI Tutor:</h6>
            <FormControl
               defaultValue={dataAlumno.dniTutor}
               aria-label='dniTutor'
               readOnly={switchEdit}
               ref={(element) => modalEditRef.current[27] = element}
            /> 
         </Col>
      </Row>
      <Row
         className='mt-2'
      >
         <Col>
            <h6>Tel Fijo:</h6>
            <FormControl
               defaultValue={dataAlumno.telFijo}
               aria-label='telFijo'
               readOnly={switchEdit}
               ref={(element) => modalEditRef.current[19] = element}
            /> 
         </Col>
         <Col>
            <h6>Tel Celular:</h6>
            <FormControl
               defaultValue={dataAlumno.telCelular}
               aria-label='telCelular'
               readOnly={switchEdit}
               ref={(element) => modalEditRef.current[20] = element}
            /> 
         </Col>
      </Row>
      <Row
         className='mt-2'
      >
         <Col>
            <h6>Barrio:</h6>
            <FormControl
               defaultValue={dataAlumno.barrio}
               aria-label='barrio'
               readOnly={switchEdit}
               ref={(element) => modalEditRef.current[16] = element}
            /> 
         </Col>
         <Col>
            <h6>Calle:</h6>
            <FormControl
               defaultValue={dataAlumno.calle}
               aria-label='calle'
               readOnly={switchEdit}
               ref={(element) => modalEditRef.current[14] = element}
            /> 
         </Col>
         <Col>
            <h6>NRO:</h6>
            <FormControl
               defaultValue={dataAlumno.nro}
               aria-label='nro'
               readOnly={switchEdit}
               ref={(element) => modalEditRef.current[15] = element}
            /> 
         </Col>
         <Col>
            <h6>Localidad:</h6>
            <FormControl
               defaultValue={dataAlumno.localidad}
               aria-label='localidad'
               readOnly={switchEdit}
               ref={(element) => modalEditRef.current[17] = element}
            /> 
         </Col>
         <Col>
            <h6>Provincia:</h6>
            <FormControl
               defaultValue={dataAlumno.provincia}
               aria-label='provincia'
               readOnly={switchEdit}
               ref={(element) => modalEditRef.current[18] = element}
            /> 
         </Col>
      </Row>
      <Row
         className='mt-2 mb-2'
      >
         <Col>
            <h6>Email Tutor:</h6>
            <FormControl
               defaultValue={dataAlumno.emailTutor}
               aria-label='emailTutor'
               readOnly={switchEdit}
               ref={(element) => modalEditRef.current[30] = element}
            />  
         </Col>
      </Row>
   </Container>
      <Container
         className='border border-success p-3 mt-2'
      >
      <Row
         className='mt-2'
      >
         <Col>
            <h6>Apellido Tutor:</h6>
            <FormControl
               defaultValue={dataAlumno.apellidoTutor2}
               aria-label='apellidoTutor2'
               readOnly={switchEdit}
               ref={(element) => modalEditRef.current[48] = element}
            /> 
         </Col>
         <Col>
            <h6>Nombre Tutor:</h6>
            <FormControl
               defaultValue={dataAlumno.nombreTutor2}
               aria-label='nombreTutor2'
               readOnly={switchEdit}
               ref={(element) => modalEditRef.current[49] = element}
            /> 
         </Col>
         <Col>
            <h6>Relacion:</h6>
            <FormControl
               defaultValue={dataAlumno.relacionTutor2}
               aria-label='relacionTutor2'
               readOnly={switchEdit}
               ref={(element) => modalEditRef.current[52] = element}
            /> 
         </Col>
         <Col>
            <h6>DNI Tutor:</h6>
            <FormControl
               defaultValue={dataAlumno.dniTutor2}
               aria-label='dniTutor2'
               readOnly={switchEdit}
               ref={(element) => modalEditRef.current[50] = element}
            /> 
         </Col>
      </Row>
      <Row
         className='mt-2'
      >
         <Col>
            <h6>Tel Fijo:</h6>
            <FormControl
               defaultValue={dataAlumno.telFijo2}
               aria-label='telFijo2'
               readOnly={switchEdit}
               ref={(element) => modalEditRef.current[58] = element}
            /> 
         </Col>
         <Col>
            <h6>Tel Celular:</h6>
            <FormControl
               defaultValue={dataAlumno.telCelular2}
               aria-label='telCelular2'
               readOnly={switchEdit}
               ref={(element) => modalEditRef.current[59] = element}
            /> 
         </Col>
      </Row>
      <Row
         className='mt-2'
      >
         <Col>
            <h6>Barrio:</h6>
            <FormControl
               defaultValue={dataAlumno.barrio2}
               aria-label='barrio2'
               readOnly={switchEdit}
               ref={(element) => modalEditRef.current[55] = element}
            /> 
         </Col>
         <Col>
            <h6>Calle:</h6>
            <FormControl
               defaultValue={dataAlumno.calle2}
               aria-label='calle2'
               readOnly={switchEdit}
               ref={(element) => modalEditRef.current[53] = element}
            /> 
         </Col>
         <Col>
            <h6>NRO:</h6>
            <FormControl
               defaultValue={dataAlumno.nro2}
               aria-label='nro2'
               readOnly={switchEdit}
               ref={(element) => modalEditRef.current[54] = element}
            /> 
         </Col>
         <Col>
            <h6>Localidad:</h6>
            <FormControl
               defaultValue={dataAlumno.localidad2}
               aria-label='localidad2'
               readOnly={switchEdit}
               ref={(element) => modalEditRef.current[56] = element}
            /> 
         </Col>
         <Col>
            <h6>Provincia:</h6>
            <FormControl
               defaultValue={dataAlumno.provincia2}
               aria-label='provincia2'
               readOnly={switchEdit}
               ref={(element) => modalEditRef.current[57] = element}
            /> 
         </Col>
      </Row>
      <Row
         className='mt-2 mb-2'
      >
         <Col>
            <h6>Email Tutor:</h6>
            <FormControl
               defaultValue={dataAlumno.emailTutor2}
               aria-label='emailTutor2'
               readOnly={switchEdit}
               ref={(element) => modalEditRef.current[60] = element}
            />  
         </Col>
      </Row>
   </Container>
      </>
   )
}

export default DatosTutor
