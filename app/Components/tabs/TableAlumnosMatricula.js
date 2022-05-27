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
   setAlumnoEditModal,
}) => { 

   const dispatch = useDispatch()

   const context =  useSelector(state => state.authReducer)

   const {
      isFiltredStage2,
      filtredDatosAlumnoStage1,
      filtredDatosAlumnoStage2,
   } =  useSelector(state => state.selectFormStagesReducer)

   return ( 
      <>
         <Row 
            className='mt-2 p-1 border border-success'
            style={{color:colors.darken}}
         >
            <Col 
               className='d-flex justify-content-center'
            >
               Cantidad de registros:
            </Col>
            <Col 
               className='d-flex justify-content-center'
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
            style={{marginTop:10}}
         >
            <Col
            >
               <Table 
                  bordered 
                  striped 
                  hover 
                  size="sm"
                  style={{color:colors.darken}}
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
                                             setAlumnoEditModal,
                                             dispatch,
                                             context
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
                                             setAlumnoEditModal,
                                             dispatch,
                                             context
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

