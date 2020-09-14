import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import Order from './Order';
import './Orders.css' ;
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';

function Orders() {
    
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(user){
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created','desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                })))
            ))
        } else {        
            setOrders([]);
        }
    }, [user])

    console.log('Here is your orders >>', orders);

    return (
        <div className = "orders">
            {/* push the order into the database */}
            {/* condition to test if there are user who has placed orders,
              then see if there is any user */}
            
            {(user && orders.length != 0) ? (
                <div className = "orders__order">
                <h1 className = "orders__title">Your Orders</h1>
                {orders?.map(order => (
                    <Order order={order} />
                ))} 
                </div> 
            ): ((user && orders.length === 0) ? (
                    <div>
                        <h1 className = "orders__title"> Your Orders </h1>
                        <h1 className = "orders__noOrderYet">
                                You Have Not Placed Any Order Yet
                        </h1>
                    </div>
                ) : (
                    <h1 className = "orders__noSignIn">
                        Please <Link to="/login"> Sign In </Link> to View Your Orders
                    </h1>
                )
            )}    
        </div>
    )
}

export default Orders
