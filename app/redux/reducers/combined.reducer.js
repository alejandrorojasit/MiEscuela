import {authReducer} from './autentication.reducer'
import {hardCodeDataReducer} from './hardCodeData.reducer'
import {modalAlertSpinnerReducer} from './modalAlertSpinner.reducer'
import {logInFormReducer} from './loginForm.reducer'
import {matriculaReducer} from './matricula.reducer'
import {selectFormStagesReducer} from '../reducers/selectFormStage1&2.reducer'
import {modalEditAlumnoReducer} from '../reducers/modalEditAlumno.reducer'
import {combineReducers} from 'redux'


export const miEscuelaApp = combineReducers({
   authReducer,
   hardCodeDataReducer,
   modalAlertSpinnerReducer,
   logInFormReducer,
   matriculaReducer,
   selectFormStagesReducer,
   modalEditAlumnoReducer
})

