import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import {selectCartItems} from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'
import { cartSaga } from '../../redux/cart/cart.saga';



const CartDropdown = ({ cartItems ,history,dispatch}) => {

  console.log(cartItems)

  return(
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? 
        (cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
        ):(
          <span className='empty-message'>Your cart is empty</span>
        )}
    </div>
    <CustomButton onClick={()=>{
      dispatch(toggleCartHidden());
      history.push('/checkout');
    }}>GO TO CHECKOUT
    </CustomButton>
  </div>
);
  }

const mapStateToProps = createStructuredSelector({
  cartItems:selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown)); 