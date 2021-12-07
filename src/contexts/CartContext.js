import React from 'react';
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const value = { cart, setCart };

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
