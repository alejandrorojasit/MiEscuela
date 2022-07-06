import {getFetchUsuarios} from '../../hooks/getFetch.js'

import { 
   updateDataUsuarios ,
   updateIsNewUser,
   updateUsuariosModal,
   updateSelectedUser,
   updateUserEditModal,
   updateAddUserModal,
} from '../../redux/actions/adminOptions.actions.js'

export const handleEdit = (
   dataMap,
   dispatch
) =>{
   dispatch(updateUsuariosModal())
   dispatch(updateSelectedUser(dataMap.usuario))
   dispatch(updateUserEditModal())
}

export const handleAddUser = (
   dispatch
) =>{
   dispatch(updateUsuariosModal())
   dispatch(updateAddUserModal())
   dispatch(updateIsNewUser(true))
}

export const upDateUsers = (
   token,
   dispatch
)=> {
   getFetchUsuarios(token).then((data) =>
      dispatch(updateDataUsuarios(data.data))
   )
}
