import React from 'react'
import {
   BrowserRouter,
   Routes,
   Route,
   Navigate
} from 'react-router-dom'

import HomePage from '../Pages/HomePage.jsx'
import LogInPage from '../Pages/LogInPage.jsx'
import RatificacionInscripcionPage from '../Pages/RatificacionInscripcionPage.jsx'
import AdminPannelPage from '../Pages/AdminPannelPage.jsx'
import ForbiddenPage from '../Pages/ForbiddenPage.jsx'
import MatriculaPage from '../Pages/MatriculaPage.jsx'
import NuevoCicloLectivoPage from '../Pages/NuevoCicloLectivoPage.jsx'

import useAuth from '../Context/Store/useAuth.jsx'

import {AdminRoute} from './PrivateRoute.jsx'

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
