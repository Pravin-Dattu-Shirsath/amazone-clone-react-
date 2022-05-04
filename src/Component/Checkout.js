import React from 'react'
import CheckoutProdouct from './CheckoutProdouct'
import { useStateValue } from './Image/StateProvider'
import "./Style/Checkout.css"
import Subtotal from './Subtotal'

export default function Checkout() {
  const [{ basket }] = useStateValue()
 
  return (
    <div className='checkout'>
    <div>
    <img
        className='checkout_ad'

        src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/PDAYILM/v1/01.jpg"
        alt="product"
      />
      {
        basket?.length === 0 ?
          <div>
            <h2>your shoping Basket is empty</h2>
            <p>You have no items in your basket.To buy one or more "Add to Basket" next to the item.</p>
          </div>
          : <div className='checkout_title'>
            <h2>your shoping Basket is {basket.length}</h2>

          <hr/>
           {
             basket.map((item)=>{
              
               return(
                <CheckoutProdouct
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                />
               )
             })}
            
 </div> 

      }
     
     
    </div>
    {
        basket.length>0 && (
          <div className="Checkout_right">
         
           <Subtotal/>

          </div>
        )
      }

      
    </div>
  )
}
