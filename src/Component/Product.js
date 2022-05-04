import React from 'react'
import { useStateValue } from './Image/StateProvider'
import "./Style/Product.css"
export default function Product({ id, title, price, image, rating }) {
    const [{ basket }, dispatch] = useStateValue()

    const addToBasket = () => {
        //add item in basket
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image:image

            },
        });

    }
    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>R</small>
                    <strong>{price}</strong>
                </p>

                <div className='product_rating'>
                    {
                        Array(rating).fill().map((_) => {
                            return <p>&#10026;</p>
                        })
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>add basket</button>
        </div>
    )
}
