import {api_key, base_url} from "../utils/constants";
import weather from "../components/Weather";

export const SET_MESSAGE = 'SET_MESSAGE';
export const SET_CITY = 'SET_CITY';
export const SET_WEATHER = 'SET_WEATHER';
export const setMessage = message => {
    {
        return {
            type: SET_MESSAGE,
            payload: message
        }
    }
}

export const setCity = city => {
    return {
        type: SET_CITY,
        payload: city
    }
}
export const setWeather = weather => {
    return {
        type:SET_WEATHER,
        payload:weather
    }
}

export const fetchWeather = (city) => {
    return (dispatch) => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(response => {
                if(!response.ok)
                    throw new Error(response.status + ' ');
                return response.json()
            })
            .then(data => {
                let weatherInfo = {
                    country: data.sys.country,
                    city: data.name,
                    pressure: data.main.pressure,
                    temp: data.main.temp,
                    sunset: data.sys.sunset
                }
                dispatch(setWeather(weatherInfo))
            })
            .catch(e => dispatch(setMessage('Enter correct city name')))
    }
}
// const getWeather = async (city: string) => {
//     try {
//         const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
//         if (!response.ok) {
//             throw new Error(response.status + '');
//         }
//         const data = await response.json();
//         setWeatherInfo({
//             country: data.sys.country,
//             city: data.name,
//             pressure: data.main.pressure,
//             temp: data.main.temp,
//             sunset: data.sys.sunset
//         });
//         setMessage(null);
//     } catch (e: any) {
//         console.log(e.message);
//         setMessage('Enter correct city name');
//     }
// }