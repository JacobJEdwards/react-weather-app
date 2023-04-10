import React, { useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Weather from './Weather'
import './App.css'

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

const queryClient = new QueryClient()

function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <Weather city='London' />
      </QueryClientProvider>
    </div>
  )
}

export default App
