import React from 'react';
import './checkout.styles.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
 
const CheckoutPage = ({cartItems, totalValue}) => {
    return (
        <div className='checkout-page' >
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} item={cartItem}/>
            ))}
            <div className='total'>
                <span>TOTAL: ${totalValue}</span>
            </div>
        </div>
    );
}

const msp = createStructuredSelector({
    cartItems: selectCartItems,
    totalValue: selectCartTotal
})

export default connect(msp)(CheckoutPage);
