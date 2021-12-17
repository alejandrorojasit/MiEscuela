import {getFetchUsuarios} from '../../Hooks/getFetch.js'

export const handleEdit = (
   dataMap,
   userEditModal,
   setUserEditModal,
   setUsuariosModal,
   setSelectedUser,
   setIsNewUser,
) =>{
   setIsNewUser(false)
   setUsuariosModal(false) 
   setSelectedUser(dataMap.usuario)
   setUserEditModal(true)
}

export const handleAddUser = (
   setAddUserModal,
   setUsuariosModal,
   setIsNewUser
) =>{
   setUsuariosModal(false)
   setAddUserModal(true) 
   setIsNewUser(true)
}

export const upDateUsers = (
   token,
   setDataUsuarios
)=> {
   getFetchUsuarios(token).then((data) =>
      setDataUsuarios(data.data)
   )
}
