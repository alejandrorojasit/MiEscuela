import {useState,useRef,useEffect}  from "react";

import {Container} from 'react-bootstrap'

import ModalSelectItemsToPrint from './modals/ModalSelectItemsToPrint'
import ModalPdf from './modals/ModalPdf'
import TableRatificacion from './tabs/TableRatificacion'
import SelectFormStage1 from './selects/SelectFormStage1'
import LoadingSpinner from './spinners/LoadingSpinner'
import ModalModelPdfSelection from './modals/ModalModelPdfSelection'

import {getMatriculaActivo} from '../hooks/getFetch.js'

import {useSelector} from 'react-redux'

const Ratificacion = () => { 
   const [grado,setGrado] = useState('Grado/Año')
   const [isFiltredStage1,setIsFiltredStage1] = useState(false)
   const [filtredDatosAlumnoStage1,setFiltredDatosAlumnoStage1] = useState([])
   const [isFiltredStage2,setIsFiltredStage2] = useState(false)
   const [filtredDatosAlumnoStage2,setFiltredDatosAlumnoStage2] = useState([])
   const [division, setDivision] = useState('Division')
   const [nivel,setNivel] = useState('Nivel')
   const [datosAlumno,setDatosAlumno] = useState([])
   const [showModalItemsToPrint, setShowModalItemsToPrint] = useState(false)
   const [showModalPdf,setShowModalPdf] = useState(false)
   const [showModalPdfSelection,setShowModalPdfSelection] = useState(false)
   const [selectedItems, setSelectedItems] = useState([])
   const matriculaRef = useRef([]) 
   const [modelo,setModelo] = useState('')
   const [isRender , setIsRender] = useState(false)
   const context = useSelector(state => state.authReducer)

   useEffect(()=> {
      getMatriculaActivo(context.token).then((res)=> 
         setDatosAlumno(res.data)
      ) 
   },[])

   return ( 
      <>
         {datosAlumno.length === 0 ? 
            <LoadingSpinner/>
            :
            <Container 
               style={{marginTop: 10}}
            >
               <ModalSelectItemsToPrint
                  showModalItemsToPrint={showModalItemsToPrint}
                  setShowModalItemsToPrint={setShowModalItemsToPrint}
                  setSelectedItems={setSelectedItems}
                  setShowModalPdf={setShowModalPdf}
                  setIsRender={setIsRender}
                  isRender={isRender}
                  context={context}
               />
               <ModalPdf
                  isRender={isRender}
                  setIsRender={setIsRender}
                  setShowModalPdf={setShowModalPdf}
                  showModalPdf={showModalPdf}
                  selectedItems={selectedItems}
                  filtredDatosAlumnoStage1={filtredDatosAlumnoStage1}
                  modelo={modelo}
                  setIsFiltredStage1={setIsFiltredStage1}
                  setIsFiltredStage2={setIsFiltredStage2}
                  setFiltredDatosAlumnoStage1={setFiltredDatosAlumnoStage1}
                  setFiltredDatosAlumnoStage2={setFiltredDatosAlumnoStage2}
                  matriculaRef={matriculaRef}
                  setNivel={setNivel}
                  setGrado={setGrado}
                  setDivision={setDivision}
                  setSelectedItems={setSelectedItems}
               />
               <ModalModelPdfSelection
                  showModalPdfSelection={showModalPdfSelection}
                  setShowModalPdfSelection={setShowModalPdfSelection}
                  showModalItemsToPrint={showModalItemsToPrint}
                  setShowModalItemsToPrint={setShowModalItemsToPrint}
                  modelo={modelo}
                  setModelo={setModelo}
                  context={context}
               />
               <SelectFormStage1
                  setGrado={setGrado}                     
                  gradoState={grado}
                  setDivision={setDivision}
                  divisionState={division}
                  setNivel={setNivel}
                  nivelState={nivel}
                  matriculaRef={matriculaRef}
                  datosAlumno={datosAlumno}
                  setIsFiltredStage1={setIsFiltredStage1}
                  setFiltredDatosAlumnoStage1={setFiltredDatosAlumnoStage1}
                  setIsFiltredStage2={setIsFiltredStage2}
                  setFiltredDatosAlumnoStage2={setFiltredDatosAlumnoStage2}
                  context={context}
               />
               <TableRatificacion
                  filtredDatosAlumnoStage1={filtredDatosAlumnoStage1}
                  setFiltredDatosAlumnoStage1={setFiltredDatosAlumnoStage1}
                  selectedItems={selectedItems}
                  setShowModalPdfSelection={setShowModalPdfSelection}
               />
            </Container>
         }

      </>
   )
}
export default Ratificacion
