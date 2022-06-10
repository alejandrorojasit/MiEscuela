import {useEffect} from 'react'
import {Chart} from 'react-google-charts'
import {getMatriculaActivo} from '../../hooks/getFetch'
import {
   Container,
   Col,
   Row
} from 'react-bootstrap'

import {
   useSelector,
   useDispatch
} from 'react-redux'

import PieChartContentLoader from '../contetnLoaders/PieChartContentLoader'

import {
   updateAlumnoFullList
} from '../../redux/actions/matricula.action'

const ChartsPannelHomePage = () => { 

   const dispatch =  useDispatch()

   const userState = useSelector(state => state.authReducer)

   const {alumnosFullList} =  useSelector(state => state.matriculaReducer)

   useEffect(async ()=>{
      const res = await getMatriculaActivo(userState.token) 
      if(res.status === 200){
         dispatch(updateAlumnoFullList(res.data))
      }
   },[])

   const varonesMatriculaCompleta = alumnosFullList.filter((valor)=> valor.sexo === "Masculino")

   const mujeresMatriculaCompleta =  alumnosFullList.filter((valor)=> valor.sexo === "Femenino")

   const varonesMatriculaInicial =  alumnosFullList.filter((valor)=> valor.sexo === "Masculino" && valor.nivel === "Inicial")
   const mujeresMatriculaInicial =  alumnosFullList.filter((valor)=> valor.sexo === "Femenino" && valor.nivel === "Inicial")
   const totalNivelInicial = alumnosFullList.filter((valor)=> valor.nivel === "Inicial")

   const varonesMatriculaPrimario =  alumnosFullList.filter((valor)=> valor.sexo === "Masculino" && valor.nivel === "Primario")
   const mujeresMatriculaPrimario =  alumnosFullList.filter((valor)=> valor.sexo === "Femenino" && valor.nivel === "Primario")
   const totalNivelPrimario = alumnosFullList.filter((valor)=> valor.nivel === "Primario")

   const varonesMatriculaSecundario =  alumnosFullList.filter((valor)=> valor.sexo === "Masculino" && valor.nivel === "Secundario")
   const mujeresMatriculaSecundario =  alumnosFullList.filter((valor)=> valor.sexo === "Femenino" && valor.nivel === "Secundario")
   const totalNivelSecundario = alumnosFullList.filter((valor)=> valor.nivel === "Secundario")

   const dataMatriculaCompleta = [
      ["Sexo","Cantidad"],
      ["Mujeres", mujeresMatriculaCompleta.length],
      ["Varones", varonesMatriculaCompleta.length],
   ]
   const optionsMatriculaCompleta = {
      title:`Cantidad de alumnos en total: ${alumnosFullList.length}`,
      pieHole:0.4,
      is3D:false,
   }

   const dataMatriculaInicial = [
      ["Sexo","Cantidad"],
      ["Mujeres", mujeresMatriculaInicial.length],
      ["Varones", varonesMatriculaInicial.length],
   ]
   const optionsMatriculaInicial = {
      title:`Cantidad de alumnos en total inicial: ${totalNivelInicial.length}`,
      pieHole:0.4,
      is3D:false,
   }

   const dataMatriculaPrimario = [
      ["Sexo","Cantidad"],
      ["Mujeres", mujeresMatriculaPrimario.length],
      ["Varones", varonesMatriculaPrimario.length],
   ]
   const optionsMatriculaPrimario = {
      title:`Cantidad de alumnos en total primario: ${totalNivelPrimario.length}`,
      pieHole:0.4,
      is3D:false,
   }

   const dataMatriculaSecundario = [
      ["Sexo","Cantidad"],
      ["Mujeres", mujeresMatriculaSecundario.length],
      ["Varones", varonesMatriculaSecundario.length],
   ]
   const optionsMatriculaSecundario = {
      title:`Cantidad de alumnos en total secundario: ${totalNivelSecundario.length}`,
      pieHole:0.4,
      is3D:false,
   }

   return ( 
      <>
         <Row
         >
            <Col
               className='d-flex justify-content-center'
            >
               {
               alumnosFullList.length === 0 ?
                  <PieChartContentLoader/>
                  :
                  <Chart
                     width='99%'
                     height='400px'
                     chartType='PieChart'
                     data={dataMatriculaCompleta}
                     options={optionsMatriculaCompleta}
                     /> 
            }
            </Col>
            <Col
               className='d-flex justify-content-center'
            >
               {
               alumnosFullList.length === 0 ?
                  <PieChartContentLoader/>
                  :
                  <Chart
                     height='400px'
                     width='99%'
                     chartType='PieChart'
                     data={dataMatriculaInicial}
                     options={optionsMatriculaInicial}
                     /> 
            }
            </Col>
         </Row>
         <Row
         >
            <Col
               className='d-flex justify-content-center'
            >
               {
               alumnosFullList.length === 0 ?

                  <PieChartContentLoader/>
                  :
                  <Chart
                     width='99%'
                     height='400px'
                     chartType='PieChart'
                     data={dataMatriculaPrimario}
                     options={optionsMatriculaPrimario}
                     /> 
            }
            </Col>
            <Col
               className='d-flex justify-content-center'
            >
               {
               alumnosFullList.length === 0 ?
                  <PieChartContentLoader/>
                  :
                  <Chart
                     width='99%'
                     height='400px'
                     chartType='PieChart'
                     data={dataMatriculaSecundario}
                     options={optionsMatriculaSecundario}
                     /> 
            }
            </Col>
         </Row>
      </>
   )
}

export default ChartsPannelHomePage
