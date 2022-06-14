import {
   useRef
} from 'react'
import ModalEditAlumno from './modals/ModalEditAlumno'
import ModalEditObservaciones from './modals/ModalEditObservaciones'
import ModalEditRegistroSalud from './modals/ModalEditRegistroSalud'
import SelectFormStage1 from './selects/SelectFormStage1'
import SelectFormStage2 from './selects/SelectFormStage2'
import TableAlumnosMatricula from './tabs/TableAlumnosMatricula'
import LoadingSpinner from './spinners/LoadingSpinner'
import ModalConfirmUpdateData from './modals/ModalConfirmUpdateData'

import {getMatriculaActivo} from '../hooks/getFetch.js'

import{
   updateAlumnoFullList,
} from '../redux/actions/matricula.action'

import {useSelector,useDispatch} from 'react-redux'

const Matricula = () => { 

   const matriculaRef = useRef([]) 
   const dispatch = useDispatch() 
   const userState  =  useSelector(state => state.authReducer)

   const {
      alumnosFullList,
   } = useSelector(state => state.matriculaReducer)

   if(alumnosFullList === 0){
      getMatriculaActivo(userState.token).then((res) =>{
         dispatch(updateAlumnoFullList(res.data))
      })
   }

   return ( 
      <>
         {alumnosFullList.length === 0 ? 
            <LoadingSpinner/>
            :
            <>
               <ModalEditAlumno/>
               <ModalEditRegistroSalud/>
               <ModalEditObservaciones/>
               <ModalConfirmUpdateData/>
               <SelectFormStage1
                  matriculaRef={matriculaRef}
                  />
               <SelectFormStage2
                  matriculaRef={matriculaRef}
                  />
               <TableAlumnosMatricula/>
            </>
         }
      </>
   )
}
export default Matricula
