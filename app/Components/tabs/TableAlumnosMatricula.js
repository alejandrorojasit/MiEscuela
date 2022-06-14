import {
   Row,
   Col,
   Table,
   Button,
} from 'react-bootstrap'

import {
   ageCalculate3006,
   splitDate
} from '../logic/dateHandler'

import {
handleEdit,
} from '../logic/matriculaLogic'

import {FaUserEdit} from 'react-icons/fa'

import {colors} from '../../helpers/styleColors.js'

import {useDispatch,useSelector} from 'react-redux'

const TableAlumnosMatricula = ({
}) => { 

   const dispatch = useDispatch()

   const userState =  useSelector(state => state.authReducer)

   const {
      isFiltredStage2,
      filtredDatosAlumnoStage1,
      filtredDatosAlumnoStage2,
   } =  useSelector(state => state.selectFormStagesReducer)

   return ( 
      <>
         <Row 
            style={{color:colors.darken}}
            className='mt-2'
         >
            <Col 
               className='d-flex justify-content-center'
            >
               Cantidad de registros:
            </Col>
            <Col 
               className='d-flex justify-content-center text-danger'
            >
               {
                  !isFiltredStage2 ? 
                     filtredDatosAlumnoStage1.length 
                     :
                     filtredDatosAlumnoStage2.length
               }
            </Col>
         </Row>
         <Row 
            className='mt-2'
         >
            <Col
            >
               <Table 
                  bordered 
                  striped 
                  hover 
                  size="sm"
                  style={{color:colors.darken}}
                  className='mt-2'
               >
                  <thead
                  >
                     <tr
                     >
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>DNI</th>
                        <th>Nivel</th>
                        <th>Grado</th>
                        <th>Division</th>
                        <th>Edad</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        !isFiltredStage2 ? 
                           filtredDatosAlumnoStage1.map(
                              (dataMap) =>
                                 <tr 
                                    key={dataMap._id}
                                 >
                                    <th>
                                       <Button 
                                          variant='outline-success'
                                          onClick={()=> handleEdit(
                                             dataMap._id,
                                             dispatch,
                                             userState
                                          )}
                                       >
                                          <FaUserEdit/>
                                       </Button>
                                    </th>
                                    <th>{dataMap.nombre}</th>
                                    <th>{dataMap.apellido}</th>
                                    <th>{dataMap.nDniAlumno}</th>
                                    <th>{dataMap.nivel}</th>
                                    <th>{dataMap.grado}</th>
                                    <th>{dataMap.division}</th>
                                    <th>{
                                          ageCalculate3006(
                                             splitDate(
                                                dataMap.fechaNacimiento,
                                                3
                                             ))}
                                    </th>
                                 </tr>
                           ):
                           filtredDatosAlumnoStage2.map(
                              (dataMap) =>
                                 <tr 
                                    key={dataMap._id}
                                 >
                                    <th>
                                       <Button 
                                          variant='outline-success'
                                          onClick={()=> handleEdit(
                                             dataMap._id,
                                             dispatch,
                                             userState
                                          )}
                                       >
                                          <FaUserEdit/>
                                       </Button>
                                    </th>
                                    <th>{dataMap.nombre}</th>
                                    <th>{dataMap.apellido}</th>
                                    <th>{dataMap.nDniAlumno}</th>
                                    <th>{dataMap.nivel}</th>
                                    <th>{dataMap.grado}</th>
                                    <th>{dataMap.division}</th>
                                    <th>{
                                       ageCalculate3006(
                                          splitDate(
                                             dataMap.fechaNacimiento,
                                             3
                                       ))}
                                    </th>
                                 </tr>
                           )}   
                  </tbody>
               </Table>
            </Col>
         </Row>
      </>
   )
}

export default TableAlumnosMatricula

