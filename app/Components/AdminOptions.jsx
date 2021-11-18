import {useState} from 'react'

import {
   Row,
   Col,
   Container,
   Button
} from 'react-bootstrap'

import ModalUsuarios from './ModalUsuarios.jsx'
import ModalAddUser from './ModalAddUser.jsx'
import ModalEditUser from './ModalEditUser.jsx'

const AdminOptions = () => { 

   const [usuariosModal, setUsuariosModal] = useState(false)
   const [addUserModal,setAddUserModal] = useState(false)
   const [userEditModal,setUserEditModal] = useState(false)
   const [selectedUser,setSelectedUser] = useState('')

   return ( 
      <Container>
         <ModalEditUser
            userEditModal={userEditModal}
            setUserEditModal={setUserEditModal}
            usuariosModal={usuariosModal}
            setUsuariosModal={setUsuariosModal}
            selectedUser={selectedUser}
         />
         <ModalUsuarios 
            usuariosModal={usuariosModal}
            setUsuariosModal={setUsuariosModal}
            addUserModal={addUserModal} 
            setAddUserModal={setAddUserModal}
            userEditModal={userEditModal}
            setUserEditModal={setUserEditModal}
            setSelectedUser={setSelectedUser}
         />
         <ModalAddUser
            setUsuariosModal={setUsuariosModal}
            addUserModal={addUserModal}
            setAddUserModal={setAddUserModal}
         />
         <Row>
            <Col 
               className='mt-3'
            >
               <Button 
                  variant='primary' 
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
