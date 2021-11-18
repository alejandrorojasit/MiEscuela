import React from 'react'
import {
   BrowserRouter,
   Switch,
   Route,
   Redirect
} from 'react-router-dom'

import HomePage from '../Pages/HomePage.jsx'
import LogInPage from '../Pages/LogInPage.jsx'
import RatificacionInscripcionPage from '../Pages/RatificacionInscripcionPage.jsx'
import AdminPannelPage from '../Pages/AdminPannelPage.jsx'
import ForbiddenPage from '../Pages/ForbiddenPage.jsx'
import MatriculaPage from '../Pages/MatriculaPage.jsx'

import useAuth from '../Context/Store/useAuth.jsx'

import {AdminRoute} from './PrivateRoute.jsx'

const AppRouter = () => {

   const {stateUser} = useAuth()

   return (
      <BrowserRouter>
         <Switch>
            <Route 
               exact 
               path='/'
               render={() => 
                     stateUser.isAuthenticated ? 
                        <HomePage/> 
                        : 
                        <Redirect 
                           to='/LogIn'
                        />
               }
            />
            <Route 
               path='/Home' 
               render={() => 
                     stateUser.isAuthenticated ? 
                        <HomePage/> 
                        : 
                        <Redirect 
                           to='/LogIn'
                        />
               } />
            <Route 
               path='/LogIn' 
               render={() => 
                     !stateUser.isAuthenticated ? 
                        <LogInPage/> 
                        : 
                        <Redirect 
                           to='/'
                        />
               } 
            />
            <Route 
               path='/RatificacionInscripcion'
               render={() =>
                     stateUser.isAuthenticated ? 
                        <RatificacionInscripcionPage/> 
                        : 
                        <Redirect 
                           to='/LogIn'
                        />
               }
            />
            <Route 
               path='/Matricula'
               render={()=>
                     stateUser.isAuthenticated ? 
                        <MatriculaPage/> 
                        : 
                        <Redirect 
                           to='/LogIn'
                        />
               }
            />
            <AdminRoute 
               path='/AdminPannel' 
               component={AdminPannelPage}/>
            <Route 
               path='/Forbidden' 
               component={ForbiddenPage}/>
         </Switch>
      </BrowserRouter>
   )
}

export default AppRouter
