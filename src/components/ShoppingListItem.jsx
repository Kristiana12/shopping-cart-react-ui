import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ShoppingListItem = ({ product }) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      sx={{ maxWidth: '450px', margin: '0 auto' }}
    >
      <Box sx={{ padding: 1 }}>
        <StyledImage>
          <img src={product.image} alt={product.description} />
        </StyledImage>
        <Typography variant="h6" component="h2">
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
          <Button variant="outlined" size="small">
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
            {0}
          </Button>
          <Button sx={{ textAlign: 'center' }} variant="contained" size="small">
            <AddIcon />
          </Button>
        </Box>
      </Box>
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
