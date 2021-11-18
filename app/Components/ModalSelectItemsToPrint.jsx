import {useRef} from 'react'
import {
   Modal,
   Button,
} from 'react-bootstrap'

import LoadingSpinner from './LoadingSpinner.jsx'

const handleClickModal = (
   ratificacionesRef,
   setSelectedItems,
   setShowModalItemsToPrint,
   datosRatificacion2,
   setShowModalPdf,
   setIsRender,
) => {
   let selected = []
   for(var i = 0 ; i < ratificacionesRef.current.length ; i++){
      if (ratificacionesRef.current[i].children[0].checked === true){
         selected = [...selected,Object.keys(datosRatificacion2)[i]]
         setSelectedItems(selected)
      }else{
         selected = [...selected,'']
         setSelectedItems(selected)
      }
   }
   console.log(selected)
   setIsRender(true)
   setShowModalItemsToPrint(false)
   setShowModalPdf(true)
   alert('Una gran cantidad de datos debe ser procesada, esto puede demorar hasta 1 minuto , presione aceptar para continuar')
}

const ModalSelectItemsToPrint = ({
   showModalItemsToPrint,
   setShowModalItemsToPrint,
   setSelectedItems,
   setShowModalPdf,
   setIsRender,
   isRender,
   context
}) => { 
   const handleClose = () => setShowModalItemsToPrint(false)
   const handleShow = () => setShowModalItemsToPrint(true)
   const datosRatificacion2 =  context.stateHardCodeData.hardCodeData.datosRatificacion2
   const ratificacionesRef = useRef([])
   return ( 
      <Modal 
         show={showModalItemsToPrint} 
         onHide={handleClose}
      >
         <Modal.Header>
            <Modal.Title>Seleccionar que datos desea imprimir</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            {isRender ? 
               <LoadingSpinner/>
               :
                  Object.values(datosRatificacion2).map((dato,index) => 
                  <div 
                     className='form-check' 
                     key={dato.label} 
                     ref={(element) => {ratificacionesRef.current[index] = element}}
                  >
                     <input 
                        className='form-check-input' 
                        type='checkbox' 
                        value='' 
                        defaultChecked={dato.isTrue}/
                     >
                     <label 
                        className='form-check-label' 
                        htmlFor='flexCheckChecked'
                     >
                        {dato.label}
                     </label>
                  </div>
                  )}
         </Modal.Body>
         <Modal.Footer>
            <Button 
               variant='outline-primary' 
               size='sm'
               onClick={()=> handleClickModal(
                  ratificacionesRef,
                  setSelectedItems,
                  setShowModalItemsToPrint,
                  datosRatificacion2,
                  setShowModalPdf,
                  setIsRender,
               )}
            >
               Imprimir
            </Button>
         </Modal.Footer>
      </Modal>
   )
}
export default ModalSelectItemsToPrint
