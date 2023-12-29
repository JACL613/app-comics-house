import { createSlice } from '@reduxjs/toolkit'
import { accionGet, accionGetNext } from '../services/API-marvel'
import { constantes } from '../assets/custom/Strings'
const personajesReducer = createSlice({
  name: 'personajes',
  initialState: {},
  reducers: {
    AllPersonajes (state, action) {
      // almacena todos los personajes en el estado global
      return { ...state, ...action.payload }
    },
    SetPersonajes (state, action) {
      // Remplaza los personajes que se renderizan por los filtrados
      return { ...state, results: action.payload, count: action.payload.length }
    },
    ResetPersonajes (state, action) {
      // devuelve el estado al inicial
      console.log(action.payload)
      return {}
    }
  }
})

export const obtenerAll = () => {
  return dispatch => {
    // accion para obtener todos los personajes y almacenarlos en el redux
    accionGet()
      .then(res => {
        dispatch(AllPersonajes(res.data.data))
        window.localStorage.setItem(constantes.TEXT_DATA_LOCAL, JSON.stringify(res.data.data))
      })
  }
}
export const obtenerLocal = (data) => {
  return dispatch => {
    // accion que almacena los datos locales en el estado global
    dispatch(AllPersonajes(data))
  }
}
export const obtenerNext = (count) => {
  return dispatch => {
    dispatch(ResetPersonajes())
    // accion que obtiene el siguiente grupo de items y los almacena
    setTimeout(() => {
      accionGetNext(count)
        .then(res => { console.log(res); dispatch(AllPersonajes(res.data.data)) })
        .catch(err => console.error(err))
    }, 200)
  }
}
export const SetFiltering = (data) => {
  return dispatch => {
    // accion para almacenar personajes filtrados
    dispatch(SetPersonajes(data))
  }
}
export const { AllPersonajes, SetPersonajes, ResetPersonajes } = personajesReducer.actions
export default personajesReducer.reducer
