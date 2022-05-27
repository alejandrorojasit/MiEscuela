import {Modal} from 'react-bootstrap'

import InformeRatificacionPrimariaPdf from '../reports/InformeRatificacionPrimariaPdf'
import InformeRatificacionSecundariaPDf from '../reports/InformeRatificacionSecundariaPdf'
import LoadingSpinner from '../spinners/LoadingSpinner'

import {handleClickLimpiarFiltrosStage1} from '../logic/matriculaLogic.js'

import {colors} from '../../helpers/styleColors'

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
