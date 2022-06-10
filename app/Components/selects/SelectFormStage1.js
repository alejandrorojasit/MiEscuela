import {
    Form,
    Row,
    Col,
    Button
} 
from 'react-bootstrap'

import {
    handleNivelChange,
    handleDivisionChange,
    handleClickApplyFilter,
    handleClickLimpiarFiltrosStage1,
} 
from '../logic/matriculaLogic'

import {colors} from '../../helpers/styleColors.js'

import SelectGradoAñoSala from './SelectGradoAñoSala'
import {useSelector,useDispatch} from 'react-redux'

const SelectFormStage1 = ({
    matriculaRef,
}) => { 

    const {
        nivel,
        division,
    } = useSelector(state => state.hardCodeDataReducer.hardCodeData)

    const {
        nivelState,
        gradoState,
        divisionState
    } = useSelector(state => state.selectFormStagesReducer)

    const {
        alumnosFullList
    } = useSelector(state => state.matriculaReducer)

    const dispatch = useDispatch()
    return ( 
        <Form
        >
            <Row 
               className='mt-2'
            >
                <Col>
                    <Form.Select
                        style={{color:colors.darken}}
                        aria-label='Nivel' 
                        onChange={(event) => handleNivelChange(
                            event,
                            dispatch
                        )} 
                        value={nivelState}
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
                    <SelectGradoAñoSala
                        />
                </Col>
                <Col>
                    <Form.Select 
                        style={{color:colors.darken}}
                        aria-label='Division' 
                        onChange={(event) => handleDivisionChange(
                            event,
                            dispatch
                        )} 
                        value={divisionState}
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
                            variant='outline-success'
                            size='sm' 
                            onClick={()=> handleClickApplyFilter(
                                nivelState,
                                gradoState,
                                divisionState,
                                alumnosFullList,
                                dispatch
                            )}>
                            Aplicar
                        </Button>
                        <Button 
                            className='m-2' 
                            variant='outline-success' 
                            size='sm' 
                            onClick={()=> handleClickLimpiarFiltrosStage1(
                                matriculaRef,
                                dispatch
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


