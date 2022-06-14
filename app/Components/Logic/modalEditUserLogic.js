import {deleteFetchDeleteUser} from '../../hooks/deleteFetch'

import {getFetchUsuarioSingle} from '../../hooks/getFetch.js'

import {postFetchUpdateUser} from '../../hooks/postFetch'

export const handleClose = (setSwitchRole,setSwitchPassword,setSwitchUsuario,setUserEditModal,setUsuariosModal,setDataUser) => {
   setDataUser({})
   setSwitchRole(true)
   setSwitchPassword(true)
   setSwitchUsuario(true)
   setUserEditModal(false)
   setUsuariosModal(true)
}

export const handleShow = (setDataUser,context,selectedUser) => {
   getFetchUsuarioSingle(
      context.token,
      selectedUser
   ).then((res) => 
      setDataUser(res.data)
   )
}

export const handleClickDelete = (userState,selectedUser,userDeleteUrl,setUserEditModal) => {
   deleteFetchDeleteUser(
      userState.token,
      selectedUser,
      userDeleteUrl
   ).then((res) =>{
      if(res.status === 200){
         alert('Usuario eliminado con exito')
         setUserEditModal(false)
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
   apiUrl,_id,
   setUserEditModal,
   setUsuariosModal,
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
            setUserEditModal(false)         
            setUsuariosModal(true)
         }
})
}
