import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ShoppingListItem from './ShoppingListItem';
import { useContext } from 'react';
import { ShoppingContext } from '../context/context-shopping-cart';

const ShoppingList = () => {
  const { products, status } = useContext(ShoppingContext);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {status === 'loading' && (
          <Grid item xs={12}>
            <Typography component="h2" variant="h6">
              Products are loading...
            </Typography>
          </Grid>
        )}
        {status === 'ready' &&
          products.map((product) => (
            <ShoppingListItem product={product} key={product.id} />
          ))}
      </Grid>
    </Container>
  );
};

export default ShoppingList;
