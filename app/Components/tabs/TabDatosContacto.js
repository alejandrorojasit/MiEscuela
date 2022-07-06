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

import {useSelector,useDispatch} from 'react-redux'

import {updateSwitchEdit} from '../../redux/actions/modalEditAlumno.action'

import {
   checkIsSealed
} from '../logic/matriculaLogic'

const TabDatosContacto = ({
   modalEditRef,
}) => { 

   const dispatch = useDispatch()

   const {
      dataAlumno
   } = useSelector(state => state.matriculaReducer)

   const {
      switchEdit,
      fechaIngreso,
      fechaEgreso,
      fechaNacimiento,
      updatedData,
   } = useSelector(state => state.modalEditAlumnoReducer)

   const sealedDatabase = useSelector(state => state.sealedDatabaseReducer)

   const userState = useSelector(state => state.authReducer)

   return ( 
      <>
         <DatosTutor
            dataAlumno={dataAlumno}
            switchEdit={switchEdit}
            modalEditRef={modalEditRef}
         />
         <Container>
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
         <Container
            className='border border-success p-2 mt-3'
         >
         <Row>
            <Col
               className='d-flex justify-content-end' 
            >
               {
                  DecodeToken(userState).usuario.permissions.editarMatricula &&  !checkIsSealed(sealedDatabase,dataAlumno.nivel)?
                     switchEdit ?
                        <Button
                           variant='outline-success'
                           size='sm'
                           onClick={() => dispatch(updateSwitchEdit())}
                        >Editar</Button>
                        :
                        <Button
                           variant='outline-success'
                           size='sm'
                           onClick={() => {
                              handleUpdateData(
                                 modalEditRef,
                                 fechaNacimiento,
                                 dataAlumno,
                                 fechaIngreso,
                                 fechaEgreso,
                                 dispatch
                              )
                           }}
                        >Actualizar</Button>
                        :
                     null
               }
            </Col>
         </Row>
         </Container>
      </>
   )
}

export default TabDatosContacto
