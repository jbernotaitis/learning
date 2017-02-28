import axios from 'axios'

const API_KEY = "5cf10ff7bcf65723a9027da603826016";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WATHER = 'FETCH_WATHER';

export function fetchWeather(city){

	const url = `${ROOT_URL}&q=${city}`;
	const request = axios.get(url);

	//console.log("request:", request);

	return{
		type: FETCH_WATHER,
		payload: request
	}

}
