import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from 'styled-components';
import { ShoppingContext } from '../../context/context-shopping-cart';
import { useContext } from 'react';

const Navigation = ({ isCartShown, setIsCartShown }) => {
  const { cartAmount } = useContext(ShoppingContext);

  const cartHandler = () => {
    setIsCartShown(!isCartShown);
  };

  const removeCart = () => {
    setIsCartShown(false);
  };

  return (
    <StyledHeader style={{ position: 'relative', backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        <StyledNavigation>
          <Typography
            variant="h5"
            component="h1"
            onClick={removeCart}
            sx={{ cursor: 'pointer' }}
          >
            Shop.
          </Typography>
          <IconButton
            aria-label="Toggle Cart"
            color="primary"
            onClick={cartHandler}
          >
            <Badge badgeContent={cartAmount} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </StyledNavigation>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  z-index: 100;
`;

const StyledNavigation = styled.nav`
  padding: 1.25rem 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Navigation;
