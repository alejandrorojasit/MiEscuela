import {useState,useEffect} from 'react'
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
   handleClickAccept,
} from './Logic/modalEditUserLogic' 

import {userDeleteUrl} from '../Helpers/Urls'

import Permissions from './Permissions.jsx'

import {updateUser} from '../Helpers/Urls.js' 

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
   const [user,setUser] = useState(null)
   const [password,setPassword] = useState(null)
   const [role,setRole] = useState(null)

   useEffect(()=>{
      setUser(dataUser.usuario)
      setRole(dataUser.role)
   },[dataUser.usuario,dataUser.role])
   return ( 
      <Modal 
         show={userEditModal} 
         onHide={()=> handleClose(setSwitchRole,setSwitchPassword,setSwitchUsuario,setUserEditModal,setUsuariosModal)} 
         onShow={()=> {
            handleShow(setDataUser,context,selectedUser)
         }}
         size='lg'
      >
         <Modal.Header 
            closeButton
         >
               <Col
                  style={{display:'flex',justifyContent:'center'}}
               >
                  <h3>Editar Usuario</h3>
               </Col>
         </Modal.Header>
         <Modal.Body>
            <Container>
               <Row>
                  <Col
                     md={4}
                  >
                     <Row 
                        className="mb-3 mt-2"
                     > 
                        <h6>Usuario:</h6>     
                     </Row>
                     <Row 
                        className="mb-3 mt-2"
                     >
                        <h6>Password:</h6> 
                     </Row>
                     <Row 
                        className="mb-3 mt-2"
                     >
                        <h6>Role:</h6> 
                     </Row>
                  </Col>
                  <Col>
                     <Row> 
                        <Form.Group 
                           className='d-flex mt-2'
                        >
                           <Form.Control
                              size='sm'
                              placeholder={dataUser?.usuario}
                              aria-label="usuario"
                              readOnly={switchUsuario}
                              onChange={(element)=>setUser(element.target.value)}
                           />
                           <Button 
                              size='sm'
                              variant="outline-secondary" 
                              onClick={()=> setSwitchUsuario(false)}
                           >
                              Editar
                           </Button>
                        </Form.Group> 
                     </Row>
                     <Row>
                        <Col>
                        <Form.Group 
                           className='d-flex mt-2'
                        >
                           <Form.Control
                              type='password'
                              size='sm'
                              placeholder={'Ingrese nuevo password'}
                              readOnly={switchPassword}
                              onChange={(element)=>setPassword(element.target.value)}
                           />
                           <Button 
                              size='sm'
                              variant="outline-secondary" 
                              onClick={()=> setSwitchPassword(false)}
                           >
                              Editar
                           </Button>
                        </Form.Group>      
                        </Col>
                     </Row>
                     <Row>
                        <InputGroup 
                           className='d-flex mt-2'
                        >
                           <Form.Select
                              size='sm'
                              placeholder={dataUser?.role}
                              disabled={switchRole}
                              onChange={(element)=>setRole(element.target.value)}
                           >
                              <option 
                                 value={dataUser.role}
                              >
                                 {dataUser.role}
                              </option>
                              {context.stateHardCodeData.hardCodeData.puestoTrabajo.map((dataMap)=> 
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
                              size='sm'
                              variant="outline-secondary" 
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
               
               <Row>
                     <Permissions
                        context={context}
                        dataUser={dataUser}
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
         <Modal.Footer>
            <Row 
                  className='mt-3'>
                  <Col 
                     className='d-flex justify-content-center'
                  >
                     <Button 
                        variant='outline-success' 
                        size='sm'
                        onClick={()=> handleClickAccept(user,password,role,addUserRef,context,updateUser,dataUser._id)}
                     >
                        Aceptar cambios
                     </Button>
                  </Col>
               </Row>
         </Modal.Footer>
      </Modal>
   )
}

export default ModalEditUser
