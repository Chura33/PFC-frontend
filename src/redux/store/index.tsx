import { combineReducers, configureStore} from "@reduxjs/toolkit";
import AuthSlice from '../slices/auth'
import NavSlice from '../slices/activeNav'
import OrderSlice from '../slices/orders'
import PaginationSlice from '../slices/paginationS'
import { WebStorage, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

interface PersitConfig {
    key: string
    storage: WebStorage
  }
  
  export const persistConfig: PersitConfig = {
    key: 'root',
    storage: storage,
  }

  const rootReducer = combineReducers({
    auth : AuthSlice,
    activeNav : NavSlice,
    orders: OrderSlice,
    paginationS: PaginationSlice
  })

  const persistedReducer = persistReducer(persistConfig, rootReducer)
  
 

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
      }),  
})



// middleware: (getDefaultMiddleware:any) => {
//   return [...getDefaultMiddleware(
//     {
//       serializableCheck: false
//     }
//   )]
// }

// middleware: (getDefaultMiddleware) =>
//   getDefaultMiddleware({
//     serializableCheck: false,
//   }),