import {getFetchUsuarios} from '../../Hooks/getFetch.js'

export const handleEdit = (
   dataMap,
   userEditModal,
   setUserEditModal,
   setUsuariosModal,
   setSelectedUser,
   setIsNewUser
) =>{
   setIsNewUser(false)
   setUsuariosModal(false) 
   setUserEditModal(true)
   setSelectedUser(dataMap.usuario)
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
