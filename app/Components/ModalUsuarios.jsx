import {
   useState,
} from 'react'

import {
   Modal,
   Col,
   Table,
   Button
} from 'react-bootstrap'

import {FaUserEdit} from 'react-icons/fa'
import useAuth from '../Context/Store/useAuth.jsx'

import {
   handleEdit,
   handleAddUser,
   upDateUsers,
} from './Logic/modalUsuariosLogic'

import {colors} from '../Helpers/styleColors'

const ModalUsuarios = ({
   usuariosModal,
   setUsuariosModal,
   setAddUserModal,
   userEditModal,
   setUserEditModal,
   setSelectedUser,
   setIsNewUser
}) => { 

   const context = useAuth()
   const handleClose = () => setUsuariosModal(false)
   const [dataUsuarios,setDataUsuarios] = useState([])

   return ( 

      <Modal 
         show={usuariosModal} 
         onHide={handleClose} 
         onShow={()=> upDateUsers(context.stateUser.token,setDataUsuarios)}
      >
         <Modal.Header 
            closeButton
         >
            <h3>Usuarios en Mi Escuela</h3>
         </Modal.Header>
            <Modal.Body>
            <Col 
               className='d-flex justify-content-center'
            >
               <Table 
                  bordered 
                  striped 
                  hover 
                  size="sm"
                  style={{color:colors.darken}}
               >
                  <thead>
                     <tr>
                        <th>#</th>
                        <th>Usuario</th>
                        <th>Role</th>
                     </tr>
                  </thead>
                  <tbody>
                     {dataUsuarios.map(
                        (dataMap) =>
                           <tr 
                              key={dataMap.usuario}
                           >
                              <th>
                                 <Button 
                                    variant='outline-success'
                                    onClick={()=> handleEdit(
                                       dataMap,
                                       userEditModal,
                                       setUserEditModal,
                                       setUsuariosModal,
                                       setSelectedUser,
                                       setIsNewUser,
                                    )}
                                 >
                                    <FaUserEdit/>
                                 </Button>
                              </th>
                              <th>{dataMap.usuario}</th>
                              <th>{dataMap.role}</th>
                           </tr>
                     )}   
                  </tbody>
               </Table>
            </Col>
            </Modal.Body>
         <Modal.Footer>
            <Button 
               variant='outline-success'
               size='sm'
               onClick={()=> handleAddUser(setAddUserModal,setUsuariosModal,setIsNewUser)}
            >
               Nuevo Usuario
            </Button>
         </Modal.Footer>
      </Modal>
   )
}

export default ModalUsuarios
