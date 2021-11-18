import {deleteFetchDeleteUser} from '../../Hooks/deleteFetch'

import {getFetchUsuarioSingle} from '../../Hooks/getFetch.js'

export const handleClose = (setSwitchRole,setSwitchPassword,setSwitchUsuario,setUserEditModal,setUsuariosModal) => {
      setSwitchRole(true)
      setSwitchPassword(true)
      setSwitchUsuario(true)
      setUserEditModal(false)
      setUsuariosModal(true)
   }

   export const handleShow = (setDataUser,context,selectedUser) => {
      getFetchUsuarioSingle(
         context.stateUser.token,
         selectedUser
      ).then((res) => 
         setDataUser(res.data)
      )
   }

   export const handleClickDelete = (context,selectedUser,userDeleteUrl) => {
      deleteFetchDeleteUser(
         context.stateUser.token,
         selectedUser,
         userDeleteUrl
      ).then((res) =>{
         if(res.status === 200){
            alert('Usuario eliminado con exito')
         }
      }
      ) 
      handleClose()
   }


