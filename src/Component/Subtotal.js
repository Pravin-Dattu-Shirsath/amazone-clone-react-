import React from 'react'
import "./Style/SubTotal.css"
import { useStateValue } from './Image/StateProvider'
import { getbasketTotal } from './Image/Reducer'
export default function Subtotal() {
    const [{ basket }] = useStateValue()


  return (
    <div className='subtotal'>
        <h4>Total item:{basket.length}</h4>
        <strong>R : {getbasketTotal(basket)}</strong>

    </div>
  )
}
