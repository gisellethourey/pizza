import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (pizza) => {
        const existingPizzaIndex = cart.findIndex(item => item.id === pizza.id);

        if (existingPizzaIndex !== -1) {
            setCart(prevCart => {
                const updatedCart = [...prevCart];
                updatedCart[existingPizzaIndex].quantity++;
                return updatedCart;
            });
        } else {
            setCart(prevCart => [...prevCart, { ...pizza, quantity: 1 }]);
        }
    };

    const removeFromCart = (index) => {
        setCart(prevCart => {
            const updatedCart = [...prevCart];
            updatedCart.splice(index, 1);
            return updatedCart;
        });
    };

    const increaseQuantity = (index) => {
        setCart(prevCart => {
            const updatedCart = [...prevCart];
            updatedCart[index].quantity++;
            return updatedCart;
        });
    };

    const decreaseQuantity = (index) => {
        setCart(prevCart => {
            const updatedCart = [...prevCart];
            if (updatedCart[index].quantity > 1) {
                updatedCart[index].quantity--;
            }
            return updatedCart;
        });
    };

    const calculateTotal = () => {
        return cart.reduce((total, pizza) => total + (pizza.price * pizza.quantity), 0);
    };

    useEffect(() => {
        console.log("Carrito actualizado:", cart);
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, calculateTotal }}>
            {children}
        </CartContext.Provider>
    );
};
