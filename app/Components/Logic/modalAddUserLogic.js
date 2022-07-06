import {postFetchAddUser} from '../../hooks/postFetch.js'

import {
   updateUser,
   updatePassword,
   updateRole,
   updateAddUserModal,
   updateUsuariosModal,
} from '../../redux/actions/adminOptions.actions'

export const handleClickRole = (item,dispatch)=>{
   dispatch(updateRole(item))
   }

export const handleChangeUser = (event,dispatch)=> {
   dispatch(updateUser(event.target.value))
   }

export const handleChangePassowrd = (event,dispatch)=> {
      dispatch(updatePassword(event.target.value))
   }

export const handleClick = (
   userState,
   usuario,
   password,
   role,
   addUserUrl,
   dispatch,
   addUserRef
)=>{
   let permissions = {
   }
   Object.keys(addUserRef.current).map((dataMap,index)=>{
      permissions = {...permissions , [dataMap]:addUserRef.current[dataMap].checked}
   })
      postFetchAddUser(
         userState.token,
         usuario,
         password,
         role,
         permissions,
         addUserUrl
      ).then(res => {
         if(res.status === 200) {
            dispatch(updateAddUserModal())
            dispatch(updateUsuariosModal())
         }else {
            alert(res.data.err.message)
         }
      })
   }

export const handleSwitchCheckbox = (
   checkboxBoolean1,
   checkboxBoolean2,
   setFunctionToSwitch
) =>{
   switch(true){
      case checkboxBoolean1 || checkboxBoolean2 === true :
         setFunctionToSwitch(false)
         break
      case checkboxBoolean1 || checkboxBoolean2 === false : 
         setFunctionToSwitch(true)
         break
   } 
}
