import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from 'styled-components';
import { useState } from 'react';

const Navigation = () => {
  const [cartProductNum, setCartProductNum] = useState(0);

  return (
    <Container maxWidth="lg">
      <StyledNavigation>
        <Typography variant="h5" component="h1">
          Shop.
        </Typography>
        <Badge badgeContent={cartProductNum} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </StyledNavigation>
    </Container>
  );
};

const StyledNavigation = styled.nav`
  padding: 1.25rem 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Navigation;
