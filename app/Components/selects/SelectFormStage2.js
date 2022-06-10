import {
   Form,
   Row,
   Col
} from 'react-bootstrap'

import {
   handleLastName,
   handleFirstName,
   handleEdad,
   handleEdad3006
} from '../logic/matriculaLogic'

import {colors} from '../../helpers/styleColors.js'

import {useSelector,useDispatch} from 'react-redux'

const SelectFormStage2 = ({
}) => { 

   const dispatch = useDispatch()

   const {
      isFiltredStage1,
      filtredDatosAlumnoStage1,
      nombreFilter,
      apellidoFilter,
      edadFilter,
      edad3006Filter,
   } = useSelector(state => state.selectFormStagesReducer)

   const {
      alumnosFullList
   } = useSelector(state => state.matriculaReducer)

   return ( 
      <Form
         style={{color:colors.darken}}
      >
         <Form.Group>
            <Row 
               className='mt-2'
            >
               <Col>
                  <Form.Label>
                     Filtrar por Apellido
                  </Form.Label>
                  <Form.Control 
                     style={{color:colors.darken}}
                     type='text' 
                     placeholder='Ingrese Apellido' 
                     onChange={
                     (event) => handleLastName(
                        event,
                        alumnosFullList,
                        isFiltredStage1,
                        filtredDatosAlumnoStage1,
                        dispatch
                     )} 
                     value={apellidoFilter}
                     />
               </Col>
               <Col>
                  <Form.Label>
                     Filtrar por Nombre
                  </Form.Label>
                  <Form.Control 
                     style={{color:colors.darken}}
                     type='text' 
                     placeholder='Ingrese Nombre' 
                     onChange={
                     (event) => handleFirstName(
                        event,
                        alumnosFullList,
                        isFiltredStage1,
                        filtredDatosAlumnoStage1,
                        dispatch
                     )} 
                     value={nombreFilter}
                     />
               </Col>
               <Col>
                  <Form.Label>
                     Filtrar por Edad (Real)
                  </Form.Label>
                  <Form.Control 
                     style={{color:colors.darken}}
                     type='text' 
                     placeholder='Seleccione Edad' 
                     onChange={
                     (event) => handleEdad(
                        event,
                        alumnosFullList,
                        isFiltredStage1,
                        filtredDatosAlumnoStage1,
                        dispatch
                     )} 
                     value={edadFilter}
                     />
               </Col>
               <Col>
                  <Form.Label>
                     Filtrar por Edad (al 30/06)
                  </Form.Label>
                  <Form.Control 
                     style={{color:colors.darken}}
                     type='text' 
                     placeholder='Seleccione Edad' 
                     onChange={
                     (event) => handleEdad3006(
                        event,
                        alumnosFullList,
                        isFiltredStage1,
                        filtredDatosAlumnoStage1,
                        dispatch
                     )} 
                     value={edad3006Filter}
                     />
               </Col>
            </Row>
         </Form.Group>
      </Form>
   )
}

export default SelectFormStage2

