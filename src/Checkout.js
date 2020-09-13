import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {
    
    const [{basket},dispatch] = useStateValue();
    
    return (

        <div className = "checkout">
            <div className = "checkout__left">
                <img 
                    className = "checkout__ad"
                    src = "https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt = ""
                />
                {/* condition on shopping basket */}
                {basket?.length === 0 ? (
                    <div className = "checkout__empty">
                        <h2> Your Shopping Basket is Empty</h2>
                        <p>
                            You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.
                        </p>
                        <img
                        src = 'https://images-na.ssl-images-amazon.com/images/G/01/dex/2019/CFS/DEX_2019_CFS_LP_Hero_Desktop_3000x650.jpg'
                        alt = ''
                        />
                    </div>
                ) : (
                    <div>
                        <h2 className = "checkout__title"> Your Shopping Basket </h2>
                        {/* List out all of the Checkout Products */}
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className = "checkout__right">
                    <Subtotal />    
                </div>
            )}
        </div>
    )
}

export default Checkout
