import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect';

const CartIcon = ({toggleCartHidden, itemCount}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    );
}

const mdp = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const msp = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(msp, mdp)(CartIcon);
