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

import {colors} from '../Helpers/styleColors'

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

   console.log(context)
   const handleClose = () => setAddUserModal(false)
   const [usuario,setUsuario] = useState('')
   const [password,setPassword] = useState('')
   const [role,setRole] = useState('Seleccione tipo de usuario')

   return ( 
         <Modal 
            show={addUserModal} 
            onHide={handleClose}
            size='lg'
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
                  Añadir usuaro nuevo
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
               <Row>
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
               >
                  <option>Puesto Trabajo</option>
                  {context?.stateHardCodeData?.hardCodeData?.puestoTrabajo?.map((dataMap)=>
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
               <Col
               >
                  <h6>Privilegios:</h6>
                  {
                     context?.stateHardCodeData?.hardCodeData?.permisosUsuario?.map((dataMap)=> 
                        <Form.Check
                           type='checkbox'
                           label={dataMap}
                        />
                     )
                  }
                  <h6>Generar Informes:</h6>
                  {
                     context?.stateHardCodeData?.hardCodeData?.generarReportes?.map((dataMap)=>
                         <Form.Check
                           type='checkbox'
                           label={dataMap}
                        />
                     )
                  }
               </Col>
               </Row>
               </Container>
            </Modal.Body>
            <Modal.Footer>
               <Button 
                  variant='outline-success' 
                  size='sm'
                  type='button' 
                  style={style.button} 
                  onClick={ ()=> handleClick(context,usuario,password,role,addUserUrl,setAddUserModal,setUsuariosModal)}
               >
                  Añadir
               </Button> 
            </Modal.Footer>
         </Modal>
   )
}

export default ModalAddUser
