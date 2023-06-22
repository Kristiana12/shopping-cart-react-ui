import ShoppingList from './components/ShoppingList';
import Navigation from './components/Navigation/Navigation';
import styled from 'styled-components';

function App() {
  return (
    <StyledApp>
      <Navigation />
      <ShoppingList />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  padding-bottom: 3rem;
`;

export default App;
