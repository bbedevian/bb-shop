export const addItemToCart = (items, newItem) => {
    const existingCartItem = items.find(cartItem => cartItem.id === newItem.id)

    if(existingCartItem) {
        return items.map(cartItem => 
            cartItem.id === newItem.id ? 
            {...cartItem, quantity: cartItem.quantity+1}
            :
            cartItem)
    }

    return [...items, {...newItem, quantity: 1}]
}