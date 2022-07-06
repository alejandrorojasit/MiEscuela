import {useState,useRef} from 'react'

import {
   Row,
   Col,
   Container,
   Button
} from 'react-bootstrap'

import ModalUsuarios from './modals/ModalUsuarios'
import ModalAddUser from './modals/ModalAddUser'
import ModalEditUser from './modals/ModalEditUser'
import { useDispatch } from 'react-redux'
import {updateUsuariosModal} from '../redux/actions/adminOptions.actions'

const AdminOptions = () => { 

   const dispatch = useDispatch()

   const addUserRef = useRef({})

   return ( 
      <Container>
         <Container
            className='border border-success p-3'
         >
         <ModalEditUser
            addUserRef={addUserRef}
            />
         <ModalUsuarios 
            />
         <ModalAddUser
            addUserRef={addUserRef}
            />
         <Row>
            <Col 
               className='mt-3'
            >
               <Button 
                  variant='outline-success' 
                  size='sm'
                  onClick={() => dispatch(updateUsuariosModal()) }
               >
                  Usuarios
               </Button>
            </Col>
         </Row>
            </Container>
         </Container>
   )
}

export default AdminOptions
