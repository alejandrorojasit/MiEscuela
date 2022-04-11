import {hot} from 'react-hot-loader/root'
import AppRouter from './routes/AppRouter'
import AuthProvider from './Context/Store/AuthProvider'
function App () {

   return (
      <AuthProvider
      >
         <AppRouter
         />
      </AuthProvider>
   )
}

export default hot(App) 

