import React from 'react'
import {
   BrowserRouter,
   HashRouter,
   Routes,
   Route,
   Navigate
} from 'react-router-dom'

import HomePage from '../pages/HomePage'
import LogInPage from '../pages/LogInPage'
import RatificacionInscripcionPage from '../pages/RatificacionInscripcionPage'
import AdminPannelPage from '../pages/AdminPannelPage'
import ForbiddenPage from '../pages/ForbiddenPage'
import MatriculaPage from '../pages/MatriculaPage'
import NuevoCicloLectivoPage from '../pages/NuevoCicloLectivoPage'
import NuevoIngresoPage from '../pages/NuevoIngresoPage'
import NuevaDenominacionPage from '../pages/NuevaDenominacionPage'
import FinCicloLectivoPage from '../pages/FinCicloLectivoPage'

import {useSelector} from 'react-redux'

import {
   AdminRoute,
   NuevoCicloLectivoRoute,
} from './PrivateRoute'

const AppRouter = () => {

   const stateUser = useSelector(state => state.authReducer)

   return (
      <HashRouter>
         <Routes>
            <Route 
               path='/'
               element={ 
               stateUser.isAuthenticated ? 
                  <HomePage/> 
                  : 
                  <Navigate 
                     to='/LogIn'
                     />
            }
               />
            <Route 
               path='/Home' 
               element={ 
               stateUser.isAuthenticated ? 
                  <HomePage/> 
                  : 
                  <Navigate 
                     to='/LogIn'
                     />
            } />
            <Route 
               path='/LogIn' 
               element={ 
               !stateUser.isAuthenticated ? 
                  <LogInPage/> 
                  : 
                  <Navigate 
                     to='/'
                     />
            } 
               />
            <Route 
               path='/RatificacionInscripcion'
               element={
               stateUser.isAuthenticated ? 
                  <RatificacionInscripcionPage/> 
                  : 
                  <Navigate 
                     to='/LogIn'
                     />
            }
               />
            <Route 
               path='/Matricula'
               element={
               stateUser.isAuthenticated ? 
                  <MatriculaPage/> 
                  : 
                  <Navigate 
                     to='/LogIn'
                     />
            }
               />
            <Route 
               path='/NuevoIngreso'
               element={
               stateUser.isAuthenticated ? 
                  <NuevoIngresoPage/> 
                  : 
                  <Navigate 
                     to='/LogIn'
                     />
            }
               />
            <Route 
               path='/NuevaDenominacion'
               element={
               stateUser.isAuthenticated ? 
                  <NuevaDenominacionPage/> 
                  : 
                  <Navigate 
                     to='/LogIn'
                     />
            }
               />
            <Route
               path='/NuevoCicloLectivo'
               element={
               <NuevoCicloLectivoRoute>
                  <NuevoCicloLectivoPage/>
               </NuevoCicloLectivoRoute>
            }
               />
            <Route
               path='/AdminPannel' 
               element={
               <AdminRoute>
                  <AdminPannelPage/>
               </AdminRoute>
            }
            >
            </Route>
            <Route
               path='/FinCicloLectivo'
               element={
                  <NuevoCicloLectivoRoute>
                     <FinCicloLectivoPage/>
                  </NuevoCicloLectivoRoute>
               
            }
            >
            </Route> 
            <Route 
               path='/Forbidden' 
               element={ForbiddenPage}/>
         </Routes>
      </HashRouter>
   )
}

export default AppRouter
