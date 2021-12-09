import {useState} from 'react'
import {
   Modal,
   Col,
   Row,
   Container,
   InputGroup,
   FormControl,
   Button,
   Form
} from 'react-bootstrap'

import { DecodeToken } from './Logic/tokenhandler.js'

import {
   handleClose,
   handleShow,
   handleClickDelete,
} from './Logic/modalEditUserLogic' 

import {userDeleteUrl} from '../Helpers/Urls'

import Permissions from './Permissions.jsx'

const ModalEditUser = ({
   userEditModal,
   setUserEditModal,
   setUsuariosModal,
   selectedUser,
   context,
   setSwitchCalificacionesLeer,
   switchCalificacionesLeer,
   setSwitchCalificacionesEditar,
   switchCalificacionesEditar,
   switchAsistencia,
   setSwitchAsistencia,
   reRender,
   setReRender,
   addUserRef,
   isNewUser,
}) => { 

   const [dataUser,setDataUser] = useState({})
   const [switchUsuario,setSwitchUsuario] = useState(true)
   const [switchPassword,setSwitchPassword] = useState(true)
   const [switchRole,setSwitchRole] = useState(true)

   const handleClickAccept = () => {
   }
   return ( 
      <Modal 
         show={userEditModal} 
         onHide={()=> handleClose(setSwitchRole,setSwitchPassword,setSwitchUsuario,setUserEditModal,setUsuariosModal)} 
         onShow={()=> {
            handleShow(setDataUser,context,selectedUser)
            addUserRef.current.leerMatricula = true
         }}
         style={{display:'flex'}}
         size='lg'
      >
         <Modal.Header 
            closeButton
            className='d-flex justify-content-center'
         >
            <h3>Editar Usuario</h3>
         </Modal.Header>

         <Modal.Body>
            <Container>
               <Row>
                  <Col>
                     <Row 
                        className="mb-3 mt-2"
                     > 
                        <h4>Usuario:</h4>     
                     </Row>
                     <Row 
                        className="mb-3 mt-2"
                     >
                        <h4>Password:</h4> 
                     </Row>
                     <Row 
                        className="mb-3 mt-2"
                     >
                        <h4>Role:</h4> 
                     </Row>
                  </Col>
                  <Col>
                     <Row> 
                        <InputGroup 
                           className="mb-3"
                        >
                           <FormControl
                              placeholder={dataUser?.usuario}
                              aria-label="usuario"
                              aria-describedby="basic-addon2"
                              readOnly={switchUsuario}
                           />
                           <Button 
                              variant="outline-secondary" 
                              id="button-addon2" 
                              onClick={()=> setSwitchUsuario(false)}
                           >
                              Editar
                           </Button>
                        </InputGroup> 
                     </Row>
                     <Row>
                        <InputGroup 
                           className="mb-3">
                           <FormControl
                              placeholder={dataUser?.password}
                              aria-label="password"
                              aria-describedby="basic-addon2"
                              readOnly={switchPassword}
                           />
                           <Button 
                              variant="outline-secondary" 
                              id="button-addon2" 
                              onClick={()=> setSwitchPassword(false)}
                           >
                              Editar
                           </Button>
                        </InputGroup>
                     </Row>
                     <Row>
                        <InputGroup 
                           className="mb-3"
                        >
                           <Form.Select
                              placeholder={dataUser?.role}
                              aria-label="role"
                              disabled={switchRole}
                           >
                              <option 
                                 value={dataUser.role}
                              >
                                 {dataUser.role}
                              </option>
                              {context.stateHardCodeData.hardCodeData.role.map((dataMap)=> 
                                 dataMap !== dataUser.role ? 
                                    <option 
                                       key={dataMap} 
                                       value={dataMap}
                                    >
                                       {dataMap}
                                    </option>
                                    :
                                 null
                              )}
                           </Form.Select>
                           <Button 
                              variant="outline-secondary" 
                              id="button-addon2" 
                              onClick={()=> setSwitchRole(false)}
                           >
                              Editar
                           </Button>
                        </InputGroup>
                     </Row>  
                  </Col>
               </Row>
               <Row>
                  <Col 
                     className='d-flex justify-content-center'
                  >
                     <Button 
                        variant='outline-success' 
                        size='sm'
                        onClick={()=> handleClickDelete(context,selectedUser,userDeleteUrl,setUserEditModal)}
                     >
                        Eliminar Usuario
                     </Button>
                  </Col>
               </Row>
               <Row 
                  className='mt-3'>
                  <Col 
                     className='d-flex justify-content-center'
                  >
                     <Button 
                        variant='outline-success' 
                        size='sm'
                        onClick={()=> handleClickAccept()}
                     >
                        Aceptar cambios
                     </Button>
                  </Col>
               </Row>
               <Row>
                     <Permissions
                        context={context}
                        switchAsistencia={switchAsistencia}
                        reRender={reRender}
                        setReRender={setReRender}
                        addUserRef={addUserRef}
                        switchAsistencia={switchAsistencia}
                        setSwitchAsistencia={setSwitchAsistencia}
                        setSwitchCalificacionesLeer={setSwitchCalificacionesLeer}
                        switchCalificacionesLeer={switchCalificacionesLeer}
                        switchCalificacionesEditar={switchCalificacionesEditar}
                        setSwitchCalificacionesEditar={setSwitchCalificacionesEditar}
                        isNewUser={isNewUser}
                     />
               </Row>
            </Container>
         </Modal.Body>
      </Modal>
   )
}

export default ModalEditUser
