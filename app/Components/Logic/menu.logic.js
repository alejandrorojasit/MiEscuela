import {setCurrentYear} from '../../redux/actions/autentication.action'
import {resetState} from '../../redux/actions/selectFormStage1&2.actions'
import { updateAlumnoFullList } from '../../redux/actions/matricula.action'
export const changeMatriucla = (
   matriculaYear,
   dispatch,
) => {
  dispatch(resetState())
  dispatch(updateAlumnoFullList([]))
  dispatch(setCurrentYear(matriculaYear)) 
}
