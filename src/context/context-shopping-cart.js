import { useEffect, createContext, useReducer } from 'react';

export const ShoppingContext = createContext(null);
const intitalCart = {
  products: [],
  cartAmount: 0,
  cartProducts: [],
  status: 'loading',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'fetchProducts':
      return { ...state, products: action.payload, status: 'ready' };
    case 'addToCart':
      const sumProducts = state.cartAmount + action.payload.amount;

      //Update the existing product in cart
      const existingProductIndex = state.cartProducts.findIndex(
        (product) => product.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        const updatedCartProducts = [...state.cartProducts];
        updatedCartProducts[existingProductIndex] = {
          ...updatedCartProducts[existingProductIndex],
          amount:
            updatedCartProducts[existingProductIndex].amount +
            action.payload.amount,
        };

        return {
          ...state,
          cartProducts: updatedCartProducts,
          cartAmount: sumProducts,
        };
      }
      return {
        ...state,
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
  // const [products, setProducts] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  const [state, dispatch] = useReducer(reducer, intitalCart);
  const { cartProducts, cartAmount, products, status } = state;

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products?limit=4');
      const products = await res.json();
      dispatch({ type: 'fetchProducts', payload: products });
    };

    fetchProducts();
  }, []);

  const shoppingData = {
    products,
    status,
    cartAmount,
    cartProducts,
    dispatch,
  };

  return (
    <ShoppingContext.Provider value={shoppingData}>
      {children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingProvider;
