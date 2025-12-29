import React, { useContext } from 'react'
import { StoreContext } from './Context'

export default function D() {
  const { count } = useContext(StoreContext)

  return (
    <div>D:{count}</div>
  )
}
