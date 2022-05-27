import {postFetchAddUser} from '../../hooks/postFetch.js'

export const handleClickRole = (item,setRole)=>{
      setRole(item)
   }

export const handleChangeUser = (event,setUsuario)=> {
      setUsuario(event.target.value);
   }

export const handleChangePassowrd = (event,setPassword)=> {
      setPassword(event.target.value)
   }

export const handleClick = (userState,usuario,password,role,addUserUrl,setAddUserModal,setUsuariosModal,addUserRef)=>{
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
         if(res.statusText === 'OK') {
            setAddUserModal(false)
            setUsuariosModal(true)
         }else {
            alert(res.data.err.message)
         }
      })
   }

export const handleSwitchCheckbox = (checkboxBoolean1,checkboxBoolean2,setFunctionToSwitch) =>{
   switch(true){
      case checkboxBoolean1 || checkboxBoolean2 === true :
         setFunctionToSwitch(false)
         break
      case checkboxBoolean1 || checkboxBoolean2 === false : 
         setFunctionToSwitch(true)
         break
   } 
}
