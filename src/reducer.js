//Data Layer logic goes here

export const initialState = {
    basket: [],
};

const reducer = (state,action) => {
    console.log(action);
    switch(action.type) {
        
        case 'ADD_TO_BASKET':
            // logic for adding items to from basket
            return {
                ...state,
                /* keep what's previously in the basket */
                /* and proceed to add new item ('action.item') */
                basket: [...state.basket, action.item],
            };

        
        case 'REMOVE_FROM_BASKET':
            // logic for Removing item from the basket
            return state;
        
        // if parsing unregistered case, go to default
        default: 
            return state;
    }
} 

export default reducer;