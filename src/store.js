import { configureStore } from '@reduxjs/toolkit'
import personajesReducer from './reducer/personajesReducer'

const store = configureStore({
  reducer: {
    personajes: personajesReducer
  }
})

export default store
