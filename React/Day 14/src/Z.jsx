import React, { useContext } from 'react'
import { StoreContext } from './Context'

export default function Z() {
  const { countHandler } = useContext(StoreContext)
  return (
    <div>Z <button onClick={countHandler}>+</button></div>
  )
}
