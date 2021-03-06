import {
   useState,
   useEffect
} from 'react'

import { 
   Modal,
   Container,
   Row,
   Col,
   Button
} from 'react-bootstrap'

import {getMatriculaActivo} from '../../hooks/getFetch'

import {useSelector} from 'react-redux'

const ModalPromocionarMasivamente = ({
   stateShow,
   setStateShow
}) => { 

   const [matricula,setMatricula]  = useState([])
   const [nivel,setNivel] = useState(null)
   const [division,setDivision] = useState('A')
   const [grado,setGrado] = useState(1)

   const userState = useSelector(state =>  state.authReducer)

   const handleClose = () => setStateShow(false)
      return ( 
         <Modal
            show={stateShow}
            onHide={()=> handleClose()}
            fullscreen={true}
         > 
            <Modal.Header
               closeButton
            >
               Promocionar masivamente: {}
            </Modal.Header>
            <Modal.Footer>
               <Button
                  variant='outline-success'
                  size='sm'
               >
                    Aceptar 
               </Button>
            </Modal.Footer>
         </Modal>
                )
}

export default ModalPromocionarMasivamente
