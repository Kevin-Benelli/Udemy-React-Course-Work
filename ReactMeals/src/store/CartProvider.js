import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // Step 1: look for already existing item
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });

    // Step 2: check index for existing item
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    // Step 3: If item already exists then update the amount
    if (existingCartItem) {
      let updatedItem;
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount, // existing amount + current incoming amount
      };

      updatedItems = [...state.items]; // create new array and copy existing objects (without editing old array)
      updatedItems[existingCartItemIndex] = updatedItem; // override index with updated item
    } else {
      // if item is added for the first time to item array

      updatedItems = state.items.concat(action.item); // add the item to array
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    // grab the prev amount
    // update prev amount with decrement value
    console.log("BRUH: ");

    // Step 1: look for already existing item
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });
    console.log("BRUH: ", existingCartItemIndex);

    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => {
        return item.id !== action.id;
      });
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1, // decrement by 1
      };
      updatedItems = [...state.items]; // grab old items
      updatedItems[existingCartItemIndex] = updatedItem; // update the decremented item
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    // forward item to item in reducer
    dispatchCartAction({ type: "ADD", item: item }); // this is the action obj, action.item / action.type
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
