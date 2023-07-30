import {createSlice} from '@reduxjs/toolkit'
import { accionGet, accionGetNext } from '../services/API-marvel'
const personajesReducer = createSlice({
    name: 'personajes',
    initialState: {},
    reducers:{
        AllPersonajes(state,action){
            return action.payload
        },
        ResetPersonajes(state, action){
            console.log(action.payload);
            return {}
        }
    }
})

export const obtenerAll = () => {
    return dispatch => {
        accionGet()
        .then(res => dispatch(AllPersonajes(res.data.data)))
    }
}
export const obtenerNext = (count) => {
    console.log(count);
    return dispatch => {
        accionGetNext(count)
        .then(res => {console.log(res); dispatch(AllPersonajes(res.data.data))})
        .catch(err => console.error(err))
    }
}
export const {AllPersonajes} = personajesReducer.actions
export default personajesReducer.reducer
