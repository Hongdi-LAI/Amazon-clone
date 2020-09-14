import React from 'react';
import './Product.css';
//import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Product({id,title,image,price,rating}) {
    
    const [{ user}, dispatch] = useStateValue();

    const addToBasket = () => {
        
        if(user){
            //add item to basket
            dispatch({
                type: 'ADD_TO_BASKET',
                item: {
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    rating: rating,
                }
            })
        } else {
            const SignInRequest = alert(`Please sign in before adding items to the cart.`)
            dispatch({
                type: 'EMPTY_BASKET'
            })
        }
    };

    return (
        <div className = "product" >
            <div className = "product__info">
                <p>{title}</p>
                <p className = "product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className = "product__rating">
                    {   // loop through #rating many time 
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick = {addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
