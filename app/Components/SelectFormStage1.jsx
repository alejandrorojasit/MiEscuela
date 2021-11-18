import {
   Form,
   Row,
   Col,
   Button
} 
from 'react-bootstrap'

import {
   handleNivelChange,
   handleGradoChange,
   handleDivisionChange,
   handleClickApplyFilter,
   handleClickLimpiarFiltros,
   handleClickLimpiarFiltrosStage1,
} 
from './Logic/matriculaLogic'

const SelectFormStage1 = ({
   nivelState,
   gradoState,
   divisionState,
   setNivel,
   setGrado,
   setDivision,
   matriculaRef,
   datosAlumno,
   setIsFiltredStage1,
   setFiltredDatosAlumnoStage1,
   setIsFiltredStage2,
   setFiltredDatosAlumnoStage2,
   context,
}) => { 

   const {grado,nivel,division} = context.stateHardCodeData.hardCodeData

   return ( 
      <Form>
         <Row 
            className='m-2 border border-primary p-1 pt-3 pb-3'
         >
            <Col>
               <Form.Select 
                  aria-label='Nivel' 
                  onChange={(event) => handleNivelChange(
                     event,
                     setNivel
                  )} 
                  ref={(element) => matriculaRef.current[0] = element}
               >
                  <option>Nivel</option>
                  {nivel.map((dataMap)=>
                  <option 
                     value={dataMap} 
                     key={dataMap}
                  >
                     {dataMap}
                  </option>
                  )}
               </Form.Select>
            </Col>
            <Col>
               <Form.Select 
                  aria-label='Grado/Año' 
                  onChange={(event) => handleGradoChange(
                     event,
                     setGrado
                  )} 
                  ref={(element) => matriculaRef.current[1] = element}
               >
                  <option>Grado/Año</option>
                  {grado.map((dataMap)=>
                  <option 
                     value={dataMap} 
                     key={dataMap}
                  >
                     {dataMap}
                  </option>
                  )}
               </Form.Select>
            </Col>
            <Col>
               <Form.Select 
                  aria-label='Division' 
                  onChange={(event) => handleDivisionChange(
                     event,
                     setDivision
                  )} 
                  ref={(element) => matriculaRef.current[2] = element}
               >
                  <option>Division</option>
                  {division.map((dataMap)=>
                  <option 
                     value={dataMap} 
                     key={dataMap}
                  >
                     {dataMap}
                  </option>
                  )}
               </Form.Select>       
            </Col>
            <Row 
               className='mt-2'
            >
               <Col 
                  className='d-inline-flex justify-content-end'
               >
                  <Button 
                     className='m-2'
                     variant='outline-primary'
                     size='sm' 
                     onClick={()=> handleClickApplyFilter(
                        nivelState,
                        gradoState,
                        divisionState,
                        datosAlumno,
                        setIsFiltredStage1,
                        setFiltredDatosAlumnoStage1
                     )}>
                     Aplicar
                  </Button>
                  <Button 
                     className='m-2' 
                     variant='outline-primary' 
                     size='sm' 
                     onClick={()=> handleClickLimpiarFiltrosStage1(
                        setIsFiltredStage1,
                        setIsFiltredStage2,
                        setFiltredDatosAlumnoStage1,
                        setFiltredDatosAlumnoStage2,
                        matriculaRef,
                        setNivel,
                        setGrado,
                        setDivision,
                     )}>
                     Limpiar Filtros
                  </Button>
               </Col>
            </Row>
         </Row>
      </Form>
   )
}
export default SelectFormStage1


