import {
   Container,
   Button,
   Row,
   Col,
   FormControl,
} from 'react-bootstrap'

import {
   handleUpdateData,
   handleSwitchEdit,
} from '../logic/modaleditalumnoLogic.js' 

import { DecodeToken } from '../logic/tokenhandler.js'

import DatosTutor from '../forms/DatosTutorForm'

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
   context,
   selectedAlumnoForEdit,
   setDataAlumno,
   fechaIngreso,
   fechaEgreso,
}) => { 
   return ( 
      <>
         <DatosTutor
            dataAlumno={dataAlumno}
            switchEdit={switchEdit}
            modalEditRef={modalEditRef}
         />
         <Container
            fluid
         >
         <Row
            className='border border-success p-2 mt-2'
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
         </Row>
         </Container>
         <Row>
            <Col
               className='mt-2 d-flex justify-content-end' 
            >
               {DecodeToken(context).usuario.permissions.editarMatricula ?
                     switchEdit ?
                        <Button
                           variant='outline-success'
                           size='sm'
                           onClick={() => handleSwitchEdit(setSwitchEdit)}
                        >Editar</Button>
                        :
                        <Button
                           variant='outline-success'
                           size='sm'
                           onClick={() => {
                              handleUpdateData(modalEditRef,fechaNacimiento,dataAlumno,setSwitchEdit,updatedData,setShowModalUpdate,setUpdatedData,fechaIngreso,fechaEgreso)
                           }}
                        >Actualizar</Button>
                        :
                     null
               }
            </Col>
         </Row>
      </>
   )
}

export default TabDatosContacto
