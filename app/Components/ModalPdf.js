import {Modal} from 'react-bootstrap'

import InformeRatificacionPrimariaPdf from './InformeRatificacionPrimariaPdf'
import InformeRatificacionSecundariaPDf from './InformeRatificacionSecundariaPdf'
import LoadingSpinner from './LoadingSpinner'

import {handleClickLimpiarFiltrosStage1} from './Logic/matriculaLogic.js'

import {colors} from '../Helpers/styleColors'

const ModalPdf = ({
   selectedItems,
   showModalPdf,
   setShowModalPdf,
   filtredDatosAlumnoStage1,
   setIsRender,
   modelo,
   isRender,
   setIsFiltredStage1,
   setIsFiltredStage2,
   setFiltredDatosAlumnoStage1,
   setFiltredDatosAlumnoStage2,
   matriculaRef,
   setNivel,
   setGrado,
   setDivision,
   setSelectedItems,
}) => {

   const handleClose = () => {
      setShowModalPdf(false)
      handleClickLimpiarFiltrosStage1(
         setIsFiltredStage1,
         setIsFiltredStage2,
         setFiltredDatosAlumnoStage1,
         setFiltredDatosAlumnoStage2,
         matriculaRef,
         setNivel,
         setGrado,
         setDivision,
         setSelectedItems,
      )
   }

   return (
      <Modal 
         show={showModalPdf} 
         fullscreen={true} 
         onHide={handleClose}
      >
         <Modal.Header 
            closeButton
         >
         </Modal.Header>
         <Modal.Body
         >
            {isRender ? 
               <LoadingSpinner/>
               :
                  null
            }
            {modelo === 'Primario' ? 
               <InformeRatificacionPrimariaPdf
                  selectedItems={selectedItems}
                  filtredDatosAlumnoStage1={filtredDatosAlumnoStage1}
                  setIsRender={setIsRender}
               />
               :
               <InformeRatificacionSecundariaPDf
                  selectedItems={selectedItems}
                  filtredDatosAlumnoStage1={filtredDatosAlumnoStage1}
                  setIsRender={setIsRender}
               />
            }
         </Modal.Body>
      </Modal>
   )
}
export default ModalPdf
