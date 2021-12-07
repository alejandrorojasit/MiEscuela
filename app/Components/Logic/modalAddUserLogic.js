import {postFetchAddUser} from '../../Hooks/postFetch.js'

export const handleClickRole = (item,setRole)=>{
      setRole(item)
   }

export const handleChangeUser = (event,setUsuario)=> {
      setUsuario(event.target.value);
   }

export const handleChangePassowrd = (event,setPassword)=> {
      setPassword(event.target.value)
   }

export const handleClick = (context,usuario,password,role,addUserUrl,setAddUserModal,setUsuariosModal,addUserRef)=>{
      postFetchAddUser(
         context.stateUser.token,
         usuario,
         password,
         role,
         addUserRef,
         addUserUrl
      ).then(res => {
         if(res.statusText === 'OK') {
            setAddUserModal(false)
            setUsuariosModal(true)
         }else {
            alert(res.data.err.message)
         }
      })
   }

export const handleSwitchCheckbox = (checkboxBoolean1,checkboxBoolean2,setFunctionToSwitch) =>{
   console.log(checkboxBoolean1)
   console.log(checkboxBoolean2)
   switch(true){
      case checkboxBoolean1 || checkboxBoolean2 === true :
         setFunctionToSwitch(false)
         break
      case checkboxBoolean1 || checkboxBoolean2 === false : 
         setFunctionToSwitch(true)
         break
   } 
}
