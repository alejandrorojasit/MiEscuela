
import {
   Modal,
   Container,
   Row,
   Col,
   Form,
   Button,
} from 'react-bootstrap'

import {useSelector,useDispatch} from 'react-redux'

import Permissions from '../forms/PermissionsForm'

import {colors} from '../../helpers/styleColors'

import {
   handleClickRole,
   handleChangeUser,
   handleChangePassowrd,
   handleClick,
} from '../logic/modalAddUserLogic'

import {addUserUrl} from '../../helpers/Urls'

import {
   updateAddUserModal,
} from '../../redux/actions/adminOptions.actions'

const style = {
   form: {
      marginTop: 20,
   },
   button: {
      marginTop: 20,
   }
}


const ModalAddUser = ({
   addUserRef,
}) => { 
   const dispatch = useDispatch()

   const handleClose = () => dispatch(updateAddUserModal()) 

   const stateUser =  useSelector(state => state.authReducer)

   const hardCodeData = useSelector(state => state.hardCodeDataReducer.hardCodeData)

   const {
      addUserModal,
      user,
      password,
      role,
   } = useSelector (state => state.adminOptionsReducer)

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
                           onChange={(event)=> handleChangeUser(
                              event,
                              dispatch
                           )}
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
                           onChange={(event)=> handleChangePassowrd(
                              event,
                              dispatch
                           )}
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
                           onChange={(event)=> handleClickRole(
                              event.target.value,
                              dispatch
                           )}
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
                  addUserRef={addUserRef}
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
                  handleClick(
                     stateUser,
                     user,
                     password,
                     role,
                     addUserUrl,
                     dispatch,
                     addUserRef
                  )
               }}
            >
               Añadir
            </Button> 
         </Modal.Footer>
      </Modal>
   )
}

export default ModalAddUser
