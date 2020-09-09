import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss'
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
            {
                cartItems.length > 0 ?
                (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>))
                :
                (<span className='empty-message'>
                    Your Cart is Empty
                </span>)
            }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
                }}>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

const msp = createStructuredSelector({
    cartItems: selectCartItems
})
export default withRouter(connect(msp)(CartDropdown));
