import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from 'styled-components';

const Navigation = () => {
  return (
    <Container maxWidth="lg">
      <StyledNavigation>
        <Typography variant="h5" component="h1">
          Shop.
        </Typography>
        <IconButton aria-label="Toggle Cart" color="primary">
          <Badge badgeContent={0} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
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
