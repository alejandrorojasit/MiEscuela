import {
   Container,
   Col,
   Row,
   Button,
} from 'react-bootstrap'

import {
   handleFinCicloLectivo
} from './logic/finCicloLectivoLogic'

import {
   useSelector,
   useDispatch,
} from 'react-redux'

import {
   finDeCicloLectivoUrl
} from '../helpers/Urls'

import {
   DecodeToken
} from './logic/tokenhandler'

import ModalAlert from './modals/ModalAlert'

const FinCicloLectivo = () => {

   const dispatch = useDispatch()

   const userState = useSelector(state => state.authReducer)

   const sealedDatabase =  useSelector(state => state.sealedDatabaseReducer)

   return (
      <Container>
         <Container
            className="mt-2 border border-success p-2"
         >
            <ModalAlert/>
            <Row>
               <Col
                  className='d-flex justify-content-center h1'
               >
                  Matricula año {userState.currentYear}
               </Col>
            </Row>
            <Row>
               <Col
                  className='d-flex justify-content-center h3 mt-2'
               >
                  Estado de la matricula:
               </Col>
            </Row>
            <Container>
               <Row
                  className='border border-success'
               >
                  <Col
                     className='d-flex justify-content-center h5 mt-2'
                  >
                     Nivel Inicial y primario:
                  </Col>
                  <Col
                     className='d-flex justify-content-center h5 mt-2'
                  >
                     {
                     sealedDatabase.isSealedIniPrim === true ? 
                        'Sellada'
                        :
                        'Sin sellar'
                  }
                  </Col>
               </Row>
               <Row
                  className='border border-success mt-2'
               >
                  <Col
                     className='d-flex justify-content-center h5 mt-2'
                  >
                     Nivel secundario:
                  </Col>
                  <Col
                     className='d-flex justify-content-center h5 mt-2'
                  >
                     {
                     sealedDatabase.isSealedSecu === true ? 
                        'Sellada'
                        :
                        'Sin sellar'
                  }
                  </Col>
               </Row>
               <Row>
                  <Col
                     className='d-flex justify-content-end mt-2'
                  >
                     <Button
                        variant='outline-success' 
                        size='sm'
                        onClick={()=> handleFinCicloLectivo(
                           userState,
                           finDeCicloLectivoUrl,
                           DecodeToken(userState).usuario.role,
                           sealedDatabase,
                           dispatch
                        )}
                     >
                        Fin de ciclo lectivo
                     </Button>
                  </Col>
               </Row>
            </Container>

         </Container>
      </Container>
   )
}

export default FinCicloLectivo
