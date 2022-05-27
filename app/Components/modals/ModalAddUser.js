import {useState,useRef} from 'react'

import {
   Modal,
   Container,
   Row,
   Col,
   Form,
   Button,
   DropdownButton,
   ButtonGroup,
   Dropdown
} from 'react-bootstrap'

import {useSelector} from 'react-redux'

import Permissions from '../forms/PermissionsForm'

import {colors} from '../../helpers/styleColors'

import {
   handleClickRole,
   handleChangeUser,
   handleChangePassowrd,
   handleClick,
   handleSwitchCheckbox,
} from '../logic/modalAddUserLogic'

import {addUserUrl} from '../../helpers/Urls'

const style = {
   form: {
      marginTop: 20,
   },
   button: {
      marginTop: 20,
   }
}

const ModalAddUser = ({
   addUserModal,
   setAddUserModal,
   setUsuariosModal,
   reRender,
   setReRender,
   switchCalificacionesLeer,
   setSwitchCalificacionesLeer,
   switchCalificacionesEditar,
   setSwitchCalificacionesEditar,
   switchAsistencia,
   setSwitchAsistencia,
   addUserRef,
   isNewUser,
}) => { 

   const handleClose = () => setAddUserModal(false)
   const [usuario,setUsuario] = useState('')
   const [password,setPassword] = useState('')
   const [role,setRole] = useState('Seleccione tipo de usuario')
   const stateUser =  useSelector(state => state.authReducer)
   const hardCodeData = useSelector(state => state.hardCodeDataReducer.hardCodeData)
   return ( 
      <Modal 
         show={addUserModal} 
         onHide={handleClose}
         size='lg'
         style={{color:colors.darken}}
      >
         <Modal.Header 
            closeButton
         >
            <Container
               fluid
            >
               <Row
               >
                  <Col className='d-flex justify-content-center'>
                     <h3> 
                        Añadir nuevo usuario:
                     </h3>         
                  </Col>
               </Row>
            </Container>
         </Modal.Header>
         <Modal.Body
         >
            <Container
               fluid
            >
               <Col
               >
                  <Form> 
                     <Form.Group>
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control 
                           placeholder='Ingerse Usuario' 
                           type='text' 
                           onChange={(event)=> handleChangeUser(event,setUsuario)}
                        />
                        <Form.Text 
                           className='text-muted'
                        >
                           Ingrese el usuario.
                        </Form.Text>
                     </Form.Group>
                     <Form.Group>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control 
                           placeholder='Ingerse Contraseña' 
                           type='password' 
                           onChange={(event)=> handleChangePassowrd(event,setPassword)}
                        />
                        <Form.Text 
                           className='text-muted'
                        >
                           Ingrese la contraseña.
                        </Form.Text>
                        <Form.Select 
                           className='mt-2'
                           style={{color:colors.darken}}
                           aria-label='Puesto Trabajo' 
                           onChange={(event)=> handleClickRole(event.target.value,setRole)}
                        >
                           <option>Puesto Trabajo</option>
                           {hardCodeData?.puestoTrabajo?.map((dataMap)=>
                           <option 
                              value={dataMap} 
                              key={dataMap}
                           >
                              {dataMap}
                           </option>
                           )}
                        </Form.Select>
                     </Form.Group>
                  </Form>
               </Col>
               <Permissions
                  isNewUser={isNewUser}
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
               />
            </Container>
         </Modal.Body>
         <Modal.Footer>
            <Button 
               variant='outline-success' 
               size='sm'
               type='button' 
               style={style.button} 
               onClick={ ()=> {
                  handleClick(context,usuario,password,role,addUserUrl,setAddUserModal,setUsuariosModal,addUserRef)
               }}
            >
               Añadir
            </Button> 
         </Modal.Footer>
      </Modal>
   )
}

export default ModalAddUser
