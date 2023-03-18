import {SET_MESSAGE,SET_CITY,SET_WEATHER} from '../actions/weatherActions'

export const weatherReducer = (state,action) => {
    switch (action.type){
        case SET_MESSAGE:
            return {...state , message: action.payload}
        case SET_CITY:
            return {...state, city: action.payload}
        case SET_WEATHER:
            return {...state,weather: action.payload}
        default:
            return state
    }
}