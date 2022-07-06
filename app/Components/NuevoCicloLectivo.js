import {useState} from 'react'

import {
   Button,
   Row,
   Col,
   Container
} from 'react-bootstrap'

import ModalAlert from './modals/ModalAlert'
import ModalAlertSpinner from './modals/ModalAlertSpinner'
import ModalPromocionarMasivamente from './modals/ModalPromocionarMasivamente'

import {postCopyWholeDb} from '../hooks/postFetch.js'

import {copyWholeDb} from '../helpers/Urls.js'

import {
   modalAlert_updateModel,
   modalAlert_updateMessage,
   modalAlert_updateCallBack,
   modalAlert_updateStateShow
} from '../redux/actions/modalAlert.action'

import {
   setHardCodeData
} from '../redux/actions/hardCodeData.action'

import {
   setCurrentYear
} from '../redux/actions/autentication.action'

import {
   useSelector,
   useDispatch,
} from 'react-redux'

import {
   getHardCodeData,
   getCurrentYear,
} from '../hooks/getFetch'

const NuevoCicloLectivo = () => { 

   const messagePromocionarMasivamente = `El promocionar masivamente significa que se comenzara el proceso para modificar toda la base de datos para iniciar un nuevo ciclo lectivo. 
Todos los alumnos seran listados grado por grado y ud debera seleccionar cuales NO promocionaron satisfactoramente al nuevo ciclo. Todos aquellos que figuren en la lista seran promocionados automaticamente al curso superior. 
Ademas una observacion con la leyenda "Fue promovido satisfactoramente a: (curso)", se añadira al legajo del alumno. Aquellos alumnos que no sean promovidos no se alterara el curso y se agregara una observacion con la leyenda "No fue promocionado satisfactoramente".
Recuerde que debe realizar los otros cambios,como por ejemplo cambio de division o cualquier otra observacion,de forma manual alumno por alumno.
Esta operacion esta limitada segun el tipo de cuenta, esto quiere decir que el/la coordinador/a de nivel inicial o primario solo puede promocionar alumnos de ese nivel,excepto los alumnos que terminan un nivel y pasan a otros como por ejemplo de 6to de primario a 1ro de secundario.`

   const messageAlertSpinner=`Por favor espere.`

   const [showModalPromocionarMasivamente, setShowModalPromocionarMasivamente] = useState(false)

   const dispatch = useDispatch()

   const userState = useSelector(state=> state.authReducer)

   const callBackBackUpDatabse = async (isTrue) => {
      if(isTrue){
         dispatch(modalAlert_updateModel('Spinner'))
         dispatch(modalAlert_updateMessage(messageAlertSpinner))
         dispatch(modalAlert_updateStateShow())
         const dataRes = await postCopyWholeDb(
            userState,
            copyWholeDb
         )
         switch(dataRes.status){
            case 409:
               dispatch(modalAlert_updateModel('Alert'))
               dispatch(modalAlert_updateMessage(dataRes.data.message))
               dispatch(modalAlert_updateCallBack(()=>{}))
               dispatch(modalAlert_updateStateShow())
            case 201:
               const hardCodeData =  await getHardCodeData(userState.token)
               dispatch(setHardCodeData(hardCodeData.data[0]))
               const currenYear = await getCurrentYear()
               dispatch(setCurrentYear(currenYear.data))
               dispatch(modalAlert_updateStateShow())
            case 405:
               dispatch(modalAlert_updateStateShow())
               dispatch(modalAlert_updateMessage(dataRes.data.message))
               dispatch(modalAlert_updateCallBack(()=>{}))
               dispatch(modalAlert_updateModel('Alert'))
               dispatch(modalAlert_updateStateShow())
         }
      }
   }
   return (
      <Container>
            <ModalAlertSpinner/>
            <ModalAlert/>
         <Container
            className="mt-2 d-flex border border-success p-2"
         >
         <Row>
            <ModalPromocionarMasivamente
               stateShow={showModalPromocionarMasivamente}
               setStateShow={setShowModalPromocionarMasivamente}
               />
            <Col
               className='justify-content-start'
            >
               <Button
                  variant="outline-success"
                  size="sm"
                  onClick={() => {
                     dispatch(modalAlert_updateMessage(messagePromocionarMasivamente))
                     dispatch(modalAlert_updateModel('AcceptCancel'))
                     dispatch(modalAlert_updateCallBack((bool)=>callBackBackUpDatabse(bool)))
                     dispatch(modalAlert_updateStateShow())
                  }}
               >
                  Promocionar masivamente
               </Button>
            </Col>
         </Row>
         </Container>
      </Container>
   );
}

export default NuevoCicloLectivo
