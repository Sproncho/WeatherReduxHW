import {applyMiddleware, legacy_createStore as createStore} from "redux";
import {weatherReducer} from "../reducer/weatherReducer";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";
const initialState = {
    message:'Enter city name',
    weather:undefined,
    city:""
}

export const store = createStore(weatherReducer,initialState,applyMiddleware(thunk,logger))