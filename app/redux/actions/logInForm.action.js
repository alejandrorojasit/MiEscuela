export const LOGINFORM_CHANGEUSER = "LOGINFORM_CHANGEUSER"
export const LOGINFORM_CHANGEPASSWORD = "LOGINFORM_CHANGEPASSWORD"

export const  logInFormChangeUser = (payload) => {
   return {
      type : LOGINFORM_CHANGEUSER,
      payload
   }
}

export const logInFormChangePassword = (payload) => {
   return  {
      type:  LOGINFORM_CHANGEPASSWORD,
      payload
   }
}
