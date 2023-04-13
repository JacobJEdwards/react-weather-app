import React, { useState } from 'react'
import type { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Weather from './Weather'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Button, Form, Input, Label } from 'reactstrap'

const queryClient = new QueryClient()

const getLocation = () => {
  navigator.geolocation.getCurrentPosition(success, error)
}

const success = (position: any) => {
  const latitude = position.coords.latitude
  const longitude = position.coords.longitude
  console.log(`Latitude is ${latitude}° Longitude is ${longitude}°`, position)
}

const error = () => {
  console.log('Unable to retrieve your location')
}

const App: FC = () => {
  const [city, setCity] = useState<string>('')
  const [start, setStart] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  getLocation()

  const validateCity = (city: string) => {
    const regex = /^[a-zA-Z]+$/
    return regex.test(city)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateCity(city)) {
      setError('')
      setStart(true)
    } else {
      setError('Please enter a valid city')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('')
    setCity(e.target.value)
  }

  if (!start) {
    return (
      <main className='App'>
        <h1>Weather</h1>
        <Form onSubmit={handleSubmit}>
          <Label for='city'>
            <Input
              id='city'
              type='text'
              placeholder='Enter a city'
              onChange={(e) => {
                handleInputChange(e)
              }}
            />
            {error && <div className='error'>{error}</div>}
          </Label>
          <Button
            type='submit'
            size='sm'>
            Submit
          </Button>
        </Form>
      </main>
    )
  }

  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <Weather city={city} />
      </QueryClientProvider>
    </div>
  )
}

export default App
