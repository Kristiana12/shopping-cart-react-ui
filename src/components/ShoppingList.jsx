import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ShoppingListItem from './ShoppingListItem';
import { useContext } from 'react';
import { ShoppingContext } from '../context/context-shopping-cart';

const ShoppingList = () => {
  const { products, isLoading } = useContext(ShoppingContext);
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {!isLoading &&
          products.map((product) => (
            <ShoppingListItem product={product} key={product.id} />
          ))}
      </Grid>
    </Container>
  );
};

export default ShoppingList;
