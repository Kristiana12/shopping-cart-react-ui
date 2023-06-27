import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';

const CartItem = ({ cartItem }) => {
  return (
    <StyledGrid item container xs={12} md={6}>
      <Grid item container direction="column" xs={6}>
        <Grid item>
          <StyledImage src={cartItem.image} alt={cartItem.description} />
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" component="h3">
            {cartItem.title}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container spacing={4} direction="column" xs={6}>
        <Grid item>
          <Paper elevation={0} sx={{ backgroundColor: '#eee' }}>
            Amount: {cartItem.amount}
          </Paper>
        </Grid>
        <Grid item>
          <Paper elevation={0} sx={{ backgroundColor: '#eee' }}>
            Price: {cartItem.price}€
          </Paper>
        </Grid>
      </Grid>
    </StyledGrid>
  );
};

const StyledGrid = styled(Grid)`
  background-color: #fff;
`;

const StyledImage = styled.img`
  margin: 0 auto;
  width: 120px;
`;

export default CartItem;
