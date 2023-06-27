import { useEffect, useState, createContext, useReducer } from 'react';

export const ShoppingContext = createContext(null);
const intitalCart = {
  cartAmount: 0,
  cartProducts: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'addToCart':
      const sumProducts = state.cartAmount + action.payload.amount;

      //Update the existing product in cart
      const existingProductIndex = state.cartProducts.findIndex(
        (product) => product.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        const updatedCartProducts = [...state.cartProducts];
        updatedCartProducts[existingProductIndex].amount +=
          action.payload.amount;

        return {
          ...state,
          cartProducts: updatedCartProducts,
          cartAmount: sumProducts,
        };
      }
      return {
        cartProducts: [...state.cartProducts, action.payload],
        cartAmount: sumProducts,
      };
    case 'removeFromCart':
      return '';
    default:
      return state;
  }
};

const ShoppingProvider = ({ children }) => {
  const [products, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [state, dispatch] = useReducer(reducer, intitalCart);
  const { cartProducts, cartAmount } = state;

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products?limit=4');
      const products = await res.json();
      setProducts(products);
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  const getProduct = (product) => {
    if (product.amount > 0) dispatch({ type: 'addToCart', payload: product });
  };

  const shoppingData = {
    products,
    isLoading,
    setIsLoading,
    getProduct,
    cartAmount,
    cartProducts,
  };

  return (
    <ShoppingContext.Provider value={shoppingData}>
      {children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingProvider;
