import {useState,useRef} from 'react'

import {
   Row,
   Col,
   Container,
   Button
} from 'react-bootstrap'

import ModalUsuarios from './ModalUsuarios'
import ModalAddUser from './ModalAddUser'
import ModalEditUser from './ModalEditUser'

import useAuth from '../Context/Store/useAuth'

const AdminOptions = () => { 

   const [usuariosModal, setUsuariosModal] = useState(false)
   const [addUserModal,setAddUserModal] = useState(false)
   const [userEditModal,setUserEditModal] = useState(false)
   const [selectedUser,setSelectedUser] = useState('')
   const addUserRef = useRef({})
   const [reRender,setReRender] = useState(false)
   const [switchAsistencia,setSwitchAsistencia] = useState(true)
   const [switchCalificacionesLeer,setSwitchCalificacionesLeer] =  useState(true)
   const [switchCalificacionesEditar,setSwitchCalificacionesEditar] = useState(true)
   const [isNewUser,setIsNewUser] = useState(false)
   const context = useAuth()

   return ( 
      <Container>
         <ModalEditUser
            isNewUser={isNewUser}
            userEditModal={userEditModal}
            setUserEditModal={setUserEditModal}
            usuariosModal={usuariosModal}
            setUsuariosModal={setUsuariosModal}
            selectedUser={selectedUser}
            addUserRef={addUserRef}
            reRender={reRender}
            setReRender={setReRender}
            switchCalificacionesLeer={switchCalificacionesLeer}
            setSwitchCalificacionesLeer={setSwitchCalificacionesLeer}
            switchCalificacionesEditar={switchCalificacionesEditar}
            setSwitchCalificacionesEditar={setSwitchCalificacionesEditar}
            switchAsistencia={switchAsistencia}
            setSwitchAsistencia={setSwitchAsistencia}
            context={context}
         />
         <ModalUsuarios 
            usuariosModal={usuariosModal}
            setUsuariosModal={setUsuariosModal}
            addUserModal={addUserModal} 
            setAddUserModal={setAddUserModal}
            userEditModal={userEditModal}
            setUserEditModal={setUserEditModal}
            setSelectedUser={setSelectedUser}
            setIsNewUser={setIsNewUser}
         />
         <ModalAddUser
            isNewUser={isNewUser}
            setUsuariosModal={setUsuariosModal}
            addUserModal={addUserModal}
            setAddUserModal={setAddUserModal}
            addUserRef={addUserRef}
            reRender={reRender}
            setReRender={setReRender}
            switchCalificacionesLeer={switchCalificacionesLeer}
            setSwitchCalificacionesLeer={setSwitchCalificacionesLeer}
            switchCalificacionesEditar={switchCalificacionesEditar}
            setSwitchCalificacionesEditar={setSwitchCalificacionesEditar}
            switchAsistencia={switchAsistencia}
            setSwitchAsistencia={setSwitchAsistencia}
            context={context}
         />
         <Row>
            <Col 
               className='mt-3'
            >
               <Button 
                  variant='outline-success' 
                  size='sm'
                  onClick={() => setUsuariosModal(true) }
               >
                  Usuarios
               </Button>
            </Col>
         </Row>
      </Container>
   )
}

export default AdminOptions