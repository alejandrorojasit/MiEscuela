import {useState} from 'react'

import {
   Button,
   Row,
   Col,
   Container
} from 'react-bootstrap'

import {handleClickPromocionarMasivamente} from './Logic/administracionLogic.js'
import ModalAlert from './ModalAlert.jsx'
import ModalPromocionarMasivamente from './ModalPromocionarMasivamente.jsx'

import { getMatriculaCompleta } from '../Hooks/getFetch.js'
import {postCopyWholeDb} from '../Hooks/postFetch.js'
import useAuth from '../Context/Store/useAuth.jsx'

import {copyWholeDb} from '../Helpers/Urls.js'

const NuevoCicloLectivo = () => { 

   const messagePromocionarMasivamente = `El promocionar masivamente significa que se comenzara el proceso para modificar toda la base de datos para iniciar un nuevo ciclo lectivo. 
      Todos los alumnos seran listados grado por grado y ud debera seleccionar cuales NO promocionaron satisfactoramente al nuevo ciclo. Todos aquellos que figuren en la lista seran promocionados automaticamente al curso superior. 
      Ademas una observacion con la leyenda "Fue promovido satisfactoramente a: (curso)", se añadira al legajo del alumno. Aquellos alumnos que no sean promovidos no se alterara el curso y se agregara una observacion con la leyenda "No fue promocionado satisfactoramente".
      Recuerde que debe realizar los otros cambios,como por ejemplo cambio de division o cualquier otra observacion,de forma manual alumno por alumno.
      Esta operacion esta limitada segun el tipo de cuenta, esto quiere decir que el/la coordinador/a de nivel inicial o primario solo puede promocionar alumnos de ese nivel,excepto los alumnos que terminan un nivel y pasan a otros como por ejemplo de 6to de primario a 1ro de secundario.`
      
   const [showModalAlert,setShowModalAlert] = useState(false)
   const [showModalPromocionarMasivamente, setShowModalPromocionarMasivamente] = useState(false)
   const context = useAuth()

   const callBack = (isTrue) => {
      if(isTrue){
         getMatriculaCompleta(context.stateUser.token).then((res)=>{
            postCopyWholeDb(context.stateUser.token,res.data,copyWholeDb).then((res)=>{
               if(res.status === 200){
                  setShowModalPromocionarMasivamente(true)
               }
            })
         })
      }else{
      }
   }

      return (
        <Container className="mt-2 d-flex justify-content-center">
          <Row>
            <Col>
              <ModalAlert
                stateShow={showModalAlert}
                setStateShow={setShowModalAlert}
                message={messagePromocionarMasivamente}
                type={"alert"}
                callBack={callBack}
              />
            </Col>
            <Col>
              <ModalPromocionarMasivamente
                stateShow={showModalPromocionarMasivamente}
                setStateShow={setShowModalPromocionarMasivamente}
              />
            </Col>
            <Col>
              <Button
                variant="outline-success"
                size="sm"
                onClick={() => setShowModalAlert(!showModalAlert)}
              >
                Promocionar masivamente
              </Button>
            </Col>
          </Row>
        </Container>
      );
}

export default NuevoCicloLectivo
