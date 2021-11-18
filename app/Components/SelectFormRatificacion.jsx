import {
   Row,
   Col,
   DropdownButton,
   ButtonGroup,
   Button,
   Dropdown
} from 'react-bootstrap'

import {
   Nivel,
   Grado,
   Division
} from '../Helpers/HardCodeData.js'

import {
   handleClickNivel,
   handleClickGrado,
   handleClickDivision,
   generarInforme
} from './Logic/ratificacionLogic'


const SelectFormRatificacion = ({
   nivel,
   setNivel,
   grado,
   setGrado,
   division,
   setDivision,
   setDatosAlumno,
   setShowModalItems,
   context,
   matriculaRef,
}) => { 

   return ( 
      <>
         <Row> 
            <Col 
               className='d-flex justify-content-center'
            >
               

               <DropdownButton 
                  title={nivel}
                  as={ButtonGroup}
               >    
                  {Nivel.map(
                     (item) =>
                        <Dropdown.Item 
                           key={item} 
                           onClick={ () => handleClickNivel(
                              item,
                              setNivel
                           )}
                        >
                           {item}
                        </Dropdown.Item>

                  )}
               </DropdownButton>
            </Col>
            <Col 
               className='d-flex justify-content-center'
            >
               <DropdownButton 
                  title={grado}
                  as={ButtonGroup}
               >    
                  {Grado.map(
                     (item) =>
                        <Dropdown.Item 
                           key={item} 
                           onClick={ ()=> handleClickGrado(
                              item,
                              setGrado
                           )}
                        >
                           {item}
                        </Dropdown.Item>
                  )}
               </DropdownButton>   
            </Col>
            <Col 
               className='d-flex justify-content-center'
            >
               <DropdownButton 
                  title={division}
                  as={ButtonGroup}
               >    
                  {Division.map(
                     (item) =>
                        <Dropdown.Item 
                           key={item} 
                           onClick={()=> handleClickDivision(
                              item,
                              setDivision
                           )}
                        >
                           {item}
                        </Dropdown.Item>
                  )}
               </DropdownButton>  
            </Col>
            <Col 
               className='d-flex justify-content-center'>
               <Button 
                  onClick={()=> generarInforme(
                     setDatosAlumno,
                     setShowModalItems,
                     nivel,
                     division,
                     grado,
                     context
                  )}
               >Buscar</Button>
            </Col>
         </Row>
      </>
   )
}

export default SelectFormRatificacion

