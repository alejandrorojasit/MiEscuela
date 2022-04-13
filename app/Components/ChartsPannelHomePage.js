import {useEffect,useState} from 'react'
import {Chart} from 'react-google-charts'
import {getMatriculaActivo} from '../Hooks/getFetch'
import {
   Container,
   Col,
   Row
} from 'react-bootstrap'
import useAuth from '../Context/Store/useAuth'

const ChartsPannelHomePage = () => { 
   const context = useAuth()
   const [ data,setData ] = useState([]);

   useEffect(async ()=>{
      const res = await getMatriculaActivo(context.stateUser.token) 
      if(res.status === 200){
         setData(res.data) 
      }
   },[])

   const varonesMatriculaCompleta = data.filter((valor)=> valor.sexo === "Masculino")
   const mujeresMatriculaCompleta =  data.filter((valor)=> valor.sexo === "Femenino")

   const varonesMatriculaInicial =  data.filter((valor)=> valor.sexo === "Masculino" && valor.nivel === "Inicial")
   const mujeresMatriculaInicial =  data.filter((valor)=> valor.sexo === "Femenino" && valor.nivel === "Inicial")
   const totalNivelInicial = data.filter((valor)=> valor.nivel === "Inicial")

   const varonesMatriculaPrimario =  data.filter((valor)=> valor.sexo === "Masculino" && valor.nivel === "Primario")
   const mujeresMatriculaPrimario =  data.filter((valor)=> valor.sexo === "Femenino" && valor.nivel === "Primario")
   const totalNivelPrimario = data.filter((valor)=> valor.nivel === "Primario")

   const varonesMatriculaSecundario =  data.filter((valor)=> valor.sexo === "Masculino" && valor.nivel === "Secundario")
   const mujeresMatriculaSecundario =  data.filter((valor)=> valor.sexo === "Femenino" && valor.nivel === "Secundario")
   const totalNivelSecundario = data.filter((valor)=> valor.nivel === "Secundario")

   const dataMatriculaCompleta = [
      ["Sexo","Cantidad"],
      ["Varones", varonesMatriculaCompleta.length],
      ["Mujeres", mujeresMatriculaCompleta.length]
   ]
   const optionsMatriculaCompleta = {
      title:`Cantidad de alumnos en total: ${data.length}`,
      pieHole:0.4,
      is3D:false,
   }

   const dataMatriculaInicial = [
      ["Sexo","Cantidad"],
      ["Varones", varonesMatriculaInicial.length],
      ["Mujeres", mujeresMatriculaInicial.length]
   ]
   const optionsMatriculaInicial = {
      title:`Cantidad de alumnos en total inicial: ${totalNivelInicial.length}`,
      pieHole:0.4,
      is3D:false,
   }

   const dataMatriculaPrimario = [
      ["Sexo","Cantidad"],
      ["Varones", varonesMatriculaPrimario.length],
      ["Mujeres", mujeresMatriculaPrimario.length]
   ]
   const optionsMatriculaPrimario = {
      title:`Cantidad de alumnos en total primario: ${totalNivelPrimario.length}`,
      pieHole:0.4,
      is3D:false,
   }

   const dataMatriculaSecundario = [
      ["Sexo","Cantidad"],
      ["Varones", varonesMatriculaSecundario.length],
      ["Mujeres", mujeresMatriculaSecundario.length]
   ]
   const optionsMatriculaSecundario = {
      title:`Cantidad de alumnos en total secundario: ${totalNivelSecundario.length}`,
      pieHole:0.4,
      is3D:false,
   }

   return ( 
      <Container
         className={'border border-success mb-4'}
      >
         <Row>
            <Col>
               <Chart
                  chartType='PieChart'
                  height='400px'
                  data={dataMatriculaCompleta}
                  options={optionsMatriculaCompleta}
               />           
            </Col>
            <Col>   
               <Chart
                  chartType='PieChart'
                  height='400px'
                  data={dataMatriculaInicial}
                  options={optionsMatriculaInicial}
               />  
            </Col>
         </Row>
         <Row>
            <Col>
               <Chart
                  chartType='PieChart'
                  height='400px'
                  data={dataMatriculaPrimario}
                  options={optionsMatriculaPrimario}
               />           
            </Col>
            <Col>   
               <Chart
                  chartType='PieChart'
                  height='400px'
                  data={dataMatriculaSecundario}
                  options={optionsMatriculaSecundario}
               />  
            </Col>

         </Row>
      </Container>
   )
}

export default ChartsPannelHomePage
