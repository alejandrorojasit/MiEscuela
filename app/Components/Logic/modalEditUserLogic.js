import {deleteFetchDeleteUser} from '../../Hooks/deleteFetch'

import {getFetchUsuarioSingle} from '../../Hooks/getFetch.js'

import {postFetchUpdateUser} from '../../Hooks/postFetch'

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
      context.stateUser.token,
      selectedUser
   ).then((res) => 
      setDataUser(res.data)
   )
}

export const handleClickDelete = (context,selectedUser,userDeleteUrl,setUserEditModal) => {
   deleteFetchDeleteUser(
      context.stateUser.token,
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


export const handleClickAccept = (user,password,role,addUserRef,context,apiUrl,_id) =>{
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
   postFetchUpdateUser(context.stateUser.token,dataToSend,apiUrl,_id)
}

