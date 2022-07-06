import {deleteFetchDeleteUser} from '../../hooks/deleteFetch'

import {getFetchUsuarioSingle} from '../../hooks/getFetch.js'

import {postFetchUpdateUser} from '../../hooks/postFetch'

import {
   updateDataUser,
   updateSwitchRole,
   updateSwitchPassword,
   updateSwitchUsuario,
   updateUserEditModal,
   updateUsuariosModal,
} from '../../redux/actions/adminOptions.actions'

export const handleClose = (
   dispatch
) => {
   dispatch(updateDataUser({}))
   dispatch(updateSwitchRole())
   dispatch(updateSwitchUsuario())
   dispatch(updateSwitchPassword())
   dispatch(updateUserEditModal())
   dispatch(updateUsuariosModal())
}

export const handleShow = (
   dispatch,
   userState,
   selectedUser
) => {
   getFetchUsuarioSingle(
      userState.token,
      selectedUser
   ).then((res) => 
      dispatch(updateDataUser(res.data))
   )
}

export const handleClickDelete = (
   userState,
   selectedUser,
   userDeleteUrl,
   dispatch
) => {
   deleteFetchDeleteUser(
      userState.token,
      selectedUser,
      userDeleteUrl
   ).then((res) =>{
      if(res.status === 200){
         alert('Usuario eliminado con exito')
         dispatch(updateUserEditModal())
      }
   }
   ) 
}


export const handleClickAccept = (
   user,
   password,
   role,
   addUserRef,
   userState,
   apiUrl,
   _id,
   dispatch
) =>{
   let permissions = {}
   let dataToSend = {}
   Object.keys(addUserRef.current).map((dataMap,index)=> {
      permissions = {...permissions,[dataMap]:addUserRef.current[dataMap].checked}
   })
   if (password === null) {
      dataToSend = {
         permissions,
         role,
         usuario:user
      }
   }else
      {
         dataToSend = {
            password,
            permissions,
            role,
            usuario:user
         }
      }
   postFetchUpdateUser(
      userState.token,
      dataToSend,
      apiUrl,_id
   ).then(res => {
         if(res.status === 200){
            dispatch(updateUserEdiModal())
            dispatch(updateUsuariosModal())
         }
})
}
