import React, {useState} from 'react';
import Form from "./FormControled";
import Weather from "./Weather";
import {api_key, base_url} from "../utils/constants";
import {Info} from "../utils/types";
import {useDispatch} from "react-redux";
import {fetchWeather} from "../actions/weatherActions";

const Data = () => {
    return (
        <div>
            <Form/>
            <Weather/>
        </div>
    );
}

export default Data;