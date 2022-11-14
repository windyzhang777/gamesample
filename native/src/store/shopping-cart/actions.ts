import {createAction} from 'redux-saga-actions';
import {createAction as simpleAction} from 'redux-actions';

export const checkout = createAction('SHOPPING-CART/CHECKOUT');
export const addToCart = simpleAction('SHOPPING-CART/ADD_TO_CART');
export const removeFromCart = simpleAction('SHOPPING-CART/REMOVE_FROM_CART');
