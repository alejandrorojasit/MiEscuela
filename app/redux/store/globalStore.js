import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {miEscuelaApp} from '../reducers/combined.reducer'

export const globalStore = createStore(
   miEscuelaApp,
) 
