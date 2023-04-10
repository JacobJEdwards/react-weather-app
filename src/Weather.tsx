import { useQuery } from 'react-query'
import React from 'react'
import type { FC } from 'react'
import { fetchWeather } from './utility/fetchWeather'
import Loading from './Loading'
import Error from './Error'

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

type WeatherProps = {
  city: string
}

const Weather: FC<WeatherProps> = ({ city }: WeatherProps) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['weather'],
    queryFn: () => fetchWeather(city),
  })

  if (isLoading) return <Loading />

  if (error || data === undefined)
    return <Error error={error ? error : 'Unknown error'} />

  if (data) console.log(data)

  return <div>{data.max_temp}</div>
}

export default Weather
