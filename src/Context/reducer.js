
export const initialState = {
    basket: []
}

export const actionTypes = {
    ADD_TO_BASKET: 'ADD_TO_BASKET',
    REMOVE_FROM_BASKET: 'REMOVE_FROM_BASKET',
    DECREMENT_PRODUCT_QUANITY: 'DECREMENT_PRODUCT_QUANITY',
}

export function reducer(state, action) {
    const index = state.basket.findIndex(basketItem => basketItem.id === action.payload.id)
    const exist = state.basket.find(item => item.id === action.payload.id);
    let newBasket = [...state.basket];

    switch (action.type) {
        case actionTypes.ADD_TO_BASKET:
            if (exist){
                newBasket.splice(index, 1, { ...exist, quantity: exist.quantity + 1 })
            }

            return {
                ...state,
                basket: exist ? newBasket : [...state.basket, action.payload]
            }

        case actionTypes.REMOVE_FROM_BASKET:
            if (index >= 0)
                newBasket.splice(index, 1)
            else console.warn(`Cant remove product (id: ${action.id}) as its in basket`);

            return {
                ...state,
                basket: newBasket
            }

        case actionTypes.DECREMENT_PRODUCT_QUANITY:
            if (exist)
                newBasket.splice(index, 1, { ...exist, quantity: exist.quantity - 1 })

            if (exist.quantity -1 <= 0 )
                newBasket.splice(index, 1)

            return {
                ...state,
                basket: exist ? newBasket : [...state.basket, action.payload]
            }

        default:
            return state;
    }
}