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
import {useSelector,useDispatch} from 'react-redux'

import {
   handleEdit,
   handleAddUser,
   upDateUsers,
} from '../logic/modalUsuariosLogic'

import {colors} from '../../helpers/styleColors'

import {
   updateUsuariosModal,
} from '../../redux/actions/adminOptions.actions'

const ModalUsuarios = ({
}) => { 

   const dispatch = useDispatch()

   const userState = useSelector(state => state.authReducer)

   const {
      usuariosModal,
      userEditModal,
      dataUsuarios,
   } = useSelector(state => state.adminOptionsReducer)

   const handleClose = () => dispatch(updateUsuariosModal()) 

   return ( 

      <Modal 
         show={usuariosModal} 
         onHide={handleClose} 
         onShow={()=> upDateUsers(
            userState.token,
            dispatch
         )}
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
                                       dispatch
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
               onClick={()=> handleAddUser(
                  dispatch
               )}
            >
               Nuevo Usuario
            </Button>
         </Modal.Footer>
      </Modal>
   )
}

export default ModalUsuarios
