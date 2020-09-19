import React, { useState, useEffect } from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import {db} from './firebase';

function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    
    const history = useHistory();

    const [error,setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        // whenever basket changes, we need to get new secret (charging amount changed)
        const getClientSecret = async () => {
            const reponse = await axios ({
                method: 'post',
                // Stripe expects the total in a currency subunits 
                // if $10.00 then input needs to be '1000'
                url: `/payments/create?total=${getBasketTotal(basket)*100}`
            });
            setClientSecret(reponse.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    //console.log('The client secret is >>>', clientSecret);
    //console.log(user);

    const handleSubmit = async (event) => {
        //Stripe
        event.preventDefault();
        //prevent user from clicking on buy button multiple times
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // users -> id -> orders
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            });
            //paymentIntent = payment confirmation
            //if payment succeeded, update variables and jump to link './orders'
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            });

            history.replace('/orders');
        })
    }
    
    const handleChange = event => {
        // listen to the changes in the CardElements
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        // if there is an error, show the error, otherwise show nothing
        setError(event.error ? event.error.message: "");
    }

    return (
        <div className = "payment">
            <div className = "payment__container">
                <h1>
                    Checkout (
                    <Link to="/checkout"> {basket?.length} items </Link>
                    )
                </h1>

                {/* payment section - delivery address */}
                <div className = "payment__section">
                    <div className = "payment__title">
                         <h3>Delivery Address</h3>
                    </div>
                    <div className = "payment__address">
                        <p> {user?.email}, 
                            73 Rue de Archives, 
                            75003, Paris
                        </p>
                        
                    </div>
                </div>
                {/* payment section - Review Items */}
                <div className = "payment__section">
                    <div className = "payment__title">
                         <h3>Review Items <br /> and Delivery</h3>
                    </div>
                    <div className = "payment__items">
                        {basket.map(item => (
                            <CheckoutProduct 
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                                hideButton
                            />
                        ))}
                    </div>
                </div>
                {/* payment section - payment Method */}
                <div className = "payment__section">
                    <div className = "payment__title">
                         <h3>Payment Method</h3>
                    </div>
                    <div className = "payment__details">
                        {/* Stripe */}
                        <form onSubmit = {handleSubmit}>
                            <CardElement onChange = {handleChange}/>

                            <div className = "payment__priceContainer">
                                <CurrencyFormat 
                                renderText = {(value) => (
                                    <h3>Order Total: {value}</h3>
                                )}
                                decimalScale = {2}
                                value = {getBasketTotal(basket)}
                                displayType = {'text'}
                                thousandSeparator = {true}
                                prefix={'$'}
                                />
                                {/* button disabled when processing or disabled or payment succeeded */}
                                <button
                                disabled = { processing || disabled || succeeded }
                                >
                                    <span>{processing ? <p>Processing</p>:'Buy Now'}</span>
                                </button>
                            </div>
                            {/* Errors */}
                            {error && <div>{ error }</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
