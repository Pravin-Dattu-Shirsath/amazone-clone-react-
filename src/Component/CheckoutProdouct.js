import React from 'react'
import { useStateValue } from './Image/StateProvider'
import "./Style/CheckoutProduct.css"
export default function CheckoutProdouct({id,title,image,price,rating}) {
  const[{basket},dispath]=useStateValue()
 const RemovefromBasket =()=>{
   
  //  remove from Basket
  
  dispath({type:"REMOVE_TO_BASKET",
             id:id    })
 }
  return (
    <div className='checkoutProduct' key={id}>
    <img src={image} alt="product image"  className='checkoutProduct_image'/>
    <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>

        <p className="checkoutProduct_price">
        <small>R</small>
        <strong>{price}</strong>
        </p>

        <div className='checkoutProduct_rating'>
                    {
                        Array(rating).fill().map((_) => {
                            return <p>&#10026;</p>
                        })
                    }
                </div>
                <button onClick={RemovefromBasket}>Remove to basket</button>
    </div>

    </div>
  )
}
