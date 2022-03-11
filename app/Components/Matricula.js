import {
   useState,
   useEffect,
   useRef
} from 'react'
import ModalEditAlumno from './ModalEditAlumno'
import ModalEditObservaciones from './ModalEditObservaciones'
import ModalEditRegistroSalud from './ModalEditRegistroSalud'
import SelectFormStage1 from './SelectFormStage1'
import SelectFormStage2 from './SelectFormStage2'
import TableAlumnosMatricula from './TableAlumnosMatricula'
import LoadingSpinner from './LoadingSpinner'
import ModalConfirmUpdateData from './ModalConfirmUpdateData'

import {Container} from 'react-bootstrap'

import {getMatriculaActivo,getHardCodeData} from '../Hooks/getFetch.js'

import {
   handleGetDataAlumno,
   changeEntireDataBaseToLowerCase
} from './Logic/matriculaLogic.js'

import useAuth from '../Context/Store/useAuth'

const Matricula = () => { 

   const [dataAlumno,setDataAlumno] = useState({})
   const [datosAlumno,setDatosAlumno] = useState([])
   const [isFiltredStage1,setIsFiltredStage1] = useState(false)
   const [isFiltredStage2,setIsFiltredStage2] = useState(false)
   const [filtredDatosAlumnoStage1,setFiltredDatosAlumnoStage1] = useState([])
   const [filtredDatosAlumnoStage2,setFiltredDatosAlumnoStage2] = useState([])
   const [selectedAlumnoForEdit,setSelectedAlumnoForEdit] = useState('')
   const [gradoState,setGrado] = useState('Grado/Año')
   const [divisionState, setDivision] = useState('Division')
   const [nivelState,setNivel] = useState('Nivel')
   const [alumnoEditModal,setAlumnoEditModal] = useState(false)
   const [showModalUpdate,setShowModalUpdate] = useState(false)
   const [updatedData,setUpdatedData] = useState({})
   const [switchEdit,setSwitchEdit] = useState(true)
   const [nuevaObservacionState,setNuevaObservacion] = useState('')
   const [showModalEditObservaciones,setShowModalEditObservaciones] = useState(false)
   const [showModalEditRegistroSalud,setShowModalEditRegistroSalud] = useState(false)
   const [nuevoRegistroSalud,setNuevoRegistroSalud] = useState('')
   const matriculaRef = useRef([]) 
   const context  =  useAuth()

   useEffect(()=> {
      getMatriculaActivo(context.stateUser.token).then((res) =>{
         setDatosAlumno(res.data)
      }
      ); 
   },[])

   useEffect(()=>{
      handleGetDataAlumno(
         context,
         selectedAlumnoForEdit,
         setDataAlumno,
      )
   },[selectedAlumnoForEdit])
   return ( 
      <Container
      >
         {datosAlumno.length === 0 ? 
            <LoadingSpinner/>
            :
            <>
               <ModalEditAlumno
                  dataAlumno={dataAlumno}
                  alumnoEditModal={alumnoEditModal}
                  setAlumnoEditModal={setAlumnoEditModal}
                  selectedAlumnoForEdit={selectedAlumnoForEdit}
                  setShowModalUpdate={setShowModalUpdate}
                  setUpdatedData={setUpdatedData}
                  setDataAlumno={setDataAlumno}
                  setSelectedAlumnoForEdit={setSelectedAlumnoForEdit}
                  switchEdit={switchEdit}
                  setSwitchEdit={setSwitchEdit}
                  showModalEditObservaciones={showModalEditObservaciones}
                  setShowModalEditObservaciones={setShowModalEditObservaciones}
                  setDataAlumno={setDataAlumno}
                  selectedAlumnoForEdit={selectedAlumnoForEdit}
                  setShowModalEditRegistroSalud={setShowModalEditRegistroSalud}
               />
               <ModalEditRegistroSalud
                  nuevoRegistroSalud={nuevoRegistroSalud}
                  setNuevoRegistroSalud={setNuevoRegistroSalud}
                  context={context}
                  dataAlumno={dataAlumno}
                  selectedAlumnoForEdit={selectedAlumnoForEdit}
                  setDataAlumno={setDataAlumno}
                  showModalEditRegistroSalud={showModalEditRegistroSalud}
                  setShowModalEditRegistroSalud={setShowModalEditRegistroSalud}
               />
               <ModalEditObservaciones
                  setShowModalEditObservaciones={setShowModalEditObservaciones}
                  showModalEditObservaciones={showModalEditObservaciones}
                  setNuevaObservacion={setNuevaObservacion}
                  nuevaObservacionState={nuevaObservacionState}
                  dataAlumno={dataAlumno}
                  setDataAlumno={setDataAlumno}
                  selectedAlumnoForEdit={selectedAlumnoForEdit}
                  context={context}
               />
               <ModalConfirmUpdateData 
                  dataAlumno={dataAlumno}
                  datosAlumno={datosAlumno}
                  showModalUpdate={showModalUpdate}
                  updatedData={updatedData}
                  setShowModalUpdate={setShowModalUpdate}
                  alumnoEditModal={alumnoEditModal}
                  setAlumnoEditModal={setAlumnoEditModal}
                  switchEdit={switchEdit}
                  setSwitchEdit={setSwitchEdit}
                  setSelectedAlumnoForEdit={setSelectedAlumnoForEdit}
                  setDataAlumno={setDataAlumno}
                  selectedAlumnoForEdit={selectedAlumnoForEdit}
               />
               <SelectFormStage1
                  context={context}
                  setGrado={setGrado}                     
                  gradoState={gradoState}
                  setDivision={setDivision}
                  divisionState={divisionState}
                  setNivel={setNivel}
                  nivelState={nivelState}
                  matriculaRef={matriculaRef}
                  datosAlumno={datosAlumno}
                  setIsFiltredStage1={setIsFiltredStage1}
                  setFiltredDatosAlumnoStage1={setFiltredDatosAlumnoStage1}
                  setIsFiltredStage2={setIsFiltredStage2}
                  setFiltredDatosAlumnoStage2={setFiltredDatosAlumnoStage2}
               />
               <SelectFormStage2
                  datosAlumno={datosAlumno}
                  setIsFiltredStage1={setIsFiltredStage1}
                  setFiltredDatosAlumnoStage1={setFiltredDatosAlumnoStage1}
                  isFiltredStage1={isFiltredStage1}
                  filtredDatosAlumnoStage1={filtredDatosAlumnoStage1}
                  setFiltredDatosAlumnoStage2={setFiltredDatosAlumnoStage2}
                  filtredDatosAlumnoStage2={filtredDatosAlumnoStage2}
                  setIsFiltredStage2={setIsFiltredStage2}
                  matriculaRef={matriculaRef}
               />
               <TableAlumnosMatricula
                  setSelectedAlumnoForEdit={setSelectedAlumnoForEdit}
                  selectedAlumnoForEdit={selectedAlumnoForEdit}
                  setAlumnoEditModal={setAlumnoEditModal}
                  isFiltredStage2={isFiltredStage2}
                  filtredDatosAlumnoStage1={filtredDatosAlumnoStage1}
                  filtredDatosAlumnoStage2={filtredDatosAlumnoStage2}
                  switchEdit={switchEdit}
                  setSwitchEdit={setSwitchEdit}
               />
            </>
         }
      </Container>
   )
}
export default Matricula