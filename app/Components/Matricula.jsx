import {
   useState,
   useEffect,
   useRef
} from 'react'
import ModalEditAlumno from './ModalEditAlumno.jsx'
import SelectFormStage1 from './SelectFormStage1.jsx'
import SelectFormStage2 from './SelectFormStage2.jsx'
import TableAlumnosMatricula from './TableAlumnosMatricula.jsx'
import LoadingSpinner from './LoadingSpinner.jsx'
import ModalUpdate from './ModalUpdate.jsx'

import {Container} from 'react-bootstrap'

import {getMatricula,getHardCodeData} from '../Hooks/getFetch.js'
import {handleGetDataAlumno} from './Logic/matriculaLogic.js'

import useAuth from '../Context/Store/useAuth.jsx'

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
   const matriculaRef = useRef([]) 
   const context  =  useAuth()

   useEffect(()=> {
      getMatricula(context.stateUser.token).then((res) =>{
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
               />
               <ModalUpdate 
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
