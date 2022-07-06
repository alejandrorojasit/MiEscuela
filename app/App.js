import {hot} from 'react-hot-loader/root'
import AppRouter from './routes/AppRouter'
import {Provider} from 'react-redux'
import {globalStore} from './redux/store/globalStore'
function App () {

   return (
      <Provider store={globalStore}>  
      <AppRouter/>
      </Provider>
   )
}

export default hot(App) 

