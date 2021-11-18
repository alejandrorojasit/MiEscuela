import {
   Button,
   Row,
   Col,
   FormControl,
} from 'react-bootstrap'

import {
   handleUpdateData,
   handleSwitchEdit,
} from './Logic/modaleditalumnoLogic.js' 

const TabDatosContacto = ({
   dataAlumno,
   switchEdit,
   setSwitchEdit,
   modalEditRef,
   fechaNacimiento,
   setFechaNacimiento,
   updatedData,
   setShowModalUpdate,
   setUpdatedData,
}) => { 
   return ( 
      <>
         <Row
            className='mt-2'
         >
            <Col>
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
            className='mt-2'
         >
            <Col>
               <h6>Email Alumno:</h6>
               <FormControl
                  defaultValue={dataAlumno.email}
                  aria-label='email'
                  readOnly={switchEdit}
                  ref={(element) => modalEditRef.current[11] = element}
               />  
            </Col>
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
         <Row>
            <Col
               className='mt-2 d-flex justify-content-end' 
            >
               {switchEdit ?
                  <Button
                     variant='outline-primary'
                     size='sm'
                     onClick={() => handleSwitchEdit(setSwitchEdit)}
                  >Editar</Button>
                  :
                  <Button
                     variant='outline-primary'
                     size='sm'
                     onClick={() => handleUpdateData(modalEditRef,fechaNacimiento,dataAlumno,setSwitchEdit,updatedData,setShowModalUpdate,setUpdatedData)}
                  >Actualizar</Button>
               }
            </Col>
         </Row>
      </>
   )
}

export default TabDatosContacto
