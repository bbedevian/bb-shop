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

export const removeItem = (items, item) => {
    const existingCartItem = items.find(cartItem => cartItem.id === item.id)

    if(existingCartItem.quantity === 1){
        return items.filter(cartItem => cartItem.id !== item.id)
    }

    return items.map(cartItem => 
        cartItem.id === item.id ? 
        {...cartItem, quantity: cartItem.quantity-1}
        :
        cartItem
    )

}