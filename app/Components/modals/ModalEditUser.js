import {useState,useEffect} from 'react'
import {
   Modal,
   Col,
   Row,
   Container,
   InputGroup,
   Button,
   Form
} from 'react-bootstrap'

import {
   handleClose,
   handleShow,
   handleClickDelete,
   handleClickAccept,
} from '../logic/modalEditUserLogic' 

import {
   updateRole,
   updateUser,
   updatePassword,
   updateSwitchRole,
   updateSwitchUsuario,
   updateSwitchPassword,
} from '../../redux/actions/adminOptions.actions'

import {userDeleteUrl} from '../../helpers/Urls'

import Permissions from '../forms/PermissionsForm'

import {updateUserUrl} from '../../helpers/Urls.js' 

import {useSelector,useDispatch} from 'react-redux'

const ModalEditUser = ({
   addUserRef,
}) => { 

   const {
      dataUser,
      userEditModal,
      selectedUser,
      switchUsuario,
      switchPassword,
      switchRole,
      user,
      password,
      role,
   } = useSelector(state => state.adminOptionsReducer)

   const userState = useSelector(state => state.authReducer)

   const hardCodeData =  useSelector(state => state.hardCodeDataReducer.hardCodeData)

   const dispatch =  useDispatch()

   useEffect(()=>{
      dispatch(updateUser(dataUser.usuario))
      dispatch(updateRole(dataUser.role))
   },[dataUser.usuario,dataUser.role])

   return ( 
      <Modal 
         show={userEditModal} 
         onHide={()=> handleClose(
            dispatch
         )} 
         onShow={()=> {
            handleShow(
               dispatch,
               userState,
               selectedUser
            )
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
                              onChange={(element)=>dispatch(updateUser(element.target.value))}
                           />
                           <Button 
                              size='sm'
                              variant="outline-secondary" 
                              onClick={()=> dispatch(updateSwitchUsuario())}
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
                              onChange={(element)=>dispatch(updatePassword(element.target.value))}
                           />
                           <Button 
                              size='sm'
                              variant="outline-secondary" 
                              onClick={()=> dispatch(updateSwitchPassword())}
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
                              onChange={(element)=>dispatch(updateRole(element.target.value))}
                           >
                              <option 
                                 value={dataUser.role}
                              >
                                 {dataUser.role}
                              </option>
                              {hardCodeData.puestoTrabajo.map((dataMap)=> 
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
                              onClick={()=> dispatch(updateSwitchRole())}
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
                        onClick={()=> handleClickDelete(
                           userState,
                           selectedUser,
                           userDeleteUrl,
                           dispatch
                        )}
                     >
                        Eliminar Usuario
                     </Button>
                  </Col>
               </Row>
               <Row>
                     <Permissions
                        addUserRef={addUserRef}
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
                        onClick={()=> handleClickAccept(
                        user,
                        password,
                        role,
                        addUserRef,
                        userState,
                        updateUserUrl,
                        dataUser._id,
                        dispatch
                     )}
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
