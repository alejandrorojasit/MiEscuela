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
} from './Logic/matriculaLogic'

const SelectFormStage2 = ({
   datosAlumno,
   setIsFiltredStage1,
   setFiltredDatosAlumnoStage1,
   isFiltredStage1,
   filtredDatosAlumnoStage1,
   setFiltredDatosAlumnoStage2,
   setIsFiltredStage2,
   matriculaRef
}) => { 
   return ( 
      <Form>
         <Form.Group>
            <Row 
               className='m-2 p-1 border border-primary pb-3'
            >
               <Col>
                  <Form.Label>
                     Filtrar por Apellido
                  </Form.Label>
                  <Form.Control 
                     type='text' 
                     placeholder='Ingrese Apellido' 
                     onChange={
                        (event) => handleLastName(
                           event,
                           datosAlumno,
                           setIsFiltredStage1,
                           setFiltredDatosAlumnoStage1,
                           isFiltredStage1,
                           filtredDatosAlumnoStage1,
                           setFiltredDatosAlumnoStage2,
                           setIsFiltredStage2
                        )} 
                     ref={(element) => matriculaRef.current[3] = element}
                  />
               </Col>
               <Col>
                  <Form.Label>
                     Filtrar por Nombre
                  </Form.Label>
                  <Form.Control 
                     type='text' 
                     placeholder='Ingrese Nombre' 
                     onChange={
                        (event) => handleFirstName(
                           event,
                           datosAlumno,
                           setIsFiltredStage1,
                           setFiltredDatosAlumnoStage1,
                           isFiltredStage1,
                           filtredDatosAlumnoStage1,
                           setFiltredDatosAlumnoStage2,
                           setIsFiltredStage2
                        )} 
                     ref={(element) => matriculaRef.current[4] = element}
                  />
               </Col>
               <Col>
                  <Form.Label>
                     Filtrar por Edad (Real)
                  </Form.Label>
                  <Form.Control 
                     type='text' 
                     placeholder='Seleccione Edad' 
                     onChange={
                        (event) => handleEdad(
                           event,
                           datosAlumno,
                           setIsFiltredStage1,
                           setFiltredDatosAlumnoStage1,
                           isFiltredStage1,
                           filtredDatosAlumnoStage1,
                           setFiltredDatosAlumnoStage2,
                           setIsFiltredStage2
                        )} 
                     ref={(element) => matriculaRef.current[5] = element}
                  />
               </Col>
               <Col>
                  <Form.Label>
                     Filtrar por Edad (al 30/06)
                  </Form.Label>
                  <Form.Control 
                     type='text' 
                     placeholder='Seleccione Edad' 
                     onChange={(event) => handleEdad3006(
                        event,
                        datosAlumno,
                        setIsFiltredStage1,
                        setFiltredDatosAlumnoStage1,
                        isFiltredStage1,
                        filtredDatosAlumnoStage1,
                        setFiltredDatosAlumnoStage2,
                        setIsFiltredStage2
                     )} 
                     ref={(element) => matriculaRef.current[6] = element}
                  />
               </Col>
            </Row>
         </Form.Group>
      </Form>
   )
}

export default SelectFormStage2

