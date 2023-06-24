import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import styled from 'styled-components';
import { useContext } from 'react';
import { ShoppingContext } from '../../context/context-shopping-cart';
import CartItem from './CartItem';
import Typography from '@mui/material/Typography';

const Cart = () => {
  const { cartProducts } = useContext(ShoppingContext);

  const cartList = cartProducts.map((cartProduct, i) => (
    <CartItem key={i} cartItem={cartProduct}></CartItem>
  ));

  if (cartProducts.length === 0) {
    return (
      <Container>
        <Typography variant="h5" component="h1" sx={{ textAlign: 'center' }}>
          Cart is empty!
        </Typography>
      </Container>
    );
  }

  return (
    <StyledContainer>
      <Grid container spacing={9}>
        {cartList}
      </Grid>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  padding-top: 100px;
  min-height: 100vh;
  z-index: 10;
  text-align: center;
`;

export default Cart;
