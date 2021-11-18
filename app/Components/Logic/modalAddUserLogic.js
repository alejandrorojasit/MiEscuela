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

export const handleClick = (context,usuario,password,role,addUserUrl,setAddUserModal,setUsuariosModal)=>{
      postFetchAddUser(
         context.stateUser.token,
         usuario,
         password,
         role,
         addUserUrl
      ).then(res => {
         if(res.statusText === 'OK') {
            alert('Usuario añadido con exito')
            setAddUserModal(false)
            setUsuariosModal(true)
         }else {
            alert(res.data.err.message)
         }
      })
   }
