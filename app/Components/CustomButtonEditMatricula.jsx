import {DecodeToken} from './Logic/tokenhandler'

import {
   Button,
} from 'react-bootstrap'

const CustomButtonEditMatricula = ({switchEdit,handleSwitchEdit,handleUpdateData,modalEditRef,fechaNacimiento,dataAlumno,setSwitchEdit,updatedData,setShowModalUpdate,setUpdatedData}) => { 

   return ( 
      <>
         {DecodeToken(1).usuario.permissions.editarMatricula ?
               switchEdit ?
                  <Button
                     variant='outline-success'
                     size='sm'
                     onClick={() => handleSwitchEdit(setSwitchEdit)}
                  >Editar</Button>
                  :
                  <Button
                     variant='outline-success'
                     size='sm'
                     onClick={() => {
                        handleUpdateData(modalEditRef,fechaNacimiento,dataAlumno,setSwitchEdit,updatedData,setShowModalUpdate,setUpdatedData)
                     }}
                  >Actualizar</Button>
                  :
               null
         }
      </>
   )
}

export default CustomButtonEditMatricula
