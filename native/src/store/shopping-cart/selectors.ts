import {createSelector} from 'reselect';
import {get} from 'src/utils/object';
import {ShoppingCartItem, ShoppingCartState} from './types';

export const itemsKey = 'shoppingCart.items';

export const shoppingCartItemsSelector = (state: ShoppingCartState): ShoppingCartItem[] =>
  get(state, itemsKey, []);

export const totalBeforeTaxSelector = createSelector(
  [shoppingCartItemsSelector],
  (cartItems: ShoppingCartItem[] = []) => {
    return cartItems.reduce((acc, item) => acc + item.cost, 0);
  },
);
