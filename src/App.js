import ShoppingList from './components/ShoppingList';
import Navigation from './components/Navigation/Navigation';
import Cart from './components/Cart/Cart';
import styled from 'styled-components';
import { useState } from 'react';

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  return (
    <StyledApp>
      <Navigation setIsCartShown={setIsCartShown} isCartShown={isCartShown} />
      {isCartShown ? <Cart /> : <ShoppingList />}
    </StyledApp>
  );
}

const StyledApp = styled.div`
  padding-bottom: 3rem;
`;

export default App;
