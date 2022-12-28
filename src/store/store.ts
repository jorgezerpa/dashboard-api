import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { authApi } from '../services/coreApi/auth'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
        .concat(authApi.middleware),  
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch