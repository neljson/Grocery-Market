import React, { createContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AppContext = createContext();

function AppProvider(props) {
  // lazy useState initialization for expensive call to localStorage
  const [cart, setCart] = useState(function () {
    let savedCart = [];
    try {
      savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    } catch (error) {
      savedCart = [];
    }
    return savedCart;
  });

  useEffect(() => {
    if (cart) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  function handleProductDelete(id) {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  }
  function handleProductAdd(newProduct) {
    // check if item exists
    const existingProduct = cart.find(
      (product) => product.id === newProduct.id
    );
    if (existingProduct) {
      // increase quantity
      const updatedCart = cart.map((product) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      setCart(updatedCart);
    } else {
      // product is new to the cart
      setCart([
        ...cart,
        {
          ...newProduct,
          quantity: 1,
        },
      ]);
    }
  }
  function getTotalPrice() {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }

  function getProductFromCart(productId) {
    return cart.find((product) => product.id === productId);
  }

  function getCartCount() {
    return cart.reduce((total, product) => total + product.quantity, 0);
  }

  const value = {
    cart,
    onProductAdd: handleProductAdd,
    onProductDelete: handleProductDelete,
    getTotalPrice,
    getProductFromCart,
    getCartCount,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

export { AppContext, AppProvider };
