import ShoppingList from './components/ShoppingList';
import Navigation from './components/Navigation/Navigation';
import Cart from './components/Cart/Cart';
import styled from 'styled-components';

function App() {
  return (
    <StyledApp>
      <Navigation />
      <Cart />
      <ShoppingList />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  padding-bottom: 3rem;
`;

export default App;
