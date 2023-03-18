import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchWeather} from "../actions/weatherActions";
import {setCity} from "../actions/weatherActions";
import {store} from "../configureStore/store";


const FormControled = () => {
    const dispatch = useDispatch()
    const {city} = useSelector(store => store)
    const handleClick = () => {
        dispatch(fetchWeather(city))
        dispatch(setCity(''))
    }

    const handleChange = (e) => {
        dispatch(setCity(e.target.value))
    }

    return (
        <div>
            <input onChange={handleChange} type='text' value={city} placeholder='City'/>
            <button onClick={handleClick}>Get weather</button>
        </div>
    )
}

export default FormControled;