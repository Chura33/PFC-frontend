import { ReactNode } from 'react'
import {Provider} from 'react-redux'
import { store } from '../../redux/store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
interface AppReduxI {
    children:ReactNode
}

const LoadingComponent = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
)

const AppReduxProvider:React.FC<AppReduxI> = ({children}) => {
    const persistReduxStore = persistStore(store)
  return (
    <Provider store={store}>
        <PersistGate loading={<LoadingComponent/>} persistor={persistReduxStore}>
        {children}
        </PersistGate>
    </Provider>
  )
}

export default AppReduxProvider