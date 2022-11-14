export interface ShoppingCartState {
  items: ShoppingCartItem[];
}

export interface ShoppingCartItem {
  id: number;
  quantity: number;
  cost: number;
}
