import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';

const ShoppingListItem = ({ product }) => {
  const [productCount, setProductCount] = useState(0);

  const incrementHandler = () => {
    setProductCount((prevValue) => prevValue + 1);
  };

  const decrementHandler = () => {
    if (productCount === 0) return;
    setProductCount((prevValue) => prevValue - 1);
  };

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      sx={{
        maxWidth: '450px',
      }}
    >
      <Paper
        variant="outlined"
        sx={{
          padding: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <StyledImage>
          <img src={product.image} alt={product.description} />
        </StyledImage>
        <Typography variant="h6" component="h2" margin="8px 0">
          {product.title}
        </Typography>
        <Typography variant="subtitle2" component="h2">
          {product.category}
        </Typography>
        <Typography sx={{ fontWeight: 600 }} variant="body2" component="p">
          {product.price}€
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '2rem',
          }}
        >
          <Button variant="outlined" size="small" onClick={decrementHandler}>
            <RemoveIcon />
          </Button>
          <Button
            sx={{
              flex: 1,
              '&.Mui-disabled': {
                color: '#1976d2',
              },
            }}
            disabled
          >
            {productCount}
          </Button>
          <Button
            sx={{ textAlign: 'center' }}
            variant="contained"
            size="small"
            onClick={incrementHandler}
          >
            <AddIcon />
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

const StyledImage = styled.div`
  background-color: #eee;
  img {
    display: block;
    margin: 0 auto;
    width: auto;
    height: 200px;
    object-fit: cover;
  }
`;

export default ShoppingListItem;
