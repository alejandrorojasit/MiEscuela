import {
   useState,
   useEffect,
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

import {Container} from 'react-bootstrap'

import {getMatriculaActivo} from '../hooks/getFetch.js'

import{
   updateAlumnoFullList,
} from '../redux/actions/matricula.action'

import {useSelector,useDispatch} from 'react-redux'

const Matricula = () => { 

   const [alumnoEditModal,setAlumnoEditModal] = useState(false)
   const [showModalUpdate,setShowModalUpdate] = useState(false)

   const [updatedData,setUpdatedData] = useState({})

   const [switchEdit,setSwitchEdit] = useState(true)

   const [nuevaObservacionState,setNuevaObservacion] = useState('')

   const [showModalEditObservaciones,setShowModalEditObservaciones] = useState(false)
   const [showModalEditRegistroSalud,setShowModalEditRegistroSalud] = useState(false)
   const [nuevoRegistroSalud,setNuevoRegistroSalud] = useState('')

   const matriculaRef = useRef([]) 
   const dispatch = useDispatch() 
   const userState  =  useSelector(state => state.authReducer)

   const {
      alumnosFullList,
   } = useSelector(state => state.matriculaReducer)

   useEffect(()=> {
      getMatriculaActivo(userState.token).then((res) =>{
         dispatch(updateAlumnoFullList(res.data))
      }
      ); 
   },[])

   return ( 
      <Container
      >
         {alumnosFullList.length === 0 ? 
            <LoadingSpinner/>
            :
            <>
               <ModalEditAlumno
                  alumnoEditModal={alumnoEditModal}
                  setAlumnoEditModal={setAlumnoEditModal}
                  setShowModalUpdate={setShowModalUpdate}
                  setUpdatedData={setUpdatedData}
                  switchEdit={switchEdit}
                  setSwitchEdit={setSwitchEdit}
                  showModalEditObservaciones={showModalEditObservaciones}
                  setShowModalEditObservaciones={setShowModalEditObservaciones}
                  setShowModalEditRegistroSalud={setShowModalEditRegistroSalud}
               />
               <ModalEditRegistroSalud
                  nuevoRegistroSalud={nuevoRegistroSalud}
                  setNuevoRegistroSalud={setNuevoRegistroSalud}
                  showModalEditRegistroSalud={showModalEditRegistroSalud}
                  setShowModalEditRegistroSalud={setShowModalEditRegistroSalud}
               />
               <ModalEditObservaciones
                  setShowModalEditObservaciones={setShowModalEditObservaciones}
                  showModalEditObservaciones={showModalEditObservaciones}
                  setNuevaObservacion={setNuevaObservacion}
                  nuevaObservacionState={nuevaObservacionState}
               />
               <ModalConfirmUpdateData 
                  showModalUpdate={showModalUpdate}
                  updatedData={updatedData}
                  setShowModalUpdate={setShowModalUpdate}
                  alumnoEditModal={alumnoEditModal}
                  setAlumnoEditModal={setAlumnoEditModal}
                  switchEdit={switchEdit}
                  setSwitchEdit={setSwitchEdit}
               />
               <SelectFormStage1
                  matriculaRef={matriculaRef}
               />
               <SelectFormStage2
                  matriculaRef={matriculaRef}
               />
               <TableAlumnosMatricula
                  setAlumnoEditModal={setAlumnoEditModal}
                  switchEdit={switchEdit}
                  setSwitchEdit={setSwitchEdit}
               />
            </>
         }
      </Container>
   )
}
export default Matricula
