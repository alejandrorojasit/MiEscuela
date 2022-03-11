import React from 'react'
import {
   BrowserRouter,
   Routes,
   Route,
   Navigate
} from 'react-router-dom'

import HomePage from '../Pages/HomePage'
import LogInPage from '../Pages/LogInPage'
import RatificacionInscripcionPage from '../Pages/RatificacionInscripcionPage'
import AdminPannelPage from '../Pages/AdminPannelPage'
import ForbiddenPage from '../Pages/ForbiddenPage'
import MatriculaPage from '../Pages/MatriculaPage'
import NuevoCicloLectivoPage from '../Pages/NuevoCicloLectivoPage'
import NuevoIngresoPage from '../Pages/NuevoIngresoPage'

import useAuth from '../Context/Store/useAuth'

import {AdminRoute} from './PrivateRoute'

const AppRouter = () => {

   const {stateUser} = useAuth()

   return (
      <BrowserRouter>
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
               path='/NuevoCicloLectivo'
               element={
                  stateUser.isAuthenticated ? 
                     <NuevoCicloLectivoPage/>
                     :
                     <Navigate 
                  to='/LogIn'
                     />
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
               path='/Forbidden' 
               component={ForbiddenPage}/>
         </Routes>
      </BrowserRouter>
   )
}

export default AppRouter
