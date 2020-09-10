//Data Layer logic goes here

export const initialState = {
    basket: [
                /* down below items are for tesing purposes */
               /* {
                    id: "2324",
                    title: "Classic Glass Tea Cup 16cl (x6)",
                    price: 6.96,
                    rating: 5,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQC4YQHpLsJAU5CJCCZQdm0DK4d29YlyOZaL6x-Kdh1HxQOkqIN9iQ&usqp=CAc",
                },
                {
                    id: "2324",
                    title: "Classic Glass Tea Cup 16cl (x6)",
                    price: 6.96,
                    rating: 5,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQC4YQHpLsJAU5CJCCZQdm0DK4d29YlyOZaL6x-Kdh1HxQOkqIN9iQ&usqp=CAc",
                } */
            ],
    user: null,
};

// incrementing all of the prices in the basket
export const getBasketTotal = (basket) => 
    basket?.reduce((amount,item) => item.price + amount, 0);

const reducer = (state,action) => {
    //console.log(action);
    switch(action.type) {

        case 'ADD_TO_BASKET':
            // logic for adding items to from basket
            return {
                ...state,
                // keep what's previously in the basket 
                // and proceed to add new item ('action.item') 
                basket: [...state.basket, action.item],
            };

        
        case 'REMOVE_FROM_BASKET':
            // logic for Removing item from the basket
            // set up new Basket
            let newBasket = [...state.basket];
            
            // search up in the basket if the item id of the action
            // matches the id in the basket
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            if (index >= 0) {
                // item exists in basket, remove it..
                // remove item in array at index = 'index'
                newBasket.splice(index, 1);
            } else {
                console.warn(`Cant remove product (id: ${action.id}) as it's not in the basket.`);
            }
            return { 
                ...state, 
                // change the basket to the new basket
                basket: newBasket 
            };
        
        // if parsing unregistered case, go to default
        default: 
            return state;
    }
} 

export default reducer;