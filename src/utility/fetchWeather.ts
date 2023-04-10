interface WeatherData {
  cloud_pct: number
  feels_like: number
  humidity: number
  max_temp: number
  min_temp: number
  sunrise: number
  sunset: number
  temp: number
  wind_degrees: number
  wind_speed: number
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3558d10312msh42eb98d3eb417b0p1a8b4cjsn4fa554615ab9',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
} as const

export const fetchWeather = async (city: string): Promise<WeatherData | undefined> => {
  try {
    const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return
  }
}
