import {getFetchUsuarios} from '../../Hooks/getFetch.js'

export const handleEdit = (
   dataMap,
   userEditModal,
   setUserEditModal,
   setUsuariosModal,
   setSelectedUser
) =>{
   setUsuariosModal(false) 
   setUserEditModal(true)
   setSelectedUser(dataMap.usuario)
}

export const handleAddUser = (
   setAddUserModal,
   setUsuariosModal
) =>{
   setUsuariosModal(false)
   setAddUserModal(true) 
}

export const upDateUsers = (
   token,
   setDataUsuarios
)=> {
   getFetchUsuarios(token).then((data) =>
      setDataUsuarios(data.data)
   )
}
