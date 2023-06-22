import { useEffect, useState, createContext, useReducer } from 'react';

export const ShoppingContext = createContext(null);

// const reducerShoppingCart = (state, action) => {
//   switch (action.type) {
//     case 'addToCart':
//       return '';
//     case 'removeFromCart':
//       return '';
//     default:
//       return state;
//   }
// };

const ShoppingProvider = ({ children }) => {
  const [products, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // const [state, dispatchShoppingCart] = useReducer(reducerShoppingCart, {
  //   cartAmount: 0,
  //   cartProducts: {},
  // });

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products?limit=4');
      const products = await res.json();
      setProducts(products);
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  const shoppingData = {
    products,
    isLoading,
    // cartAmount: state.cartAmount,
    setIsLoading,
  };

  return (
    <ShoppingContext.Provider value={shoppingData}>
      {children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingProvider;
