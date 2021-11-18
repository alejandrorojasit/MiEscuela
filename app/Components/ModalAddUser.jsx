import {useState} from 'react'

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

import useAuth from '../Context/Store/useAuth.jsx'

import {
   handleClickRole,
   handleChangeUser,
   handleChangePassowrd,
   handleClick,
} from './Logic/modalAddUserLogic'

import {addUserUrl} from '../Helpers/Urls'

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
   setUsuariosModal
}) => { 

   const context = useAuth()

   const handleClose = () => setAddUserModal(false)
   const [usuario,setUsuario] = useState('')
   const [password,setPassword] = useState('')
   const [role,setRole] = useState('Seleccione tipo de usuario')

   return ( 
      <Modal 
         show={addUserModal} 
         onHide={handleClose}
      >
         <Modal.Header 
            closeButton
         >
            <h3> 
               Añadir usuaro nuevo
            </h3>
         </Modal.Header>
         <Modal.Body>
            <Container 
               style={style.form} 
               fluid
            >
               <Col>
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
                     </Form.Group>
                     <Row>
                        <DropdownButton 
                           title={role}
                           as={ButtonGroup}
                        >    
                           {Role.map(
                              (item) =>
                                 <Dropdown.Item 
                                    key={item} 
                                    onClick={ ()=> handleClickRole(item,setRole)}
                                 >
                                    {item}
                                 </Dropdown.Item>
                           )}
                        </DropdownButton>
                     </Row>
                     <Row>
                        <Button 
                           variant='primary' 
                           type='button' 
                           style={style.button} 
                           onClick={ ()=> handleClick(context,usuario,password,role,addUserUrl,setAddUserModal,setUsuariosModal)}
                        >
                           Añadir
                        </Button> 
                     </Row>
                  </Form>
               </Col>
            </Container>
         </Modal.Body>
      </Modal>
   )
}

export default ModalAddUser
