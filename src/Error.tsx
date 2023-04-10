import React from 'react'
import type { FC } from 'react'

type ErrorProps = {
  error: any
}

const Error: FC<ErrorProps> = ({ error }: ErrorProps) => {
  return <h1>An error has occurred: {error}</h1>
}

export default Error
