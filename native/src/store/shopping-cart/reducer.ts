import {ShoppingCartItem, ShoppingCartState} from './types';
import {handleActions, createAction} from 'redux-actions';

const initialState: ShoppingCartState = {
  items: [],
};

const shoppingCart = handleActions(
  {
    ADD_TO_CART: (
      state: ShoppingCartState,
      {payload}: {payload: ShoppingCartItem},
    ): ShoppingCartState => {
      return {
        ...state,
        items: [...state.items.filter((i: ShoppingCartItem) => i.id !== payload.id), payload],
      };
    },
    REMOVE_FROM_CART: (
      state: ShoppingCartState,
      {payload}: {payload: ShoppingCartItem},
    ): ShoppingCartState => {
      return {
        ...state,
        items: [...state.items.filter((i: ShoppingCartItem) => i.id !== payload.id)],
      };
    },
  },
  initialState,
  {
    prefix: 'SHOPPING-CART', // String used to prefix each type
  },
);

export default shoppingCart;
